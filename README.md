# AirwallexFE

## 作者
丁超

## github地址 
https://github.com/651354666/AirwallexFE

## 安装依赖
#### yarn install 或者 npm install
我自己用的yarn来安装的所有依赖，所以有yarn.lock，为避免潜在的版本冲突，建议用yarn安装。

## 打包
#### npm run build
使用了webpack打包，打包的配置都在webpack目录下，打包之后的文件在build目录中。

## 本地调试
#### npm start
配置了webpack-dev-server，默认端口3000

## 代码格式验证
#### js格式验证  npm run lint-js
#### css格式验证  npm run lint-style
#### js和css都验证  npm run lint
js验证用了eslint和airbnb的基础配置。
less验证用的lesshint

## 代码测试
#### npm run test
测试用的airbnb的测试工具enzyme，会加载test目录下的两个配置文件，并执行test目录下的三个测试文件。
