const {spawn} = require("child_process");
const logColor = require("./logColor");
module.exports = (cmdStr, options) => {
    // 打印命令
    console.log(`${cmdStr} ${options.join(" ")}`);
    return new Promise((resolve, reject) => {
        const ls = spawn(cmdStr, options);
        ls.stdout.on("data", data => logColor(0, data.toString(), ""));
        ls.stderr.on("data", data => logColor(0, data.toString(), ""));
        ls.on("close", code => {
            code?reject(): resolve("");
        })
    })
};

