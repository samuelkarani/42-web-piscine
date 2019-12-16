import Component from "./Component.class.mjs";

class Ship extends Component {
    constructor(...args) {
        super(...args);
        const [x, y] = args;
        this.origX = x;
        this.origY = y;
        this.power = 1;
        this.shield = 5;

        this.moveup = this.moveup.bind(this);
        this.movedown = this.movedown.bind(this);
        this.moveleft = this.moveleft.bind(this);
        this.moveright = this.moveright.bind(this);
        this.clear = this.clear.bind(this);
    }

    clear() {
        setTimeout(this.stop, 100);
    }

    moveup() {
        this.speedY -= 10;
        this.clear();
    }

    movedown() {
        this.speedY += 10;
        this.clear();
    }

    moveleft() {
        this.speedX -= 10;
        this.clear();
    }

    moveright() {
        this.speedX += 10;
        this.clear();
    }

    static doc() {
        return "Ship class is the base class for all ships";
    }
}

export default Ship;