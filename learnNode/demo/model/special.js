const autoIncrement = require("mongoose-plugin-autoinc");
const {
  mongoose,
  schema
} = require("./index");
const Special = new schema({
  userId: Number,
  name: String,
  classId: String,
  gender: String,
  time: Number,
  will: {
    type: String,
    default: "nay"
  } //nay or worrior or mage or periest
});
Special.plugin(autoIncrement.plugin, "special");
module.exports = mongoose.model("special", Special);