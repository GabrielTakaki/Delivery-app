module.exports = (sequelize, DataTypes) => {
    const salesProduct = sequelize.define('salesProduct',
    {
        quantity: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
    },
    {
      tableName: 'salesProducts',
      timestamps: false,
      underscored: true,
    });
  
    salesProduct.associate = (models) => {
        models.sale.belongsToMany(models.product, {
            as: 'products',
            through: salesProduct,
        });
        models.product.belongsToMany(models.sale, {
            as: 'sales',
            through: salesProduct,
        });
    };
  
    return salesProduct;
};
  