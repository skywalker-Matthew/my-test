const Special = require("../model/special");
module.exports.submit = async (special) => {
  let sp = new Special(special);
  await sp.save()
  return {
    'status': 'success'
  };
}
module.exports.result = async () => {
  return await Special.find({});
}