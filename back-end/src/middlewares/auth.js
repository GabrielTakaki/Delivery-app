const { auth } = require('../services');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const { name, email, role } = auth.verifyJwt(token);

    req.user = { name, email, role };

    next();
  } catch (err) {
    err.status = 401;
    next(err);
  }
};