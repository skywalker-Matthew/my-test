const load = require('./loader');
for (x in load) {
  console.log(x);
  load[x]();
}