const { sale } = require('../../schemas');

module.exports = (req, _res, next) => {
    const { userEmail,
        sellerEmail,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        products,
    } = req.body;
        
    const { error } = sale.create.validate({ 
        userEmail,
        sellerEmail,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        products,
    });

    if (error) return next(error);

    next();
};