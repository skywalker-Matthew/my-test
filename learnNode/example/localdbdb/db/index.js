//db.js
var db = {};
const set = (key, value) => {
  db[key] = value;
};
const get = key => {
  return db[key];
};
module.exports = {
  get,
  set
};