const cookie = require('cookie');
const Keygrip = require('keygrip');

exports.getSessionFromSocket = (socket, options) => {
    let { secret, cookieName } = options || {};
    cookieName = cookieName || 'session';
    if (typeof secret == 'string') {
        secret = [secret];
    }
    if (!secret) {
        console.log('No session secret provided');
        return;
    }
    if (!socket || !socket.handshake) {
        console.log('Invalid socket');
        return;
    }
    const { headers } = socket.handshake;
    if (!headers || !headers.cookie) {
        console.log('Invalid session cookie');
        return;
    }
    const cookies = cookie.parse(headers.cookie);
    const sessionCookie = cookies[cookieName];
    const keygrip = Keygrip(secret);
    if (keygrip.verify(
        `${cookieName}=${sessionCookie}`,
        cookies[`${cookieName}.sig`]
    )) {
        try {
            return JSON.parse(Buffer.from(sessionCookie, 'base64'));
        } catch (e) {
            console.log('Invalid session cookie');
        }
    } else {
        console.log('Invalid session cookie');
    }
};
