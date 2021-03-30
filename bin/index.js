#!/usr/bin/env node

const commander = require("commander");
const program = new commander.Command();
const initApp = require("../initApp");
const packageJson = require('../package.json');
const inquirer = require("inquirer");
// 快速创建项目
if(process.argv.length > 2 && process.argv.find(item => ["-n", "-t"].includes(item))){
    program
    .version(packageJson.version)
    .option("-n, --name [name]", "project name")
    .option("-t, --type [type]", "Vue or React")
    .action((options, command) =>{
        initApp(options);
    })
    program.parse(process.argv);
// 通过命令行交互
}else{
    const questions = [
        {
            type: "input",
            name: "name",
            message: "Please input project name: "
        },{
            type: 'list',
            name: "type",
            message: "Please select project type",
            choices: ["Vue", "React"]
        }
    ]
    inquirer.prompt(questions).then((answers) => {
        initApp(answers);
    });
}


