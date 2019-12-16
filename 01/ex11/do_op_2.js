#!/usr/bin/env node

if (process.argv.length === 3) {
    const arg = process.argv[2].replace(/\s+/g, "");
    if (/^-?\d+[+\-*/%]-?\d+$/gm.test(arg) === false) {
        return console.log("Syntax Error");
    }
    try {
        const result = eval(arg);
        console.log(result);
    } catch (error) {
        return console.log("Syntax Error");
    }
} else {
    console.log("Incorrect Parameters");
}