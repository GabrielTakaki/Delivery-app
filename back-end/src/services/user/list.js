const { user } = require('../../database/models');
const err = require('../../errors/errors');

module.exports = async (userRole) => {
  if (userRole !== 'administrator') throw err.UNAUTHORIZED;

  const users = await user.findAll();

  return users;
};