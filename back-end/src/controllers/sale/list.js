const { OK } = require('http-status-codes').StatusCodes;

const { sale } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { user: { email } } = req;
    const saleList = await sale.list(email);
    res.status(OK).json(saleList);
  } catch (err) {
    next(err);
  }
};