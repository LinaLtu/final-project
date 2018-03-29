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

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080, function() {
    console.log("I'm listening to Your Final Project.");
});
