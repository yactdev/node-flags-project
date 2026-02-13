"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yarg = void 0;
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
exports.yarg = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .option("b", {
    alias: "base",
    type: "number",
    description: "Base of the multiplication table",
    demandOption: true,
})
    .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    description: "Multiplication table limit",
})
    .option("s", {
    alias: "showTable",
    type: "boolean",
    default: false,
    description: "Show the multiplication table in the console",
})
    .option("f", {
    alias: "file",
    type: "boolean",
    default: false,
    description: "Save the multiplication table to a file",
})
    .option("n", {
    alias: "name",
    type: "string",
    description: "Name of the file to save the multiplication table",
    default: "Multiplication-Table",
})
    .option("d", {
    alias: "destination",
    type: "string",
    description: "Destination folder to save the multiplication table file",
    default: "output",
})
    .check((argv, options) => {
    if (argv.b <= 0)
        throw "Error: The base must be a positive number";
    return true;
})
    .parseSync();
