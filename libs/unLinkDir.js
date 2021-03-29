const {resolve} = require("path");
const {unlinkSync, lstatSync, readdirSync, rmdirSync, existsSync} = require("fs");
// 判断是否为文件夹
const isDir = (path) => {
    return lstatSync(path).isDirectory();
}
function unLinkDir(targetPath) {
    // 判断目录是否存在
    if(existsSync(targetPath)){
        if(isDir(targetPath)){
            readdirSync(targetPath).forEach(item => {
                let currentPath = resolve(targetPath, item);
                isDir(currentPath)?unLinkDir(currentPath): unlinkSync(currentPath);
            })
            rmdirSync(targetPath);
        }else{
            unlinkSync(targetPath)
        }
    }
}

module.exports = unLinkDir;