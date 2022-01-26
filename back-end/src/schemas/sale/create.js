const Joi = require('joi');

module.exports = Joi.object(
  {
    userEmail: Joi.string().email().required(),
    sellerEmail: Joi.string().email().required(),
    totalPrice: Joi.number().required(),
    deliveryAddress: Joi.string().required(),
    deliveryNumber: Joi.number().required(),
    products: Joi.array().required(),
  },
);