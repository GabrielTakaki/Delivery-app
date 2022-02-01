const socketIo = require('socket.io');

const socketIoServer = require('./app');

const port = process.env.PORT || 3001;

const io = socketIo(socketIoServer, {
    cors: {
        origin: `http://localhost:${port}`,
        methods: ['GET', 'POST'],
    },
});

require('../sockets/updateStatus')(io);

socketIoServer.listen(
    port, console.log(`Api & Socket.io Server listening on port ${port}!`),
);