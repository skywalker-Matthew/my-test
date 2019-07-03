# 面向 Chrome 的程序设计基础(后端,1)

## 准备工作

### 比较必要的东西

- Node.js/NPM
  在[这里](https://nodejs.org/en/)下载，请安装并设置环境变量，Windows 用户可以参照[这里](https://www.jianshu.com/p/6fbbf4c49040)

- Yarn  
  在[这里](https://yarnpkg.com/zh-Hant/docs/install)下载，请安装并设置环境变量，Windows 用户可以参照[这里](https://www.jianshu.com/p/5e111693179e)

- MongoDB
  在[这里](https://www.mongodb.com/download-center/community)下载，请安装并设置环境变量，Windows 用户可以参照[这里](https://www.jianshu.com/p/b0d6f3633f8e)

### 不那么必要的东西

- VSCode 的 js 插件
- Beautify 及其插件
- Chrome(当然 firefox 也是可以的，不推荐使用国产浏览器)
- Postman
- ...

### 配置

- 安装好以上环境后，请配置 yarn/npm 的源至淘宝源

```shell
npm config set registry http://registry.npm.taobao.org/
yarn config set registry http://registry.npm.taobao.org/
```

## 初识 Node.js

### Node.js 是什么

- Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。
- Node.js 使用了一个**事件驱动**、**非阻塞式 I/O**的模型，使其轻量又高效。
  - 具体解释
    - Node.js 是单线程的
    - 但是每做一次 IO，在 IO 的同时还可以继续进行别的事情的处理
    - 即 IO 并不会阻塞主线程
  - 举个栗子：每当进行某项功能的时候的时候，A 函数会被调用，访问一个网上的资源，由于网络延迟，3s 后才会获得返回值。我们连续调用 100 次功能看看
    - C/C++/Java 的同步实现，至少需要 3s\*100=300s
    - C/C++/Java 的多线程，需要至少需要 3s\*100/线程数量
    - Node.js 仅需要比 3s 多一点的时间
- Node.js 的语法就是 javascript 的语法。

### Node.js 的初阵

#### 开启 node

在命令行里输入`node`,你会得到一个大于号``，这就是 Node.js 的控制台**交互**。与 python 类似的，Node.js 也是控制台与执行文件一致的。即你可以理解文件的执行就是把它一行一行的丢进控制台里面。
唯一不同的是，你的控制台会告诉你每个表达式的返回值。

#### Hello,World

我们拿到一门语言，第一件事就是开启快乐的 Hello,World！
对于 Node.js 中，Hello,world!仅需要一行代码：

```javascript {cmd="node"}
console.log("Hello,World!");
```

这行代码会在命令行中输出一行大而无害的字:`Hello,World!`和一行返回值`undefined`。这说明了两件事

1. 控制台输出的函数是`console.log`
2. 它的返回值是`undefined`。

#### A+B Problem

我们来复习一下函数，实现一个 A+B 功能

```javascript {cmd="node"}
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
```

在绝大多数情况下，以下三种函数是等价的，除了在函数内需要用到`this`指针和作为构造函数时会有较大差别。

你可以在文件里或控制台里执行这段代码

#### Counter

这次我们尝试做一个上次课的异步 counter。

```javascript {cmd="node"}
const a = 10;
const counter = (x = 1) => {
  console.log(x);
  if (x < a)
    setTimeout(() => {
      counter(x + 1);
    }, 300);
};
counter();
```

或者我们可以采用更优雅的办法即`async await`
可以简单的理解为 async 函数就是伪同步的异步函数。await 语句是等待一个异步语句返回,而 Promise 的作用可以理解为异步的返回一些东西（虽然不只是这样的）

```javascript {cmd="node"}
const a = 10;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const count = async limit => {
  for (let i = 1; i <= limit; i++) {
    console.log(i);
    await sleep(300);
  }
};
count(a);
```

#### LocalDB

这一次我们尝试做一个简单的本地内存数据库。(这次是需要用到文件了)

```javascript
//db.js
var db = {};
const set = (key, value) => {
  db[key] = value;
};
const get = key => {
  return db[key];
};
module.exports => { get, set };
```

```javascript
//a.js
const db = require("./db");
const chga = () => {
  db.set("letter", "a");
};
module.exports = chga;
```

```javascript
//b.js
const db = require("./db");
const chgb = () => {
  db.set("letter", "a");
};
module.exports = chgb;
```

```javascript
const db = require("./db");
const b = require("./b");
const a = require("./a");
//index.js
const main = () => {
  a();
  console.log(db.get("letter"));
  b();
  console.log(db.get("letter"));
};
main();
```

这说明了以下 3 点特性：

- 通过不同文件引用的同一文件是同一对象即引用的文件是“引用”
- 文件的“导出”可以为任何右值且一致
- 假设 Y 是路径，X 是文件名或目录名，当 Nodejs 遇到 require(Y+X) 时，按照下面的顺序处理

1. 如果 X 是核心模块（例如：require("http")）则返回该模块且不再继续执行
2. 如果 Y 是以“./”、“/”或“../”开头
   1. 把 X 当成文件，从指定路径开始，依次查找下面文件：X、X.js、X.json、X.node，只要其中一个存在，就返回该文件，不再继续执行
   2. 把 X 当成目录，从指定路径开始，依次查找下面文件：X/package.json(main 字段)、X/index.js、X/index.json、X/index.node，只要其中一个存在，就返回该文件，不再继续执行
3. 如果 X 不是核心模块，也没有以“./”、“/”或“../”开头，则 Nodejs 会从当前模块的父目录开始，尝试从它的 /node_module 目录里加载模块，如果还是没有找到，则移动到再上一层父目录，直到文件系统的根目录
4. 抛出“not found”

#### autoloading

这里主要讲一下文件的读取

```javascript
const fs = require("fs");
const path = require("path");
const doc = fs.readdirSync(__dirname);

for (id of doc) {
  if (
    fs.statSync(path.resolve(__dirname, id)).isDirectory() &&
    fs.existsSync(path.resolve(__dirname, id, "index.js"))
  ) {
    console.log("API module " + id + " loaded");
    module.exports[id] = require(path.resolve(__dirname, id));
  }
}
```

文件是有异步的读取和同步的读取两种的，这里为了书写简单采用了同步的方法

事实上，nodejs 的模组可根据需要动态的调用。
