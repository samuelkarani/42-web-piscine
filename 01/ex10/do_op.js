#!/usr/bin/env node

if (process.argv.length === 5) {
    const a = parseInt(process.argv[2].trim());
    const b = parseInt(process.argv[4].trim());
    const op = process.argv[3].trim();

    switch (op) {
        case "+":
            return console.log(`${a + b}`);
        case "-":
            return console.log(`${a - b}`);
        case "*":
            return console.log(`${a * b}`);
        case "/":
            return console.log(`${a / b}`);
        case "%":
            return console.log(`${a % b}`);
        default:
            return console.log("Incorrect Parameters");
    }
} else {
    console.log("Incorrect Parameters");
}