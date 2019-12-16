#!/usr/bin/env node

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

(function prompt() {
    rl.question("Enter a number: ", answer => {
        if (/^\d+$/.test(answer)) {
            const n = parseInt(answer, 10);
            if (isNaN(n)) console.error(`'${answer}' is not a number`);
            else console.info(`The number ${n} is ${n % 2 === 0 ? "even" : "odd"}`);
        } else {
            console.error(`'${answer}' is not a number`);
        }
        prompt();
    });
})();