#!/usr/bin/env node

const { ft_split, ft_join } = require("../shared");

if (process.argv.length >= 3) {
    const words = ft_split(process.argv[2]);

    const tmp = words[0];
    for (let i = 1; i < words.length; i++) {
        words[i - 1] = words[i];
    }
    words[words.length - 1] = tmp;
    const s = ft_join(words);
    console.log(s);
}