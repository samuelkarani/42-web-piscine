class Component {
    constructor(width, height, color, x, y, name) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.name = name;
        this.speedX = 0;
        this.speedY = 0;

        this.update = this.update.bind(this);
        this.move = this.move.bind(this);
        this.collision = this.collision.bind(this);
        this.outOfBounds = this.outOfBounds.bind(this);
        this.stop = this.stop.bind(this);
        this.toString = this.toString.bind(this);
    }

    stop() {
        this.speedX = 0;
        this.speedY = 0;
    }

    update(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    collision(component) {
        return (
            this.x < component.x + component.width &&
            this.x + this.width > component.x &&
            this.y < component.y + component.height &&
            this.y + this.height > component.y
        );
    }

    outOfBounds(width, height) {
        return !(
            this.x >= 0 &&
            this.y >= 0 &&
            this.x + this.width <= width &&
            this.y + this.height <= height
        );
    }

    static doc() {
        return "Component class is the base class for all game objects. Instanciated with width, height, color, x, y and name";
    }

    toString() {
        return this.toString();
    }
}

export default Component;