const mongoose = require('mongoose');
const config = require("../config/config")
mongoose.Promise = require('bluebird');
mongoose.connect(`mongodb://${config.mongoHost}/${config.mongoDatabase}`, {
  useNewUrlParser: true
});
module.exports = {
  mongoose,
  schema: mongoose.Schema,
};