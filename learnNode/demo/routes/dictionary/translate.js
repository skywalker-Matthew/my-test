const dict = require("../../config/dictionary").all;

module.exports.all = async (req, res) => {
  res.status(200).send(dict);
}