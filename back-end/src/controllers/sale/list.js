const { OK } = require('http-status-codes').StatusCodes;

const { list } = require('../../services/sale');

module.exports = async (req, res, next) => {
  try {
    req.user = { email: 'zebirita@email.com' };// Só para testes, deletar.
    const { user: { email } } = req;
    const saleList = await list(email);
    res.status(OK).json(saleList);
  } catch (err) {
    next(err);
  }
};