const {resolve} = require("path");
const {readFileSync, mkdirSync, existsSync} = require("fs");
const cmd = require("./libs/cmd");
const logColor = require("./libs/logColor");
module.exports = (options) => {
    // 项目类型: vue | react
    const type = options.type;
    // 项目根目录路径
    const targetPath = resolve(process.cwd(), options.name);
    // 类型列表
    const typeList = JSON.parse(readFileSync(resolve(__dirname, "./typelist.json")));
    // 创建项目文件夹
    existsSync(targetPath) || mkdirSync(targetPath);
    // 拉取远程仓库
    cmd("git", ["clone", typeList[type], targetPath])
        .then(res => logColor(0, "create project success!!"))
        .catch(err => logColor(1, "create project error"));
}
