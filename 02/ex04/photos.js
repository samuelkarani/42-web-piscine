const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

function createDir(dir) {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(file => {
            const fpath = path.join(dir, file);
            if (fs.lstatSync(fpath).isDirectory()) {
                createDir(fpath);
            } else {
                fs.unlinkSync(fpath);
            }
        });
        fs.rmdirSync(dir);
    }
    fs.mkdirSync(dir);
}

function download(url, fpath, protocol) {
    protocol.get(url, res => {
        res.pipe(fs.createWriteStream(fpath));
    });
}

if (process.argv.length === 3) {
    const url = process.argv[2];
    const dir = url.split("://")[1].split("/")[0];
    createDir(dir);
    const curl = spawn("curl", ["-L", url]);
    let html = "";
    curl.stdout
        .on("data", data => {
            html += data.toString();
        })
        .on("end", () => {
            let match;
            const re = /<img.*src="(.*?)"/g;
            while ((match = re.exec(html)) !== null) {
                let imgURL = match[1];
                if (!/:\/\//.test(imgURL)) {
                    imgURL = url + imgURL;
                }
                const arr = imgURL.split("/");
                const imgFile = arr[arr.length - 1];
                const protocol = /https:\/\//.test(imgURL) ? https : http;
                download(imgURL, path.join(dir, imgFile), protocol);
            }
        });
}