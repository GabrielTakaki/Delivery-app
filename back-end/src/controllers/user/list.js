const { OK } = require('http-status-codes').StatusCodes;

const { user } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { role } = req.user;

    const users = await user.list(role);

    res.status(OK).json({ users });
  } catch (err) {
    next(err);
  }
};