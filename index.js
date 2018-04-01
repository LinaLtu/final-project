const express = require('express');
const app = express();
const compression = require('compression');
const db = require('./config/db');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const csurf = require('csurf');
const bcrypt = require('bcryptjs');
const s3 = require('./s3.js');
const upload = s3.upload;

const s3Url = 'https://s3.amazonaws.com/bodyjamnetwork/';

const multer = require('multer');
const uidSafe = require('uid-safe');
const path = require('path');

var diskStorage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, __dirname + '/uploads');
    },
    filename: function(req, file, callback) {
        uidSafe(24).then(function(uid) {
            callback(null, uid + path.extname(file.originalname));
        });
    }
});

var uploader = multer({
    storage: diskStorage,
    limits: {
        fileSize: 2097152
    }
});

app.use(bodyParser.json());

const cookieSessionMiddleware = cookieSession({
    secret: 'a very secretive secret',
    maxAge: 1000 * 60 * 60 * 24 * 90
});

app.use(cookieSessionMiddleware);

app.use(express.static('public'));

app.use(compression());

// app.use(csurf());

// app.use(function(req, res, next) {
//     res.cookie('mytoken', req.csrfToken());
//     next();
// });

if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.post('/registration', (req, res) => {
    if (
        req.body.firstname &&
        req.body.email &&
        req.body.password &&
        req.body.nativelang1 &&
        req.body.targetlang1
    ) {
        db.hashPassword(req.body.password).then(hash => {
            db
                .insertRegistration(
                    req.body.firstname,
                    req.body.email,
                    hash,
                    req.body.nativelang1,
                    req.body.nativelang2,
                    req.body.nativelang3,
                    req.body.targetlang1,
                    req.body.targetlang2,
                    req.body.targetlang3,
                    req.body.city,
                    req.body.age,
                    req.body.fact
                )
                .then(insertRegistration => {
                    let id = insertRegistration.rows[0].id;
                    req.session.userId = id;
                    res.redirect('/profile');
                    console.log('Session ID', id);
                });
        });
    } else {
        res.json({
            success: false
        });
    }
});

app.post('/login', (req, res) => {
    if (req.body.email && req.body.password) {
        console.log('From login', req.body);
        let hashedPass;
        db
            .getUserInfo(req.body.email)
            .then(hashedPassword => {
                if (!hashedPassword.rows[0]) {
                    res.json({
                        success: false
                    });
                    return;
                }
                console.log(hashedPassword.rows[0].password);
                hashedPass = hashedPassword;
                return true;
            })
            .then(() =>
                db.checkPassword(req.body.password, hashedPass.rows[0].password)
            )
            .then(isMatch => {
                if (isMatch === true) {
                    console.log('Password is correct');
                    let userId = hashedPass.rows[0].id;
                    req.session.userId = userId;
                    res.json({
                        success: true
                    });
                } else {
                    res.json({
                        success: false
                    });
                }
            })
            .catch(err => {
                console.log('There is an error in post /login', err);
            });
    } else {
        res.json({
            success: false,
            error: 'Password or email not filled out'
        });
    }
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('*', function(req, res) {
    if (!req.session.userId && req.url !== '/') {
        res.redirect('/');
    } else if (req.session.userId && req.url === '/') {
        res.redirect('/profile');
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});

app.listen(8080, function() {
    console.log("I'm listening to Your Final Project.");
});
