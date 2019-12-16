import Component from "./Component.class.mjs";

class Ship extends Component {
    constructor(...args) {
        super(...args);
        this.clearmove = this.clearmove.bind(this);
        this.moveup = this.moveup.bind(this);
        this.movedown = this.movedown.bind(this);
        this.moveright = this.moveright.bind(this);
        this.moveleft = this.moveleft.bind(this);
        this.grow = this.grow.bind(this);
        this.shrink = this.shrink.bind(this);
    }

    clearmove() {
        this.speedX = 0;
        this.speedY = 0;
    }

    moveup() {
        this.speedY -= 8;
        setTimeout(this.clearmove, 125);
    }

    movedown() {
        this.speedY += 8;
        setTimeout(this.clearmove, 125);
    }

    moveleft() {
        this.speedX -= 8;
        setTimeout(this.clearmove, 125);
    }

    moveright() {
        this.speedX += 8;
        setTimeout(this.clearmove, 125);
    }

    grow() {
        this.width += 8;
        this.height += 2;
    }

    shrink() {
        this.width -= 8;
        this.height -= 2;
    }

    static doc() {
        return "Ship class is the base class for all ships";
    }

    toString() {
        return this.toString();
    }
}

export default Ship;