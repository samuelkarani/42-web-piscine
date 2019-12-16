class Component {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.speedX = 0;
        this.speedY = 0;
        this.x = x;
        this.y = y;

        this.update = this.update.bind(this);
        this.move = this.move.bind(this);
    }

    update(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    static doc() {
        return "Component class is the base class for all game objects. Instanciated with width, height, color, speedX, speedY, x and y";
    }

    toString() {
        return this.toString();
    }
}

export default Component;