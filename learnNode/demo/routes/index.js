const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const doc = fs.readdirSync(__dirname);
for (id of doc) {
  if (id.match(/index/) !== null) continue;
  if (id.match(/^\w*$/) !== null) {
    if (!fs.existsSync(path.resolve(__dirname, id, 'index.js')))
      continue;
    router.use('/' + id, require('./' + id));
    console.log('API module ' + id + ' loaded');
  }
};
module.exports = router;