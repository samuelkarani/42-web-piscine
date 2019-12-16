const readline = require("readline");

if (process.argv.length >= 3) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
    let linecounter = 0;
    if (process.argv[2] == "average" || process.argv[2] == "moyenne") {
        let numberOfGrades = 0,
            averageTotal = 0;
        rl.on("line", function(line) {
            linecounter += 1;
            if (linecounter > 1) {
                let row;
                row = line.split(";"); // row[0] = user | row[1] = note/grade | row[2] = Grader | row[3] = Feedback
                if (row[2] != "moulinette" && row[1] !== "") {
                    averageTotal += parseInt(row[1]);
                    numberOfGrades += 1;
                }
            }
        }).on("close", function() {
            console.log((averageTotal / numberOfGrades).toFixed(13));
        });
    } else {
        const users = {};
        rl.on("line", function(line) {
            linecounter += 1;
            if (linecounter > 1) {
                row = line.split(";"); // row[0] = user | row[1] = note/grade | row[2] = Grader | row[3] = Feedback
                let grade = !isNaN(parseInt(row[1])) ? parseInt(row[1]) : 0;
                if (row[2] != "moulinette" && row[1] != "") {
                    if (!users[row[0]]) {
                        users[row[0]] = {
                            count: 1,
                            total: grade,
                            moulinette: 0
                        };
                    } else {
                        users[row[0]].count += 1;
                        users[row[0]].total += grade;
                    }
                } else if (row[2] == "moulinette") {
                    users[row[0]].moulinette = row[1];
                }
            }
        }).on("close", function() {
            const ordered = {};
            Object.keys(users)
                .sort()
                .forEach(function(key) {
                    ordered[key] = users[key];
                });
            if (
                process.argv[2] == "average_user" ||
                process.argv[2] == "moyenne_user"
            ) {
                Object.entries(ordered).forEach(function([key, value]) {
                    console.log(key + " : " + (value.total / value.count).toFixed(13));
                });
            } else if (
                process.argv[2] == "moulinette_variance" ||
                process.argv[2] == "ecart_moulinette"
            ) {
                Object.entries(ordered).forEach(function([key, value]) {
                    console.log(
                        key +
                        " : " +
                        (value.total / value.count - value.moulinette).toFixed(13)
                    );
                });
            }
        });
    }
}