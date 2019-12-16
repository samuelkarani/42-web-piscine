#!/usr/bin/env node

if (process.argv.length >= 3) {
    const argv = process.argv[2].trim().replace(/\s+/g, " ");
    console.log(argv);
}