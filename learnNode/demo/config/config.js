const path = require("path");
const rootPath = path.resolve(__dirname, "../");
const staticPath = path.resolve(__dirname, "../public");
module.exports = {
  rootPath,
  staticPath,
  "mongoHost": "localhost",
  "mongoDatabase": "demo"
}