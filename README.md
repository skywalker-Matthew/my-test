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
  - [Git](#Git)
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
  - [队式开发组](#%e9%98%9f%e5%bc%8f%e5%bc%80%e5%8f%91%e7%bb%84)
    - [C#](#c)
    - [.Net Core](#Net-Core)
    - [Unity](#Unity)
    - [Protobuf](#Protobuf)
    
## Git

Git是高效的分布式版本控制系统，配合Github使用可以很好地进行团队协作，是开发过程中最常使用到的工具，也是一项必备技能。
- [Git官方文档（英文）](https://git-scm.com/docs)
- [Git教程-廖雪峰](https://www.liaoxuefeng.com/wiki/896043488029600)
- [科协开发流程示例](https://github.com/eesast/Git-Homework)

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

- Linux：
  - [Linux命令大全](http://man.linuxde.net/)
  - [Linux命令解析（英文）](https://explainshell.com/)
- Docker
  - [Docker官方教程（英文）](https://docs.docker.com/get-started/) 
  - [Docker从入门到实践](https://yeasy.gitbooks.io/docker_practice/)
- RESTFul API
- ……

## 队式开发组

今年队式开发换用C#进行开发，以C/S架构完成逻辑与交互的分离：逻辑部分工作在.Net Core框架下，实现简单的跨平台；交互部分采用Unity设计，实现实时显示与键鼠可直接操作的游戏体验，AI则通过C++接口模拟键鼠操作。（暂定）

### C#

> C#是微软推出的一种基于.NET框架的、面向对象的高级编程语言。

C#语言编写使用的IDE为Visual Studio，推荐大家下载[Visual Studio 2019](https://visualstudio.microsoft.com/zh-hans/vs/)，

并在安装时工作负载勾选**.Net桌面开发**与**.Net Core跨平台开发**。

- [C#官方教程](https://docs.microsoft.com/zh-cn/dotnet/csharp/tutorials/)

单元测试采用MSTest。

- [使用MSTest 和 .NET Core 进行 C# 单元测试](https://docs.microsoft.com/zh-cn/dotnet/core/testing/unit-testing-with-mstest)

、同时，今年可能会采用WPF（Windows Presentation Foundation）开发一个游戏启动器/更新器/对战平台。

- [WPF官方教程](https://docs.microsoft.com/zh-cn/dotnet/framework/wpf/)

### .Net Core

> .NET Core 是开放源代码通用开发平台，由 Microsoft 和 .NET 社区在 GitHub 上共同维护。 它跨平台（支持 Windows、macOS 和 Linux），并且可用于生成设备、云和 IoT 应用程序。

.Net Core是C#代码工作的目标框架之一，具有极为简单的跨平台支持，是队式逻辑部分的目标框架，我们计划采用的版本是.Net Core 2.1（兼容2.2）。

- [.Net Core官方指南](https://docs.microsoft.com/zh-cn/dotnet/core/)

### Unity

> Unity 是一款由Unity Technologies 研发的跨平台2D / 3D 游戏引擎，可用于开发Windows、MacOS 及 Linux 平台的单机游戏。

往年Unity只用于播放回放文件，今年希望能够打造真正能“玩”的一块游戏，因此对于Unity的学习十分关键。

- [下载Unity](https://store.unity.com/cn/download)

下载Unity Hub完成后，从中安装Unity 2019.1.8f1版本并下载中文语言包。
切换语言包的方法为Edit->Preferences->Language。

Unity官方提供了大量学习资料，但目前没有中文内容。

- [Unity Learn](https://unity.com/cn/learn)

### Protobuf

> Protocol Buffers是Google开发的跨语言、跨平台的序列化工具。

Protobuf将主要用于由C#编写的各个模块之间的数据传输，选手使用的C/C++客户端与本机平台的通信另行设计。

- [Protobuf官方教程（英文）](https://developers.google.com/protocol-buffers/docs/tutorials)

PS：以上内容需要科学上网。