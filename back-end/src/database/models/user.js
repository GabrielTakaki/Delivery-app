module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  user.associate = (models) => {
    user.hasMany(models.sale,
      { foreignKey: 'user_id', as: 'userSales' })
    user.hasMany(models.sale,
      { foreignKey: 'seller_id', as: 'sellerSales' });
  };

  return user;
};
