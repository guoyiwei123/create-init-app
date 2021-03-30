#!/usr/bin/env node

const commander = require("commander");
const program = new commander.Command();
const initApp = require("../initApp");
const packageJson = require('../package.json');
program
    .version(packageJson.version)
    .option("-n, --name [name]", "project name")
    .option("-t, --type [type]", "Vue or React")
    .action((options, command) =>{
        initApp(options);
    })
program.parse(process.argv);