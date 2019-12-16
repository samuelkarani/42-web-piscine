import Component from "./Component.class.mjs";

class Obstacle extends Component {
    constructor(...args) {
        super(...args);
    }

    static doc() {
        return "Obstacle class";
    }
}

export default Obstacle;