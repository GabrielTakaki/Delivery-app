const { user } = require('../../database/models');
const err = require('../../errors/errors');

module.exports = async (email) => {
  const userFound = await user.findOne({ where: { email } });

  if (!userFound) throw err.NOT_FOUND;

  await userFound.destroy();
};
