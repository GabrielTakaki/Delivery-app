'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'sales_products',
      {
        sale_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'sales',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          primaryKey: true,
        },
        product_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'products',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          primaryKey: true,
        },
        quantity: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales_products');
  }
};
