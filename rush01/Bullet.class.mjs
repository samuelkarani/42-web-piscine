import Component from "./Component.class.mjs";

class Bullet extends Component {
    constructor(...args) {
        super(...args);
        this.fireDown = this.fireDown.bind(this);
        this.fireUp = this.fireUp.bind(this);
    }

    fireDown() {
        this.speedY += 10;
    }

    fireUp() {
        this.speedY -= 10;
    }

    static doc() {
        return "Bullet class";
    }
}

export default Bullet;