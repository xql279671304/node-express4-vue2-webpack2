> 卤蛋监听系统

> 一个前端基于vue.js，后端基于Node.js的监听系统

* 监听用户行为
* 监听接口
* 监听各个模块调用

###### 前端：Vue.js2.0
* Vue.js
* Vue-Router
* Vuex
* Vue-resource

###### 后端
* Node.js
* mongoDB (mongoose)
* Express

###### 工具和语言
* Webpack
* ES6

## Directory

```
│  .babelrc           babel配置
│  .editorconfig
│  .eslintignore  
│  .eslintrc.js       eslintrc配置
│  .gitignore
│  index.html         入口页面
│  package.json
│  README.md
│  setup.html         初始化账户页面
│  webpack.config.js  webpack配置
│
├─dist                打包生成
│     
├─server              服务端
│      api.js         Restful接口
│      db.js          数据库
│      index.js
│      init.json      初始数据
│
└─src
    │  main.js        项目入口
    │  setup.js       初始化账户
    │
    ├─assets          外部引用文件
    │  ├─css
    │  ├─fonts
    │  ├─img
    │  └─js         
    │
    ├─components      vue组件
    │  ├─back         博客控制台组件
    │  ├─front        博客页面组件
    │  └─share        公共组件
    │
    ├─router          路由
    │
    ├─store           vuex文件
    │
    └─style           全局样式
```

## Setup
####环境
* Node.js **v6**
* mongoDB [Download](https://www.mongodb.com/download-center?jmp=nav#community)
[安装方法](https://docs.mongodb.com/manual/installation/)

安装完成并建立数据库文件夹后，启动mongdb
``` bash
mongod
```
安装依赖
```
npm install

```
打包生成
```
npm run build
```
运行服务器
```
npm start
```