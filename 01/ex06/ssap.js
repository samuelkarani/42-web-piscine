#!/usr/bin/env node

const { ft_split } = require("../shared");

const args = process.argv.slice(2);

let res = [];
for (let i = 0; i < args.length; i++) {
    const words = ft_split(args[i]);
    res.push(...words);
}

res.sort();

res.forEach(arg => {
    console.log(arg);
});