const express = require('express');

const { sale, auth } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.use(auth);
router.post('/create', sale.create, require('./create'));
router.get('/list', require('./list'));
router.get('/:id', require('./getById'));
router.put('/update/:id', require('./update'));

module.exports = router;
