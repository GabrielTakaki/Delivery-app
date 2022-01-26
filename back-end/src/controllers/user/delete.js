const { NO_CONTENT } = require('http-status-codes').StatusCodes;

const { user } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { email } = req.body;

    await user.delete(email);

    res.status(NO_CONTENT).end();
  } catch (err) {
    next(err);
  }
};