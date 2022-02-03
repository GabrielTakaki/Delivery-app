// Client Socket.io rodando no servidor para emitir mudanças de status no db
const ioClient = require('socket.io-client');

const port = process.env.PORT || 3001;

const socket = ioClient.connect(`http://localhost:${port}`, {
    reconnect: true,
});

socket.on('connect', () => console.log('Sale update emitter client connected'));

// Resto do service
const { sale, user } = require('../../database/models');

const err = require('../../errors/errors');

const nextSellerStatus = (status) => {
    if (status === 'Pendente') return 'Preparando';
    if (status === 'Preparando') return 'Em Trânsito';
    throw err.UNAUTHORIZED;
};

const nextConsumerStatus = (status) => {
    if (status === 'Em Trânsito') return 'Entregue';
    throw err.UNAUTHORIZED;
};

const nextStatus = (status, role) => {
    if (role === 'seller') return nextSellerStatus(status);
    if (role === 'customer') return nextConsumerStatus(status);
    throw err.UNAUTHORIZED;
};

module.exports = async ({ saleId, role, email }) => {
    const saleUser = await user.findOne({ where: { email } });
    if (!saleUser) throw err.UNAUTHORIZED;
    const { status } = await sale.findByPk(saleId);
    const newStatus = nextStatus(status, role);
    await sale.update({ status: newStatus }, { where: { id: saleId } });
    socket.emit('updateStatus', { saleId });
};