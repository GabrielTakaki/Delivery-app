module.exports = (sequelize, DataTypes) => {
    const sale = sequelize.define('sale',
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
      },
      sellerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true
      },
      totalPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      deliveryAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deliveryNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'sales',
      timestamps: true,
      createdAt: 'sale_date',
      updatedAt: false,
      underscored: true,
    });
  
    sale.associate = (models) => {
      sale.belongsTo(models.user,
        { foreignKey: 'userId', as: 'user' })
      sale.belongsTo(models.user,
        { foreignKey: 'sellerId', as: 'seller' });
    };
  
    return sale;
  };
  