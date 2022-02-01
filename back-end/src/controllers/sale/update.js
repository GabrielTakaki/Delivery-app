const { OK } = require('http-status-codes').StatusCodes;

const { sale } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Linha de código para testes sem usar o middleware auth
    // req.user = { email: 'fulana@deliveryapp.com', role: 'seller' };
    const { user: { email, role } } = req;
    await sale.update({ saleId: id, email, role });
    res.status(OK).end();
  } catch (err) {
    next(err);
  }
};