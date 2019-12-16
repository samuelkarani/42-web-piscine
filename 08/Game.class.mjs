import Bullet from "./Bullet.class.mjs";

class Game {
    constructor(p1, p2, obstacles) {
        const canvas = document.createElement("canvas");
        canvas.width = 600;
        canvas.height = 400;
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.components = [...p1, ...p2, ...obstacles];
        this.bullet = null;
        this.gameOver = false;
        this.p1 = p1;
        this.p2 = p2;
        this.p1_idx = 0;
        this.p2_idx = 0;
        this.moves = 0;

        this.updateGameArea = this.updateGameArea.bind(this);
        this.end = this.end.bind(this);
        this.print = this.print.bind(this);
        this.moveright = this.moveright.bind(this);
        this.moveleft = this.moveleft.bind(this);
        this.moveup = this.moveup.bind(this);
        this.movedown = this.movedown.bind(this);
        this.shoot = this.shoot.bind(this);
        this.createBullet = this.createBullet.bind(this);
        this.deleteBullet = this.deleteBullet.bind(this);
        this.next = this.next.bind(this);
        this.hit = this.hit.bind(this);
        this.grow = this.grow.bind(this);
        this.shrink = this.shrink.bind(this);
        this.blink = this.blink.bind(this);

        this.interval = setInterval(this.updateGameArea, 20);
        setInterval(this.blink, 1000);
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }

    hit() {
        if (!this.bullet) return false;
        for (const rect of this.otherShips) {
            if (
                this.bullet.x < rect.x + rect.width &&
                this.bullet.x + this.bullet.width > rect.x &&
                this.bullet.y < rect.y + rect.height &&
                this.bullet.y + this.bullet.height > rect.y
            )
                return true;
        }
        return false;
    }

    updateGameArea() {
        if (this.hit()) {
            this.end();
        } else {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            for (const component of this.components) {
                component.move();
                component.update(this.context);
            }
        }
    }

    end() {
        clearInterval(this.interval);
        this.gameOver = true;
    }

    get isPlayer1() {
        return this.moves % 2 === 0;
    }

    get player() {
        if (this.isPlayer1) return this.p1[this.p1_idx % this.p1.length];
        return this.p2[this.p2_idx % this.p2.length];
    }

    get otherShips() {
        if (this.isPlayer1) return this.p2;
        return this.p1;
    }

    grow() {
        this.player.grow();
    }

    shrink() {
        this.player.shrink();
    }

    blink() {
        setTimeout(this.grow, 500);
        setTimeout(this.shrink, 1000);
    }

    print() {
        const { x, y } = this.player;
        console.log(`x ${x} y ${y}`);
    }

    next() {
        if (this.isPlayer1) this.p1_idx++;
        else this.p2_idx++;
        this.moves++;
        this.print();
    }

    moveright() {
        this.player.moveright();
        this.next();
    }

    moveleft() {
        this.player.moveleft();
        this.next();
    }

    moveup() {
        this.player.moveup();
        this.next();
    }

    movedown() {
        this.player.movedown();
        this.next();
    }

    get pos() {
        const player = this.player;
        return [player.x, player.y];
    }

    createBullet() {
        const [x, y] = this.pos;
        const bullet = new Bullet(4, 4, "black", x, y);
        this.components.push(bullet);
        this.bullet = bullet;
    }

    deleteBullet() {
        this.bullet = null;
    }

    shoot() {
        this.createBullet();
        if (this.isPlayer1) this.bullet.fireUp();
        else this.bullet.fireDown();
    }

    static doc() {
        return "Game class starts the game and updates all game components";
    }

    toString() {
        return this.toString();
    }
}

export default Game;