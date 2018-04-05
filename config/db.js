var spicedPg = require('spiced-pg');
const bcrypt = require('bcryptjs');

if (!process.env.DATABASE_URL) {
    var { dbUser, dbPass } = require('../secrets.json');
}

var db = spicedPg(
    process.env.DATABASE_URL ||
        `postgres:${dbUser}:${dbPass}@localhost:5432/rubicon`
);

function hashPassword(plainTextPassword) {
    return new Promise(function(resolve, reject) {
        bcrypt.genSalt(function(err, salt) {
            if (err) {
                return reject(err);
            }
            bcrypt.hash(plainTextPassword, salt, function(err, hash) {
                if (err) {
                    return reject(err);
                }
                resolve(hash);
            });
        });
    });
}

function checkPassword(textEnteredInLoginForm, hashedPasswordFromDatabase) {
    return new Promise(function(resolve, reject) {
        bcrypt.compare(
            textEnteredInLoginForm,
            hashedPasswordFromDatabase,
            function(err, doesMatch) {
                if (err) {
                    reject(err);
                } else {
                    resolve(doesMatch);
                }
            }
        );
    });
}

function insertRegistration(
    firstname,
    email,
    password,
    nativelang1,
    nativelang2,
    nativelang3,
    targetlang1,
    targetlang2,
    targetlang3,
    city,
    age,
    fact
) {
    const q = `INSERT INTO users (firstname, email, password, nativelang1, nativelang2, nativelang3, targetlang1, targetlang2, targetlang3,
    city, age, fact) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`;
    const params = [
        firstname,
        email,
        password,
        nativelang1,
        nativelang2,
        nativelang3,
        targetlang1,
        targetlang2,
        targetlang3,
        city,
        age,
        fact
    ];
    return db
        .query(q, params)
        .then(results => {
            console.log('Registration completed!');
            return results;
        })
        .catch(err => console.log(err));
}

function getUserInfo(email) {
    const q = `SELECT * FROM users WHERE email = $1`;
    const param = [email];
    return db.query(q, param);
}

function getUserInfoById(id) {
    const q = `SELECT id, firstname, email, nativelang1, nativelang2, nativelang3, targetlang1, targetlang2, targetlang3,
    city, age, fact, url FROM users WHERE id = $1`;
    const param = [id];
    return db.query(q, param);
}

function getOtherUserInfo(other_user_id) {
    const q = `SELECT id, firstname, email, nativelang1, nativelang2, nativelang3, targetlang1, targetlang2, targetlang3,
    city, age, fact, url FROM users WHERE id = $1`;
    const param = [other_user_id];
    return db.query(q, param);
}

function insertImageIntoDB(url, id) {
    const q = `UPDATE users SET url = $1 WHERE id = $2 RETURNING *`;
    console.log('From the q: ', url, id);
    const params = [url, id];

    return db
        .query(q, params)
        .then(results => {
            let images = results.rows;
            images.forEach(function(image) {
                console.log(image);
                // let url = config.s3Url + image.image;
                // image.image = url;
            });
            return images[0];
        })
        .catch(err => console.log(err));
}

function addStarredUser(starred_user_id, loggedin_id) {
    console.log('From addStarredUser function');
    const q = `INSERT INTO starred (starreduser,loggedinuser ) VALUES ($1, $2) RETURNING *`;
    const params = [starred_user_id, loggedin_id];
    return db
        .query(q, params)
        .then(results => {
            console.log('Starred user inserted');
            return results;
        })
        .catch(err => console.log(err));
}

function getStarredUsers(loggedin_id) {
    const q = `SELECT * FROM starred WHERE loggedinuser = $1 ORDER BY id DESC`;
    const param = [loggedin_id];
    return db.query(q, param).then(results => {
        // results.rows contains an ARRAY of records
        // We need the full user info for each for them
        // Let's create an array of Promises

        var promises = [];

        console.log(`found ${results.rows.length} starred users`);

        results.rows.forEach(row => {
            promises.push(getUserInfoById(row.starreduser));
        });

        // Promise.all returns ALWAYS an ARRAY of responses
        return Promise.all(promises).then(results => {
            console.log(`number of STARRED user infos: ${results.length}`);
            return results;
        });
    });
}

function editProfile(
    id,
    {
        firstname,
        nativelang1,
        nativelang2,
        nativelang3,
        targetlang1,
        targetlang2,
        targetlang3,
        city,
        age,
        fact
    }
) {
    const q = `UPDATE users SET firstname = $1, nativelang1 = $2, nativelang2 = $3, nativelang3 = $4, targetlang1 = $5, targetlang2 = $6, targetlang3 = $7,
    city = $8, age = $9, fact = $10 WHERE id = $11`;
    const param = [
        firstname,
        nativelang1,
        nativelang2,
        nativelang3,
        targetlang1,
        targetlang2,
        targetlang3,
        city,
        age,
        fact,
        id
    ];
    return db.query(q, param).then(results => {
        console.log('Profile edited ', results);
        return results;
    });
}

function sendMessage(sender_id, recipient_id, message) {
    const q = `INSERT INTO messages (sender_id, recipient_id, message ) VALUES ($1, $2, $3) RETURNING *`;
    const params = [sender_id, recipient_id, message];
    return db.query(q, params).then(results => {
        console.log('Message inserted into DB');
        return results;
    });
}

function getMessages(id) {
    const q = `
        SELECT messages.sender_id, messages.recipient_id, messages.message, messages.sender_id, messages.id, messages.created_at, users.firstname
        FROM messages
        JOIN users
        ON messages.sender_id = users.id
        WHERE messages.recipient_id = $1`;
    const param = [id];
    return db.query(q, param).then(results => {
        return results.rows;
    });
}

function getSentMessages(id) {
    const q = `
        SELECT messages.sender_id, messages.recipient_id, messages.message, messages.sender_id, messages.id, messages.created_at, users.firstname
        FROM messages
        JOIN users
        ON messages.recipient_id = users.id
        WHERE messages.sender_id = $1`;
    const param = [id];
    return db.query(q, param).then(results => {
        return results.rows;
    });
}

function deleteMessage(message_id) {
    console.log('From delete message, data base');
    const q = `DELETE FROM messages WHERE id= $1 RETURNING *`;
    const params = [message_id];
    return db.query(q, params).then(results => {
        console.log('Message deleted');
        return results;
    });
}

function getSelectedUsers(targetlang) {
    // console.log('CIAO FROM THE DATA BASE');
    const q = `SELECT * FROM users WHERE nativelang1 = $1`;
    const param = [targetlang];
    return db.query(q, param).then(results => {
        // console.log('OKAY from DB getSelectedUsers');

        var promises = [];

        results.rows.forEach(row => {
            promises.push(getUserInfoById(row.id));
        });

        return Promise.all(promises).then(results => {
            console.log(`number of SELECTED user infos: ${results.length}`);
            return results;
        });
    });
}

module.exports.hashPassword = hashPassword;
module.exports.insertRegistration = insertRegistration;
module.exports.getUserInfo = getUserInfo;
module.exports.getUserInfoById = getUserInfoById;
module.exports.checkPassword = checkPassword;
module.exports.getOtherUserInfo = getOtherUserInfo;
module.exports.insertImageIntoDB = insertImageIntoDB;
module.exports.addStarredUser = addStarredUser;
module.exports.getStarredUsers = getStarredUsers;
module.exports.editProfile = editProfile;
module.exports.sendMessage = sendMessage;
module.exports.getMessages = getMessages;
module.exports.getSelectedUsers = getSelectedUsers;
module.exports.deleteMessage = deleteMessage;
module.exports.getSentMessages = getSentMessages;
// module.exports.getUsersByIds = getUsersByIds;
// module.exports.getUserWhoJoined = getUserWhoJoined;
