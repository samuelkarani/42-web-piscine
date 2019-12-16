const fs = require("fs");
const Vertex = require("../ex01/Vertex.class.js");
const Vector = require("../ex02/Vector.class.js");

function f(x) {
    return parseFloat(x).toFixed(2);
}

class Matrix {
    degrees_to_radians(degrees) {
        return (degrees * Math.PI) / 180;
    }

    constructor(argv) {
        if (argv[0] == Matrix.SET) this.matrix = argv[1];

        if (argv[0] == Matrix.IDENTITY) {
            this.matrix = [
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1]
            ];
        }

        if (argv[0] == Matrix.SCALE) {
            const scale = argv[1];
            this.matrix = [
                [scale, 0, 0, 0],
                [0, scale, 0, 0],
                [0, 0, scale, 0],
                [0, 0, 0, 1]
            ];
        }

        if (argv[0] == Matrix.RX) {
            const angle = argv[1];
            this.matrix = [
                [1, 0, 0, 0],
                [0, Math.cos(angle), -Math.sin(angle), 0],
                [0, Math.sin(angle), Math.cos(angle), 0],
                [0, 0, 0, 1]
            ];
        }

        if (argv[0] == Matrix.RY) {
            const angle = argv[1];
            this.matrix = [
                [Math.cos(angle), 0, Math.sin(angle), 0],
                [0, 1, 0, 0],
                [-Math.sin(angle), 0, Math.cos(angle), 0],
                [0, 0, 0, 1]
            ];
        }

        if (argv[0] == Matrix.RZ) {
            const angle = argv[1];
            this.matrix = [
                [Math.cos(angle), -Math.sin(angle), 0, 0],
                [Math.sin(angle), Math.cos(angle), 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1]
            ];
        }

        if (argv[0] == Matrix.TRANSLATION) {
            const vtc = argv[1];
            this.matrix = [
                [1, 0, 0, vtc.x],
                [0, 1, 0, vtc.y],
                [0, 0, 1, vtc.z],
                [0, 0, 0, 1]
            ];
        }

        if (argv[0] == Matrix.PROJECTION) {
            const [, fov, ratio, near, far] = argv;
            this.matrix = [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ];
            this.matrix[1][1] = 1 / Math.tan(0.5 * this.degrees_to_radians(fov));
            this.matrix[0][0] = this.matrix[1][1] / ratio;
            this.matrix[2][2] = (-1 * (-near - far)) / (near - far);
            this.matrix[3][2] = -1;
            this.matrix[2][3] = (2 * near * far) / (near - far);
        }

        if (Matrix.verbose) {
            console.log(`Matrix ${argv[0]} instance constructed`);
        }
    }

    mult(rhs) {
        const new_matrix = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
        for (let row = 0; row < 4; row += 1)
            for (let col = 0; col < 4; col += 1)
                for (let i = 0; i < 4; i += 1)
                    new_matrix[row][col] += this.matrix[row][i] * rhs.matrix[i][col];
        return new Matrix([Matrix.SET, new_matrix]);
    }

    transformVertex(vtx) {
        return new Vertex([
            this.matrix[0][0] * vtx.x +
            this.matrix[0][1] * vtx.y +
            this.matrix[0][2] * vtx.z +
            this.matrix[0][3],
            this.matrix[1][0] * vtx.x +
            this.matrix[1][1] * vtx.y +
            this.matrix[1][2] * vtx.z +
            this.matrix[1][3],
            this.matrix[2][0] * vtx.x +
            this.matrix[2][1] * vtx.y +
            this.matrix[2][2] * vtx.z +
            this.matrix[2][3],
            1
        ]);
    }

    toString() {
        const [r1, r2, r3, r4] = this.matrix;
        return `M | vtcX | vtcY | vtcZ | vtxO
                -----------------------------
                x | ${f(r1[0])} | ${f(r1[1])} | ${f(r1[2])} | ${f(r1[3])}
                y | ${f(r2[0])} | ${f(r2[1])} | ${f(r2[2])} | ${f(r2[3])}
                z | ${f(r3[0])} | ${f(r3[1])} | ${f(r3[2])} | ${f(r3[3])}
                w | ${f(r4[0])} | ${f(r4[1])} | ${f(r4[2])} | ${f(r4[3])}`;
    }
}

Matrix.IDENTITY = "IDENTITY";
Matrix.SCALE = "SCALE preset";
Matrix.RX = "Ox ROTATION preset";
Matrix.RY = "Oy ROTATION preset";
Matrix.RZ = "Oz ROTATION preset";
Matrix.TRANSLATION = "TRANSLATION preset";
Matrix.PROJECTION = "PROJECTION preset";
Matrix.SET = "SET";

Matrix.verbose = false;

module.exports = Matrix;

Matrix.doc = function doc() {
    return fs.readFileSync("./Matrix.doc.txt", "utf8");
};