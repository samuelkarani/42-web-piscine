#!/usr/bin/env node

const readline = require("readline"),
    fs = require("fs");

function getVal(s) {
    const [one, two, tuple] = s.split(":");
    const three = tuple.split(",").join("");
    const nbr = [one, two, three].join("");
    return parseInt(nbr, 10);
}

if (process.argv.length >= 3) {
    const rl = readline.createInterface({
        input: fs.createReadStream(process.argv[2])
    });
    const delim = "-->";
    const texts = [];
    const numbers = [];
    let lcnt = 0,
        idx = 0;
    rl.on("line", (line) => {
        if (lcnt % 4 === 1) {
            const [d1, d2] = line.replace(/s/g, "").split(delim);
            numbers.push([getVal(d1) + getVal(d2), d1, d2, idx]);
            idx += 1;
        }
        if (lcnt % 4 === 2) {
            texts.push(line);
        }
        lcnt += 1;
    });
    rl.on("close", () => {
        numbers.sort((a, b) => a[0] - b[0]);
        numbers.forEach((n, i) => {
            console.log(i + 1);
            console.log(`${n[1]} ${delim} ${n[2]}`);
            console.log(texts[n[3]]);
            console.log("");
        });
    })
}