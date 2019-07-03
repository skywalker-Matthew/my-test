const specialSrv = require("../../service/special");
const chkSpecial = (special) => {
  if (typeof (special.userId) != 'number') return false;
  if (!special.userId) return false;
  if (typeof (special.name) != 'string') return false;
  if (typeof (special.classId) != 'string') return false;
  if (typeof (special.gender) != 'string') return false;
  if (['male', 'female', 'other'].indexOf(special.gender) == -1) return false;
  if (typeof (special.will) != 'string') return false;
  if (['nay', 'worrior', 'mage', 'periest'].indexOf(special.will) == -1) return false;
  return true;
}
module.exports.submit = async (req, res) => {
  const {
    userId,
    name,
    classId,
    gender,
    will
  } = req.body;
  const special = {
    userId: userId * 1,
    name,
    classId,
    gender,
    will,
    time: Date.now()
  };
  if (chkSpecial(special))
    res.status(201).send(await specialSrv.submit(special));
  else
    res.status(400).send({
      'status': 'failed',
      'info': 'unacceptable json'
    });
}
module.exports.result = async (req, res) => {
  res.status(200).send(await specialSrv.result());
}