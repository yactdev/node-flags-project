import fs from "fs";

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContent: string;
  fileDestination: string;
  fileName: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor /* repository: FileRepository */() {}

  execute(options: Options): boolean {
    const { fileContent, fileDestination, fileName } = options;
    try {
      fs.mkdirSync(`./${fileDestination}`, { recursive: true });
      fs.writeFileSync(
        `./${fileDestination}/${fileName}.txt`,
        fileContent,
        "utf-8",
      );
      console.log(
        `File ${fileName}.txt creating in ${fileDestination} folder.`,
      );
    } catch (error) {
      console.error("Error saving the file:", error);
      return false;
    }
    return true;
  }
}
