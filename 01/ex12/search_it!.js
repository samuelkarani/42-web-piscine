#!/usr/bin/env node

if (process.argv.length >= 4) {
    const key = process.argv[2];
    const args = process.argv.slice(3);

    let store = {};
    for (let i = 0; i < args.length; i++) {
        const [key, val] = args[i].split(":");
        store[key] = val;
    }
    if (store[key]) console.log(store[key]);
}