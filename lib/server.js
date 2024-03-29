const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const { PORT } = require('./constants.js');
const Api = require('./apps/api.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', Api);

const server = app.listen(PORT, () => console.log(`app started on ${PORT}`));

module.exports = { app, server };
