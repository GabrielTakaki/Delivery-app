const { user } = require('../../database/models');

module.exports = async () => {
  const sellers = await user.findAll({ where: { role: 'seller' } });
  return sellers;
};