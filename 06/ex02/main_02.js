const Vertex = require("./Vertex.class");
const Vector = require("./Vector.class");

Vertex.verbose = false;

console.log(Vector.doc());
Vector.verbose = true;

const vtxO = new Vertex([0.0, 0.0, 0.0]);
const vtxX = new Vertex([1.0, 0.0, 0.0]);
const vtxY = new Vertex([0.0, 1.0, 0.0]);
const vtxZ = new Vertex([0.0, 0.0, 1.0]);

const vtcXunit = new Vector([vtxO, vtxX]);
const vtcYunit = new Vector([vtxO, vtxY]);
const vtcZunit = new Vector([vtxO, vtxZ]);

console.log(vtcXunit.toString());
console.log(vtcYunit.toString());
console.log(vtcZunit.toString());

const dest1 = new Vertex([-12.34, 23.45, -34.56]);
Vertex.verbose = true;
const vtc1 = new Vector([, dest1]);
Vertex.verbose = false;

// both orig2's used interchagebly in the sample output!
// const orig2 = new Vertex([23.87, -37.95, 78.34]);
const orig2 = new Vertex([-12.34, 23.45, -34.56]);
const dest2 = new Vertex([-36.21, 61.4, -112.9]);
const vtc2 = new Vector([orig2, dest2]);

console.log(`Magnitude is ${vtc2.magnitude()}`);

const nVtc2 = vtc2.normalize();
console.log(`Normalized $vtc2 is ${nVtc2}`);
console.log(`Normalized $vtc2 magnitude is ${nVtc2.magnitude()}`);

console.log("vtc1 + vtc2 is " + vtc1.add(vtc2));
console.log("vtc1 - vtc2 is " + vtc1.sub(vtc2));
console.log("opposite of vtc1 is " + vtc1.opposite());
console.log("scalar product of vtc1 and 42 is " + vtc1.scalarProduct(42));
console.log("dot product of vtc1 and vtc2 is " + vtc1.dotProduct(vtc2));
console.log("cross product of vtc1 and vtc2 is " + vtc1.crossProduct(vtc2));
console.log(
    "cross product of vtcXunit and vtcYunit is " +
    vtcXunit.crossProduct(vtcYunit) +
    "aka vtcZunit"
);
console.log("cosinus of angle between vtc1 and vtc2 is " + vtc1.cos(vtc2));
console.log(
    "cosinus of angle between vtcXunit and vtcYunit is " + vtcXunit.cos(vtcYunit)
);