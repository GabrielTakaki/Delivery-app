const { CREATED } = require('http-status-codes').StatusCodes;

const { user } = require('../../services');

module.exports = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const token = req.headers.authorization;

    const newUserToken = await user.create({ name, email, password, role }, token);

    res.status(CREATED).json({ token: newUserToken });
  } catch (err) {
    next(err);
  }
};
