const Color = require("../ex00/Color.class");
const Vertex = require("./Vertex.class");

Color.verbose = false;

console.log(Vertex.doc());
Vertex.verbose = true;

const vtx0 = new Vertex([0.0, 0.0, 0.0]);
console.log(vtx0.toString());

const red = new Color([255, 0, 0]);
const green = new Color([0, 255, 0]);
const blue = new Color([0, 0, 255]);

const unitX = new Vertex([1.0, 0.0, 0.0, , green]);
const unitY = new Vertex([0.0, 1.0, 0.0, , red]);
const unitZ = new Vertex([0.0, 0.0, 1.0, , blue]);

console.log(unitX.toString());
console.log(unitY.toString());
console.log(unitZ.toString());

Vertex.verbose = false;

const sqrA = new Vertex([0.0, 0.0, 0.0]);
const sqrB = new Vertex([4.2, 0.0, 0.0]);
const sqrC = new Vertex([4.2, 4.2, 0.0]);
const sqrD = new Vertex([0.0, 4.2, 0.0]);

console.log(sqrA.toString());
console.log(sqrB.toString());
console.log(sqrC.toString());
console.log(sqrD.toString());

const A = new Vertex([3.0, 3.0, 3.0]);
console.log(A.toString());
const equA = new Vertex([9.0, 9.0, 9.0, 3.0]);
console.log(equA.toString());

Vertex.verbose = true;
