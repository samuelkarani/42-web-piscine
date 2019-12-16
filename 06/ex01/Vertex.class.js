const fs = require("fs");
const Color = require("../ex00/Color.class");

function format(x, y, z, w, color) {
    return `Vertex(x ${x.toFixed(2)}, y: ${y.toFixed(2)}, z: ${z.toFixed(
    2
  )}, w: ${w.toFixed(2)}${color ? `, ${color}` : ""} )`;
}

class Vertex {
  constructor([x, y, z, w = 1.0, color = new Color([255, 255, 255])]) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    this.color = color;
    if (Vertex.verbose)
      console.log(`${format(x, y, z, w, color)} constructed.`);
  }

  toString() {
    return format(
      this.x,
      this.y,
      this.z,
      this.w,
      Vertex.verbose ? this.color : null
    );
  }
}

Vertex.verbose = false;

Vertex.doc = () => {
  return fs.readFileSync("Vertex.doc.txt", "utf8");
};

module.exports = Vertex;