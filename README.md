# 04-Multiplicación

A Node.js/TypeScript CLI application that generates multiplication tables and saves them to files.

## Setup

Install dependencies:

```bash
npm install
```

## Usage

### Development with watch mode

```bash
npm run dev:nodemon
```

### Direct execution

```bash
npm run dev
```

### Custom arguments

```bash
npx ts-node ./src/app.ts -b <base> -l <limit> [-s] [-f]
```

**Flags:**

- `-b, --base` - Base number for multiplication table (required)
- `-l, --limit` - Limit/number of multiplications (required)
- `-s, --save` - Save output to file
- `-f, --file` - Overwrite existing files
- `-n, --name` - Name of the file to save the multiplication table
- `-d, --destination` - Destination folder to save the multiplication table file

**Example:**

```bash
npx ts-node ./src/app.ts -b 11 -l 13 -s
```

## Building Executables

The project can be packaged into standalone executables that don't require Node.js to be installed.

### Build macOS executable

```bash
npm run build:macos
```

This creates a `multiplicacion-macos` executable that can run on macOS systems.

### Build executables for all platforms

```bash
npm run build:all
```

This creates executables for:
- macOS: `multiplicacion-macos`
- Linux: `multiplicacion-linux`
- Windows: `multiplicacion-win.exe`

### Using the executable

Once built, you can run the executable directly:

```bash
# macOS
./multiplicacion-macos -b 11 -l 13 -s

# Linux
./multiplicacion-linux -b 11 -l 13 -s

# Windows
multiplicacion-win.exe -b 11 -l 13 -s
```

The executable supports all the same flags as the development version.

## Project Structure

```
src/
├── app.ts                 # Main application entry point
├── app.logic.ts          # Business logic
├── config/
│   └── plugins/
│       └── args.plugins.ts   # CLI argument parser configuration
└── presentation/
    ├── server-app.ts    # Server/presentation layer
    └── domain/
        └── use-cases/
            ├── create-table.use-case.ts    # Table generation logic
            └── save-file.use-case.ts       # File saving logic

output/                   # Generated multiplication table files
```

## Features

- Generate multiplication tables for any base number
- Customize the number of multiplications
- Save output to text files
- File overwrite protection (use `-f` flag to force)
- Watch mode for automatic reload during development
- Standalone executables for macOS, Linux, and Windows
