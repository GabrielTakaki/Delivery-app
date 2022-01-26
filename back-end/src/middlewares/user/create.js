const { user } = require('../../schemas');

module.exports = (req, res, next) => {
  const { name, email, password, role } = req.body;

  const { error } = user.create.validate({ name, email, password, role });

  if (error) return next(error);

  next();
};