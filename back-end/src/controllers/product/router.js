const express = require('express');

const router = express.Router({ mergeParams: true });

router.get('/list', require('./list'));

module.exports = router;
