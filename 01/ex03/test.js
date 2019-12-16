#!/usr/bin/env node

const ft_split = require("./ft_split");

console.log(ft_split("a"));
console.log(ft_split("a "));
console.log(ft_split("a b"));
console.log(ft_split("a     "));
console.log(ft_split("a b "));
console.log(ft_split("a     b   "));
console.log(ft_split("a b c"));
console.log(ft_split("a     b   c"));
console.log(ft_split("a     b   c d         e   "));
console.log(ft_split("d     c   a b         e   "));
console.log(ft_split("Hello World AAA"));