"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveFile = void 0;
const fs_1 = __importDefault(require("fs"));
class SaveFile {
    constructor() { }
    execute(options) {
        const { fileContent, fileDestination, fileName } = options;
        try {
            fs_1.default.mkdirSync(`./${fileDestination}`, { recursive: true });
            fs_1.default.writeFileSync(`./${fileDestination}/${fileName}.txt`, fileContent, "utf-8");
            console.log(`File ${fileName}.txt creating in ${fileDestination} folder.`);
        }
        catch (error) {
            console.error("Error saving the file:", error);
            return false;
        }
        return true;
    }
}
exports.SaveFile = SaveFile;
