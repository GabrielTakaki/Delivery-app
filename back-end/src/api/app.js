const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(express.json());

app.use(require('../controllers/root'));

app.use(require('../middlewares/error'));

module.exports = app;
