const { CREATED } = require('http-status-codes').StatusCodes;

const { sale } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { userEmail,
      sellerEmail,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      products } = req.body;
    const newSaleId = await sale.create({ userEmail,
      sellerEmail,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      products });
    res.status(CREATED).json({ newSaleId });
  } catch (err) {
    next(err);
  }
};