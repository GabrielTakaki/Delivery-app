const express = require('express');

const router = express.Router({ mergeParams: true });

router.post('/create', require('./create'));
router.get('/list', require('./list'));
router.get('/:id', require('./getById'));

module.exports = router;
