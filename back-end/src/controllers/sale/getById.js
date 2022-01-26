const { NOT_IMPLEMENTED } = require('http-status-codes').StatusCodes;

module.exports = (req, res, next) => {
  try {
    res.status(NOT_IMPLEMENTED).end();
  } catch (err) {
    next(err);
  }
};