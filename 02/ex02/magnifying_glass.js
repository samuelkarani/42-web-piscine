#!/usr/bin/env node

const fs = require("fs");

if (process.argv.length >= 3)
    fs.readFile(process.argv[2], "utf-8", (err, html) => {
        if (!err) {
            html = html.replace(/title="(.*)"/g, (m, g) =>
                m.replace(g, g.toUpperCase())
            );
            html = html.replace(/<a.+?>(\s*.*\s*)<\/a>/g, (m, g) => {
                if (/[<>\\]/.test(g)) {
                    m.replace(/>([^<>]+?)</g, (mi, gi) => {
                        m = m.replace(gi, gi.toUpperCase());
                    });
                    return m;
                } else {
                    return m.replace(g, g.toUpperCase());
                }
            });
            console.log(html);
        }
    });