const express = require('express');

const { user, auth } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.post(
  '/register',
  user.create,
  require('./create'),
);
router.post(
  '/login',
  user.login,
  require('./login'),
);

router.use(auth);
router.get('/list', require('./list'));
router.delete('/delete', require('./delete'));

module.exports = router;
