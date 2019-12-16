const Lannister = require("./test");

class Tyrion extends Lannister {
    constructor() {
        super();
        console.log("My name is Tyrion");
    }

    getSize() {
        return "Short";
    }

    houseMotto() {
        return super.houseMotto();
    }
}

module.exports = Tyrion;