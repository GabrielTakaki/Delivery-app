const express = require('express');

const { auth } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.use(auth);
router.get('/list', require('./list'));

module.exports = router;
