const cmd = require("./libs/cmd");
cmd("npm", ["publish", "--access", "public", "--registry", "https://registry.npmjs.org/"]);
