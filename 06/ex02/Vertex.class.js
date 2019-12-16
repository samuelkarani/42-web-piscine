const fs = require("fs");

function format(x, y, z, w) {
    return `Vertex(x ${x.toFixed(2)}, y: ${y.toFixed(2)}, z: ${z.toFixed(
    2
  )}, w: ${w.toFixed(2)} )`;
}

class Vertex {
    constructor([x, y, z, w = 0.0]) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        if (Vertex.verbose) console.log(`${format(x, y, z, w)} constructed.`);
    }

    toString() {
        return format(this.x, this.y, this.z, this.w);
    }
}

Vertex.verbose = false;

Vertex.doc = () => {
    return fs.readFileSync("Vertex.doc.txt", "utf8");
};

module.exports = Vertex;