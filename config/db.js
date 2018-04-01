var spicedPg = require('spiced-pg');
const bcrypt = require('bcryptjs');

var { dbUser, dbPass } = require('../secrets.json');

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

// function getUserInfoById(id) {
//     const q = `SELECT id, firstname, lastname, email, url, bio FROM users WHERE id = $1`;
//     const param = [id];
//     return db.query(q, param);
// }
//
// function insertImageIntoDB(url, id) {
//     const q = `UPDATE users SET url = $1 WHERE id = $2 RETURNING *`;
//     console.log('From the q: ', url, id);
//     const params = [url, id];
//
//     return db
//         .query(q, params)
//         .then(results => {
//             let images = results.rows;
//             images.forEach(function(image) {
//                 console.log(image);
//                 // let url = config.s3Url + image.image;
//                 // image.image = url;
//             });
//             return images[0];
//         })
//         .catch(err => console.log(err));
// }
//
// function insertBioIntoDB(bio, id) {
//     const q = `UPDATE users SET bio = $1 WHERE id = $2 RETURNING *`;
//     // console.log("From the q: ", url, id);
//     const params = [bio, id];
//
//     return db
//         .query(q, params)
//         .then(results => {
//             console.log('Results from insertBioIntoDB', results);
//         })
//         .catch(err => console.log(err));
// }
//
// function getFriendshipStatus(sender_id, recipient_id) {
//     const q = `SELECT status, sender_id AS sender, recipient_id FROM friendships
//     WHERE (recipient_id = $1 or sender_id = $1)
//     AND (recipient_id = $2 or sender_id = $2)
//     AND (status = 1 or status = 2)`;
//     const param = [sender_id, recipient_id];
//     return db.query(q, param);
// }
//
// function sendFriendRequest(sender_id, recipient_id, status) {
//     return getFriendshipStatus(sender_id, recipient_id).then(result => {
//         if (!result.rows.length) {
//             const q = `INSERT INTO friendships (sender_id, recipient_id, status) VALUES ($1, $2, $3) RETURNING *`;
//             const params = [sender_id, recipient_id, status];
//
//             return db
//                 .query(q, params)
//                 .then(results => {
//                     return results;
//                 })
//                 .catch(err => console.log(err));
//         } else {
//             throw new Error('Already exists');
//         }
//     });
// }
//
// function deleteFriend(sender, recipient_id) {
//     const q = `UPDATE friendships SET status = 0
//     WHERE ((sender_id = $1 AND recipient_id = $2)
//     OR (recipient_id = $1 AND sender_id = $2))
//     AND (status = 2)
//     RETURNING *`;
//     const params = [sender, recipient_id];
//
//     return db
//         .query(q, params)
// }
//
// // function updateToPending(sender, recipient_id) {
// //     const q = `UPDATE friendships SET status = 1
// //     WHERE (sender_id = $1 AND recipient_id = $2)
// //     OR (recipient_id = $1 AND sender_id = $2)
// //     RETURNING *`;
// //     const params = [sender, recipient_id];
// //
// //     return db
// //         .query(q, params)
// // }
//
// function acceptFriendRequest(sender, recipient_id) {
//     const q = `UPDATE friendships SET status = 2
//     WHERE ((sender_id = $1 AND recipient_id = $2)
//     OR (recipient_id = $1 AND sender_id = $2))
//     AND (status = 1)
//     RETURNING *`;
//     const params = [sender, recipient_id];
//
//     return db.query(q, params);
// }
//
// function cancelFriendRequest(sender, recipient_id) {
//     const q = `UPDATE friendships SET status = 0
//     WHERE ((sender_id = $1 AND recipient_id = $2)
//     OR (recipient_id = $1 AND sender_id = $2))
//     AND (status = 1)
//     RETURNING *`;
//     const params = [sender, recipient_id];
//
//     return db
//         .query(q, params)
//         .then(results => {
//             console.log('Results from acceptFriendRequest', results);
//         })
//         .catch(err => console.log(err));
// }
//
// function rejectFriendRequest(sender, recipient_id) {
//     const q = `UPDATE friendships SET status = 3
//     WHERE ((sender_id = $1 AND recipient_id = $2)
//     OR (recipient_id = $1 AND sender_id = $2))
//     AND (status = 1)
//     RETURNING *`;
//     const params = [sender, recipient_id];
//
//     return db
//         .query(q, params)
//         .then(results => {
//             console.log('Results from acceptFriendRequest', results);
//         })
//         .catch(err => console.log(err));
// }
//
//
// function getAllFriends(recipient_id) {
//     const q = `
//     SELECT users.id, firstname, lastname, url, status
//     FROM friendships
//     JOIN users
//     ON (status = 1 AND recipient_id = $1 AND sender_id = users.id)
//     OR (status = 2 AND recipient_id = $1 AND sender_id = users.id)
//     OR (status = 2 AND sender_id = $1 AND recipient_id = users.id)
// `;
//     const params = [recipient_id];
//
//     return db
//         .query(q, params)
//         .then(results => {
//             console.log('Results from acceptFriendRequest');
//             return results;
//         })
//         .catch(err => console.log(err));
// }
//
// function getUsersByIds(arrayOfIds) {
//     const q = `SELECT firstname, lastname, url, id FROM users WHERE id = ANY($1)`;
//     const params = [arrayOfIds];
//
//     return db.query(q, params);
// }
//
// function getUserWhoJoined(userId) {
//     const q = `SELECT firstname, lastname, url, id FROM users WHERE id = ($1)`;
//     const params = [userId];
//
//     return db.query(q, params);
// }
//
// //SELECT status, sender_id AS sender, recipient_id FROM friendship
// //WHERE (recipient_id = $1 or sender_id = $1)
// //AND (recipient_id = $2 or sender_id = $2)
//
module.exports.hashPassword = hashPassword;
module.exports.insertRegistration = insertRegistration;
module.exports.getUserInfo = getUserInfo;
// module.exports.getUserInfoById = getUserInfoById;
module.exports.checkPassword = checkPassword;
// module.exports.insertImageIntoDB = insertImageIntoDB;
// module.exports.insertBioIntoDB = insertBioIntoDB;
// module.exports.sendFriendRequest = sendFriendRequest;
// module.exports.getFriendshipStatus = getFriendshipStatus;
// module.exports.acceptFriendRequest = acceptFriendRequest;
// module.exports.deleteFriend = deleteFriend;
// module.exports.cancelFriendRequest = cancelFriendRequest;
// module.exports.getAllFriends = getAllFriends;
// module.exports.rejectFriendRequest = rejectFriendRequest;
// module.exports.getUsersByIds = getUsersByIds;
// module.exports.getUserWhoJoined = getUserWhoJoined;
