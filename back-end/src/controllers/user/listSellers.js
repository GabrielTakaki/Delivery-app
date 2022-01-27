const { OK } = require('http-status-codes').StatusCodes;

const { user } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const sellers = await user.listSellers();

    res.status(OK).json({ users: sellers });
  } catch (err) {
    next(err);
  }
};