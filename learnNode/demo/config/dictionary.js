const dict = {
  "male": "男",
  "female": "女",
  "other": "其他",
  "worrior": "战士",
  "mage": "法师",
  "pirest": "牧师",
  "nay": "不去",
  "unacceptable json": "格式错误",
}
module.exports.trans = (data) => {
  const dec = decodeURIComponent(data);
  return (dict[dec]) ? dict[dec] : dec;
}
module.exports.all = dict;