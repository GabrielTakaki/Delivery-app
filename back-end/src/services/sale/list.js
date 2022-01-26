const { Op } = require('sequelize');

const { sale, user } = require('../../database/models');

module.exports = async (email) => {
    const saleUser = await user.findOne({ where: { email } });
    const saleList = await sale.findAll(
        { 
            where: { [Op.or]: [{ userId: saleUser.id }, { sellerId: saleUser.id }] },
            attributes: { exclude: ['user_id', 'seller_id'] },
        },
    );
    return saleList;
};