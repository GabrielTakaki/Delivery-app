const { sale, product } = require('../../database/models');

module.exports = async (id) => {
    const found = await sale.findByPk(id,
        { 
            include: [{ model: product, as: 'products' }],
            attributes: { exclude: ['user_id', 'seller_id'] },
        });
    return found;
};