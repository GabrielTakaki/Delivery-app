const md5 = require('md5');

const auth = require('../auth');
const { user } = require('../../database/models');
const err = require('../../errors/errors');

module.exports = async ({ name, email, password, role }, token) => {
    let newUserRole = role || 'customer'; 
  
    if (!token || auth.verifyJwt(token).role !== 'administrator') newUserRole = 'customer';

    if (await user.findOne({ where: { email } })) throw err.ALREADY_EXISTS;

    await user.create({
      name,
      email,
      password: md5(password),
      role: newUserRole,
    });

    const newUserToken = auth.generateJwt({ name, email, role: newUserRole });

    return newUserToken;
};