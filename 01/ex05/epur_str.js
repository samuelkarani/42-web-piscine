#!/usr/bin/env node

const { ft_split, ft_join } = require("../shared");

if (process.argv.length === 3) {
    const words = ft_split(process.argv[2]);
    const s = ft_join(words);
    console.log(s);
}