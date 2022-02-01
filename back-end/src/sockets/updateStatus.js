module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('New connection on socket server');
        socket.on('updateStatus', (newStatus) => {
            io.emit('statusUpdate', newStatus);
        });
    });
};