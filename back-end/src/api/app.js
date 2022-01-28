const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/images', express.static(path.join(__dirname, '..', '..', 'public')));

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(require('../controllers/root'));

app.use(require('../middlewares/error'));

module.exports = app;
