import { CreateTable } from "./create-table.use-case";

describe("CreateTableUseCase", () => {
  test("Should create a table with default values", () => {
    const createTable = new CreateTable();
    const table = createTable.execute({ base: 5 });

    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain("Multiplication Table of 5");
    expect(table).toContain("5 x 1 = 5");
    expect(table).toContain("5 x 10 = 50");
    expect(table.split("\n").length).toBe(14); // 1 title + 10 lines + 1 empty line
  });

  test("Should create a table with custom limit", () => {
    const option = { base: 3, limit: 5 };
    const createTable = new CreateTable();
    const table = createTable.execute(option);

    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain(`Multiplication Table of ${option.base}`);
    expect(table).toContain(`${option.base} x 1 = ${option.base}`);
    expect(table).toContain(
      `${option.base} x ${option.limit} = ${option.base * option.limit}`,
    );
    expect(table.split("\n").length).toBe(option.limit + 4); // 1 title + limit lines + 1 empty line
  });

  test("Should create a table with custom limit and base", () => {
    const option = {
      base: 7,
      limit: 3,
      showTable: true,
      saveFile: false,
      name: "otro",
      destination: "test-folder",
    };
    const createTable = new CreateTable();
    const table = createTable.execute(option);

    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain(`Multiplication Table of ${option.base}`);
    expect(table).toContain(`${option.base} x 1 = ${option.base}`);
    expect(table).toContain(
      `${option.base} x ${option.limit} = ${option.base * option.limit}`,
    );
    expect(table.split("\n").length).toBe(option.limit + 4); // 1 title + limit lines + 1 empty line
  });
});
