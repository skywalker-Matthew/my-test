const fs = require('fs');
const path = require('path');
const doc = fs.readdirSync(__dirname);

for (id of doc) {
  if (
    fs.statSync(path.resolve(__dirname, id)).isDirectory() &&
    fs.existsSync(path.resolve(__dirname, id, 'index.js'))
  ) {
    console.log('API module ' + id + ' loaded');
    module.exports[id] = require(path.resolve(__dirname, id));
  }
};