"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const args_plugins_1 = require("./config/plugins/args.plugins");
const server_app_1 = require("./presentation/server-app");
(async () => {
    await main();
    const { b } = args_plugins_1.yarg;
    console.log(`Multiplication Table of ${b}`);
})();
async function main() {
    console.log(`main executed`);
}
const { b: base, l: limit, s: showTable, f: saveFile, n: name, d: destination, } = args_plugins_1.yarg;
server_app_1.ServerApp.run({ base, limit, showTable, saveFile, name, destination });
