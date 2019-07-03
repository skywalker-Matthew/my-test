const express = require('express');
const router = express.Router();
const sign_upCtrl = require('./sign_up');

router.post('/', sign_upCtrl.submit);
router.get('/', sign_upCtrl.result);

module.exports = router;