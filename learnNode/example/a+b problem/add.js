//普通的函数
function add(a, b) {
  return a + b;
}
//箭头函数
const add2 = (a, b) => {
  return a + b;
};
//箭头函数的省略写法
const add3 = (a, b) => a + b;

console.log(add(1, 3)); //expect 4
console.log(add2(2, 3)); //expect 5
console.log(add3(4, 3)); //expect 7