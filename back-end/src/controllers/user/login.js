const { OK } = require('http-status-codes').StatusCodes;

const { user } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const token = await user.login({ email, password });

    res.status(OK).json({ token });
  } catch (err) {
    next(err);
  }
};