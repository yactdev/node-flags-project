import yargs, { check } from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
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
    if (argv.b <= 0) throw "Error: The base must be a positive number";
    return true;
  })
  .parseSync();
