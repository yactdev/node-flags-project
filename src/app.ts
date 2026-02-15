import { yarg } from "./config/plugins/args.plugins";
import { ServerApp } from "./presentation/server-app";
import os from "node:os";

(async () => {
  await main();
  const { b } = yarg;
  console.log(`Multiplication Table of ${b}`);
})();

async function main() {
  console.log(`main executed`);
}

const {
  b: base,
  l: limit,
  s: showTable,
  f: saveFile,
  n: name,
  d: destination,
} = yarg;

ServerApp.run({ base, limit, showTable, saveFile, name, destination });
