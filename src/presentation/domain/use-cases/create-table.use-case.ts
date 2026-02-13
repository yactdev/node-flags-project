export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor /** 
    
    DI - Dependency Injection
    */() {}

  execute({ base, limit = 10 }: CreateTableOptions) {
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
