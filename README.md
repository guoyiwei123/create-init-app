## 快速搭建项目工具

### 使用说明
-   安装
```
npm i -g @ninggure/create-init-app
```
-   命令
快速创建项目
```
$ create-init-app -n project1 -t react
# or
$ npx create-init-app -n project1 -t react
```

也可以通过命令行交互创建
```
$ create-init-app
? Please input project name: project111
? Please select project type (Use arrow keys)
❯ Vue 
  React 
```

-   参数说明

|参数|说明|
|-|-|
|-n|-n <项目名>|
|-t|-t <模板名称>, 目前模板只支持vue和react，例如 -t vue|

> 后续会添加其他项目模板，暂时只支持搭建vue和react

