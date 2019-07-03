const db = require("./db");
const b = require("./b");
const a = require("./a");
//index.js
const main = () => {
  a();
  console.log(db.get("letter"));
  b();
  console.log(db.get("letter"));
}
main();