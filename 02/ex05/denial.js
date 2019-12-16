#!/usr/bin/env node

const readline = require("readline"),
    fs = require("fs");

if (process.argv.length === 4) {
    const [, , fpath, key] = process.argv;
    if (fs.existsSync(fpath) && fs.lstatSync(fpath).isFile()) {
        const rl = readline.createInterface({
            input: fs.createReadStream(fpath)
        });

        const data = [];

        rl.on("line", function(line) {
            const [last_name, surname, email, IP, pseudo] = line.split(";");
            data.push({
                last_name,
                surname,
                email,
                IP,
                pseudo
            });
        });

        function prompt(rlio) {
            rlio.question("Enter your command: ", answer => {
                const expr = answer.replace(/\$(\w+)\['(.*?)'\]/g, (m, g1, g2) => {
                    const item = data.find(e => e[key] === g2);
                    if (g1 === "name") g1 = "last_name";
                    return item[g1];
                });
                try {
                    eval(expr);
                } catch (e) {
                    console.error(e);
                }
                prompt(rlio);
            });
        }

        rl.on("close", () => {
            if (["name", "last_name", "surname", "email", "IP", "pseudo"].includes(key))
                prompt(
                    readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                    })
                );
        });
    }
}