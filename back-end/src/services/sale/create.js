const Sequelize = require('sequelize');
const config = require('../../database/config/config');

const sequelize = new Sequelize(config.development);

const { sale, user, salesProduct } = require('../../database/models');

module.exports = async ({ 
    userEmail,
    sellerEmail,
    products,
    ...data }) => {
        const saleUser = await user.findOne({ where: { email: userEmail } });
        const saleSeller = await user.findOne({ where: { email: sellerEmail } });
        const t = await sequelize.transaction();
        const newSale = await sale.create({
        userId: saleUser.id,
        sellerId: saleSeller.id,
        status: 'Pendente',
        ...data,
    }, { transaction: t });
    const salesProducts = products.map((product) => ({ ...product, saleId: newSale.id }));
    await salesProduct.bulkCreate(salesProducts, { transaction: t });
    await t.commit();
    return newSale.id;
};