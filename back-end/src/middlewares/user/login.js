const { user } = require('../../schemas');

module.exports = (req, _res, next) => {
  try {
    const { email, password } = req.body;

    const { error } = user.login.validate({ email, password });

    if (error) return next(error);

    next();
  } catch (err) {
    next(err);
  }
};