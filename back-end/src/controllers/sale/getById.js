const { OK } = require('http-status-codes').StatusCodes;

const { getById } = require('../../services/sale');

module.exports = async (req, res, next) => {
  try {
    const { id = 16 } = req.params;
    const sale = await getById(id);
    res.status(OK).json(sale);
  } catch (err) {
    next(err);
  }
};