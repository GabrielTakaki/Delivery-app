const express = require('express');

const root = express.Router({ mergeParams: true });

root.use('/user', require('./user/router'));
root.use('/sale', require('./sale/router'));
root.use('/product', require('./product/router'));

module.exports = root;