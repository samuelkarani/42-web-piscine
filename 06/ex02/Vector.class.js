const fs = require("fs");
const Vertex = require("./Vertex.class");

function format(vertex) {
    return `Vector(x ${vertex.x.toFixed(2)}, y: ${vertex.y.toFixed(
    2
  )}, z: ${vertex.z.toFixed(2)}, w: ${vertex.w.toFixed(2)} )`;
}

class Vector {
    constructor([orig = new Vertex([0, 0, 0]), dest]) {
        this.orig = orig;
        this.dest = dest;
        if (Vector.verbose) console.log(`${format(dest)} constructed.`);
    }

    get x() {
        return this.dest.x;
    }

    get y() {
        return this.dest.y;
    }

    get z() {
        return this.dest.z;
    }

    magnitude() {
        const x = this.x - this.orig.x;
        const y = this.y - this.orig.y;
        const z = this.z - this.orig.z;
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
    }

    normalize() {
        const l = this.magnitude();
        const x = (this.x - this.orig.x) / l;
        const y = (this.y - this.orig.y) / l;
        const z = (this.z - this.orig.z) / l;
        return new Vector([, new Vertex([x, y, z])]);
    }

    add(rhs) {
        const x = new Vertex([
            this.orig.x + rhs.orig.x,
            this.orig.y + rhs.orig.y,
            this.orig.z + rhs.orig.z
        ]);
        const y = new Vertex([this.x + rhs.x, this.y + rhs.y, this.z + rhs.z]);
        return new Vector([x, y]);
    }

    sub(rhs) {
        const x = new Vertex([
            this.orig.x - rhs.orig.x,
            this.orig.y - rhs.orig.y,
            this.orig.z - rhs.orig.z
        ]);
        const y = new Vertex([this.x - rhs.x, this.y - rhs.y, this.z - rhs.z]);
        return new Vector([x, y]);
    }

    opposite() {
        const x = this.x * -1;
        const y = this.y * -1;
        const z = this.z * -1;
        return new Vector([, new Vertex([x, y, z])]);
    }

    scalarProduct(k) {
        const x = this.x * k;
        const y = this.y * k;
        const z = this.z * k;
        return new Vector([, new Vertex([x, y, z])]);
    }

    dotProduct(rhs) {
        const x = this.x * rhs.x;
        const y = this.y * rhs.y;
        const z = this.z * rhs.z;
        return parseFloat(x + y + z).toFixed(11);
    }

    crossProduct(rhs) {
        const x = this.y * rhs.z - this.z * rhs.y;
        const y = this.z * rhs.x - this.x * rhs.z;
        const z = this.x * rhs.y - this.y * rhs.x;
        return new Vector([, new Vertex([x, y, z])]);
    }

    cos(rhs) {
        const x = this.x * rhs.x + this.y * rhs.y + this.z * rhs.z;
        const y =
            (this.x * this.x + this.y * this.y + this.z * this.z) *
            (rhs.x * rhs.x + rhs.y * rhs.y + rhs.z * rhs.z);
        return parseFloat((x / Math.sqrt(y)).toPrecision(14));
        // return this.dotProduct(rhs) / (this.magnitude() * rhs.magnitude());
    }

    toString() {
        return format(this.dest);
    }
}

Vector.verbose = false;

Vector.doc = () => {
    return fs.readFileSync("Vector.doc.txt", "utf8");
};

module.exports = Vector;