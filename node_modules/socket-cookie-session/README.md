## Usage

```js
const { getSessionFromSocket } = require('socket-cookie-session');

io.on('connection', function(socket) {
    const session = getSessionFromSocket(socket, {
        secret: sessionSecret
    });

    if (!session || !session.user) {
        return socket.disconnect(true);
    }

    const userId = session.user.id;
});
```
