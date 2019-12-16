#!/usr/bin/env node

const spawn = require("child_process").spawn;
const ls = spawn("who");

ls.stdout.on("data", function(data) {
    const res = data.toString();
    process.stdout.write(res);
});