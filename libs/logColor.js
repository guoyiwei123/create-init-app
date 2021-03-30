const chalk = require("chalk");
module.exports = (type, text, typeText) => {
    let resLog = "";
    if(type){
        if(typeText != ""){
            resLog += chalk.rgb(0,0,0).bgRgb(255, 0, 51).bold(` ${typeText || "ERROR"} `);
        }
        resLog += chalk.rgb(255, 0, 51).bgRgb(0, 0, 0)(` ${text} `);
    }else{
        if(typeText != ""){
            resLog += chalk.rgb(0,0,0).bgRgb(51, 255, 153).bold(` ${typeText || "SUCCESS"} `);
        }
        resLog += chalk.rgb(51, 255, 153).bgRgb(0, 0, 0)(` ${text} `);
    }
    console.log(resLog);
}