#!/usr/bin/env node

const { ft_split } = require("../shared");

const args = process.argv.slice(2);

let res = [];
for (let i = 0; i < args.length; i++) {
    const words = ft_split(args[i]);
    res.push(...words);
}

function isNum(c) {
    return c >= "0" && c <= "9";
}

function isLetter(c) {
    return (c >= "A" && c <= "Z") || (c >= "a" && c <= "z");
}

function isSpecial(c) {
    return !isNum(c) && !isLetter(c);
}

function weight(c) {
    if (isLetter(c)) return 1;
    if (isNum(c)) return 2;
    return 3;
}

res.sort((a, b) => {
    let i = 0,
        res;
    while (i < a.length && i < b.length && a[i] === b[i]) {
        i++;
    }
    if (i === a.length && i === b.length) {
        res = 0;
    } else if (
        (isLetter(a[i]) && isLetter(b[i])) ||
        (isNum(a[i]) && isNum(b[i])) ||
        (isSpecial(a[i]) && isSpecial(b[i]))
    ) {
        const x = isLetter(a[i]) ? a[i].toLowerCase() : a[i];
        const y = isLetter(b[i]) ? b[i].toLowerCase() : b[i];
        if (x < y) res = -1;
        else if (x > y) res = 1;
        else res = 0;
    } else {
        res = weight(a[i]) - weight(b[i]);
    }
    return res;
});

res.forEach(arg => {
    console.log(arg);
});