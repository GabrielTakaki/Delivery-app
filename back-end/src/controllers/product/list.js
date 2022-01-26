const { OK } = require('http-status-codes').StatusCodes;

const { product } = require('../../database/models');

module.exports = async (req, res, next) => {
  try {
    const products = await product.findAll();
    res.status(OK).json(products);
  } catch (err) {
    next(err);
  }
};