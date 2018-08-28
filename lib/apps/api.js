const { generateAvatar } = require('./monster-factory.js');

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ hello: 'monsters!' });
});

router.get('/avatars/:identifier', (req, res) => {
  res.type('png');
  res.end(generateAvatar(req.params['identifier']), 'binary');
});

module.exports = router;
