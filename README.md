# Training

暑期培训参考资料

参考文档与网站列于下方，暑期培训所配 PPT 及 demo 请查阅对应文件夹。

> 注意：
>
> - 以下参考资料大部分为简体中文，但部分官方中文文档可能存在过于明显的翻译腔、少数不准确翻译及过时问题，有能力的同学应切换到英文文档进行学习和参考。
>
> - 文档仅作为参考，是一次性通读还是遇到问题再进行查阅，需要同学们权衡。

## 目录

- [Training](#Training)
  - [目录](#%E7%9B%AE%E5%BD%95)
  - [网站组](#%E7%BD%91%E7%AB%99%E7%BB%84)
    - [Node.js 与 NPM](#Nodejs-%E4%B8%8E-NPM)
    - [TypeScript](#TypeScript)
    - [前端](#%E5%89%8D%E7%AB%AF)
      - [HTML / JavaScript / CSS（基础）](#HTML--JavaScript--CSS%E5%9F%BA%E7%A1%80)
      - [React（前端框架）](#React%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6)
      - [Ant Design（前端 UI 库）](#Ant-Design%E5%89%8D%E7%AB%AF-UI-%E5%BA%93)
    - [后端](#%E5%90%8E%E7%AB%AF)
      - [JavaScript / Node.js（基础）](#JavaScript--Nodejs%E5%9F%BA%E7%A1%80)
      - [Express（后端框架）](#Express%E5%90%8E%E7%AB%AF%E6%A1%86%E6%9E%B6)
      - [MongoDB（数据库）](#MongoDB%E6%95%B0%E6%8D%AE%E5%BA%93)
    - [其他](#%E5%85%B6%E4%BB%96)

## 网站组

### Node.js 与 NPM

> 现代 JavaScript 除了运行在浏览器上之外，还往往跑在一个 JavaScript 运行时环境中，称为 Node。Node 使用了与 Chrome 相同的 V8 JavaScript 引擎，使得 JavaScript 的运行不再需要浏览器环境。
>
> Node.js 是现代前端与后端运行的基础。

无需深入了解 Node.js，但要在前后端的实践中大致了解它的作用。

> NPM 是 `Node Package Manager` 的缩写，即 Node.js 包管理系统，类似 Python 的 pip 和 Debian 的 apt，它使得引入其他库变得简单。
>
> NPM 中的包大部分都是由 JavaScript 编写，我们可以通过 NPM 向自己的 JavaScript 项目引入其他人编写的代码，从而避免造轮子。

通过[示例项目](https://github.com/eesast/sast-weekly-web)了解 `package.json` 的大致模样及引入的 NPM 是如何在项目中被使用的。

### TypeScript

> JavaScript 是一个不具有强类型的动态语言，这赋予了它极大的灵活性，但也带来了开发和生产上可能存在的问题。TypeScript 是 JavaScript 的超集，使得 JavaScript 中的每一个变量和函数都具有和 C 一样的类型定义。你可以利用 TypeScript 在编译期进行类型检查，提前发现错误。
>
> TypeScript 是前端与后端的默认语言

请先了解 JavaScript 语法，再看[示例项目](https://github.com/eesast/sast-api)，你会发现他们没有本质的不同。

但是，要能够熟练地为 JavaScript 参加类型定义，可能需要更多的学习。

- [TypeScript 官方文档（英文）](https://www.typescriptlang.org/docs/home.html)

### 前端

#### HTML / JavaScript / CSS（基础）

- 快速了解与入门：[重新介绍 JavaScript（JS 教程）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- 完整的参考手册：[Mozilla Developer Network (MDN) Web Docs](https://developer.mozilla.org/zh-CN/)

#### React（前端框架）

- [React 官方中文文档](https://zh-hans.reactjs.org/)
- 边做边学：[React 手把手教程](https://zh-hans.reactjs.org/tutorial/tutorial.html)
- 一步步学习概念：[React 完整介绍](https://zh-hans.reactjs.org/docs/hello-world.html)
- [示例项目](https://github.com/eesast/sast-weekly-web)

#### Ant Design（前端 UI 库）

- 用时参考：[Ant Design 组件 API 介绍](https://ant.design/docs/react/introduce-cn)
- [示例项目](https://github.com/eesast/sast-weekly-web)

### 后端

#### JavaScript / Node.js（基础）

- 快速了解与入门：[重新介绍 JavaScript（JS 教程）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- 完整的参考手册：[Mozilla Developer Network (MDN) Web Docs](https://developer.mozilla.org/zh-CN/)
- 完整的参考手册：[Node.js API 文档（英文）](https://nodejs.org/dist/latest-v12.x/docs/api/)

#### Express（后端框架）

- [Express 官方文档（英文）](https://expressjs.com/)
- [示例项目](https://github.com/eesast/sast-api)

#### MongoDB（数据库）

这里我们用 MongoDB 的一个 ODM（Object Document Mapper）mongoose 进行数据库操作。

需要熟悉 MongoDB 数据库的简单部署和 mongoose 的数据库操作。

- [MongoDB 官方文档](https://docs.mongodb.com（英文）)
- [mongoose 官方文档](https://mongoosejs.com/docs/index.html（英文）)

### 其他

可以了解的其他内容可能有：

- Linux
- Docker
- RESTFul API
- ……
