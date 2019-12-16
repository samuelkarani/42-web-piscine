const fs = require("fs");

function format(red, green, blue) {
    return `Color( red: ${red}, green: ${green}, blue: ${blue} )`;
}

class Color {
    constructor(arr) {
        if (arr.length === 1) {
            this.red = Math.floor((arr[0] >> 16) % 256);
            this.green = Math.floor((arr[0] >> 8) % 256);
            this.blue = Math.floor(arr[0] % 256);
        } else {
            const [red, green, blue] = arr;
            this.red = Math.floor(red);
            this.green = Math.floor(green);
            this.blue = Math.floor(blue);
        }
        if (Color.verbose)
            console.log(`${format(this.red, this.green, this.blue)} constructed.`);
    }

    toString() {
        return format(this.red, this.green, this.blue);
    }

    add(color) {
        return new Color([
            this.red + color.red,
            this.green + color.green,
            this.blue + color.blue
        ]);
    }

    sub(color) {
        return new Color([
            this.red - color.red,
            this.green - color.green,
            this.blue - color.blue
        ]);
    }

    mult(val) {
        return new Color([this.red * val, this.green * val, this.blue * val]);
    }
}

Color.verbose = false;

Color.doc = () => {
    return fs.readFileSync("Color.doc.txt", "utf8");
};

module.exports = Color;