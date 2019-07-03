const express = require('express');
const router = express.Router();
const translateCtrl = require('./translate');

router.get('/', translateCtrl.all);

module.exports = router;