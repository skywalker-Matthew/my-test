//b.js
const db = require("./db");
const chgb = () => {
  db.set("letter", "b");
};
module.exports = chgb;