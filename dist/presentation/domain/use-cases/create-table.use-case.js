"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTable = void 0;
class CreateTable {
    constructor() { }
    execute({ base, limit = 10 }) {
        let table = "";
        const title = `===============================
Multiplication Table of ${base}
===============================\n\n`;
        for (let i = 1; i <= limit; i++) {
            const result = base * i;
            table += `${base} x ${i} = ${result}\n`;
        }
        return title + table;
    }
}
exports.CreateTable = CreateTable;
