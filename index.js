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

app.use(function(req, res, next) {
    next();
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

// app.get('/', (req, res) => {
//     if (!req.session.userId) {
//         res.redirect('/');
//     } else {
//         res.redirect('/profile');
//     }
// });

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
                    console.log('Req.session from login', userId);
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

app.get('/logout', function(req, res) {
    req.session = null;

    res.json({
        success: true
    });
});

app.get('/get-user-info', function(req, res) {
    db
        .getUserInfoById(req.session.userId)
        .then(results => {
            if (results.rows[0].url != null) {
                results.rows[0].url = s3Url + results.rows[0].url;
            }
            res.json({ data: results.rows });
        })
        .catch(err => {
            console.log('Something went wrong', err);
            res.sendStatus(500);
        });
});

app.get('/get-other-user-info/:id', function(req, res) {
    if (req.params.id == req.session.userId) {
        console.log('Same');
        res.json({
            data: 'same'
        });
    } else {
        db
            .getOtherUserInfo(req.params.id)
            .then(results => {
                if (results.rows[0].url != null) {
                    results.rows[0].url = s3Url + results.rows[0].url;
                }

                res.json({ data: results.rows });
                // res.json({ data: results.rows[0] });
            })
            .catch(err => {
                console.log('Something went wrong', err);
                res.sendStatus(500);
            });
    }
});

app.post('/upload', uploader.single('file'), s3.upload, function(req, res) {
    if (req.file) {
        db
            .insertImageIntoDB(req.file.filename, req.session.userId)
            .then(results => {
                res.json({
                    data: s3Url + results.url,
                    id: req.session.userId
                });
            });
    } else {
        console.log("Upload didn't work");
        res.json({
            success: false
        });
    }
});

app.post('/add-starred-user/:id', function(req, res) {
    db.addStarredUser(req.params.id, req.session.userId).then(results => {});
});

app.get('/get-starred-users', function(req, res) {
    db.getStarredUsers(req.session.userId).then(results => {
        console.log(
            `index.js: number of STARRED user infos: ${results.length}`
        );

        // We have an array of RESPONSES, let's create an array of user profiles

        let users = [];
        results.forEach(response => {
            users.push(response.rows[0]);
        });

        res.json({
            data: users
        });
    });
});

app.put('/users-me', function(req, res) {
    console.log('req.body', req.body);

    db
        .editProfile(req.session.userId, req.body)
        .then(results => {
            res.json({
                message: 'Profile successfully updated.'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                hasError: 1,
                message: 'Internal error.'
            });
        });
});

app.post('/send-message/:id', function(req, res) {
    console.log('From server, send message', req.body);
    db
        .sendMessage(req.session.userId, req.params.id, req.body.message)
        .then(results => {
            res.json({
                message: 'Message sent'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                hasError: 1,
                message: 'Internal error.'
            });
        });
});

app.get('/get-messages', function(req, res) {
    console.log("we're getting messages from the server");
    db.getMessages(req.session.userId).then(messages => {
        console.log(`messages from the SERVER ${messages}`);
        //
        // let messages = [];
        // results.forEach(response => {
        //     messages.push(response.rows[0]);
        // });

        res.json({
            messages
        });
    });
});

// if (req.params.id == req.session.userId) {
//     console.log('Same');
//     res.json({
//         data: 'same'
//     });
// } else {
//     console.log('From getOtherUserInfo ', req.params.id);
//     db
//         .getOtherUserInfo(req.params.id)
//         .then(results => {
//             console.log('From getOtherUserInfo ', results.rows);
//             results.rows[0].url = s3Url + results.rows[0].url;
//             res.json({ data: results.rows });
//             // res.json({ data: results.rows[0] });
//         })
//         .catch(err => {
//             console.log('Something went wrong', err);
//             res.sendStatus(500);
//         });

// ).then(function([userInfo, friendshipStatus]) {
//             if (userInfo.rows.length === 0) {
//                 res.sendStatus(404);
//             } else {
//                 if (userInfo.rows[0].url) {
//                     console.log(userInfo.rows[0].url);
//                     userInfo.rows[0].url = s3Url + userInfo.rows[0].url;
//                 }
//             }
//             res.json({
//                 userInfo: userInfo.rows[0],
//                 friendshipStatus: friendshipStatus.rows[0]
//             });
//         });
//     }

// app.get('*', function(req, res) {
//     res.sendFile(__dirname + '/index.html');
// });

app.get('*', function(req, res) {
    if (!req.session.userId && req.url !== '/') {
        res.redirect('/');
    } else if (req.session.userId && req.url === '/') {
        res.redirect('/profile');
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});

app.listen(3000, function() {
    console.log("I'm listening to Your Final Project.");
});
