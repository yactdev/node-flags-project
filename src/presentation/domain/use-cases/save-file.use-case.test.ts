import { afterEach } from "node:test";
import fs from "fs";
import { SaveFile } from "./save-file.use-case";

describe("Guarrdar archivo", () => {
  afterEach(() => {
    fs.rmSync("./test-folder", { recursive: true });
  });

  const saveFile = new SaveFile();
  const filePath = "./test-folder/test-file.txt";
  test("Should save a file successfully", () => {
    const options = {
      fileContent: "testing file content",
      fileDestination: "test-folder",
      fileName: "test-file",
    };
    const result = saveFile.execute(options);

    expect(result).toBe(true);
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    expect(fileContent).toBe(options.fileContent);
    expect(fileExists).toBe(true);
  });
});
