import Bullet from "./Bullet.class.mjs";

class Game {
    constructor(p1Ships, p2Ships, obstacles) {
        const canvas = document.createElement("canvas");
        canvas.width = 600;
        canvas.height = 400;
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.bullet = null;
        this.gameOver = false;
        this.obstacles = obstacles;
        this.p1Ships = p1Ships;
        this.p2Ships = p2Ships;
        this.idx_p1 = 0;
        this.idx_p2 = 0;
        this.turns = 0;

        this.updateGameArea = this.updateGameArea.bind(this);
        this.shipOutOfBounds = this.shipOutOfBounds.bind(this);
        this.bulletHitsObstacle = this.bulletHitsObstacle.bind(this);
        this.bulletOutOfBounds = this.bulletOutOfBounds.bind(this);
        this.bulletHitsShip = this.bulletHitsShip.bind(this);
        this.shipHitsObstacle = this.shipHitsObstacle.bind(this);
        this.isGameOver = this.isGameOver.bind(this);
        this.end = this.end.bind(this);

        this.moveright = this.moveright.bind(this);
        this.moveleft = this.moveleft.bind(this);
        this.moveup = this.moveup.bind(this);
        this.movedown = this.movedown.bind(this);
        this.move = this.move.bind(this);
        this.stationary = this.stationary.bind(this);

        this.shoot = this.shoot.bind(this);

        this.nextTurn = this.nextTurn.bind(this);

        this.interval = setInterval(this.updateGameArea, 20);
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }

    get ship() {
        if (this.turns % 2 === 0)
            return this.p1Ships[this.idx_p1 % this.p1Ships.length];
        return this.p2Ships[this.idx_p2 % this.p2Ships.length];
    }

    get shipsKey() {
        return this.turns % 2 === 0 ? "p1Ships" : "p2Ships";
    }

    get oppShipsKey() {
        return this.turns % 2 === 0 ? "p2Ships" : "p1Ships";
    }

    shipOutOfBounds() {
        if (this.ship.outOfBounds(this.canvas.width, this.canvas.height)) {
            const key = this.shipsKey;
            this[key] = this[key].filter(s => s !== this.ship);
        }
    }

    bulletOutOfBounds() {
        if (
            this.bullet &&
            this.bullet.outOfBounds(this.canvas.width, this.canvas.height)
        ) {
            this.bullet.stop();
            this.bullet = null;
        }
    }

    bulletHitsObstacle() {
        if (this.bullet) {
            for (const obst of this.obstacles) {
                if (obst.collision(this.bullet)) {
                    this.bullet.stop();
                    this.bullet = null;
                    break;
                }
            }
        }
    }

    bulletHitsShip() {
        if (this.bullet) {
            const key = this.oppShipsKey;
            const opponentShips = this[key];
            for (const ship of opponentShips) {
                if (ship.collision(this.bullet)) {
                    this.bullet.stop();
                    this.bullet = null;
                    ship.shield -= this.bullet.power * ship.power;
                    if (ship.shield <= 0) {
                        this[key] = this[key].filter(s => s !== ship);
                    }
                    break;
                }
            }
        }
    }

    shipHitsObstacle() {
        for (const obs of this.obstacles) {
            if (this.ship.collision(obs)) {
                const key = this.shipsKey;
                this[key] = this[key].filter(s => s !== this.ship);
                break;
            }
        }
    }

    isGameOver() {
        return this.p1Ships.length === 0 || this.p2Ships.length === 0;
    }

    updateGameArea() {
        if (this.isGameOver()) {
            this.end();
        } else {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.shipHitsObstacle();
            this.shipOutOfBounds();
            this.bulletHitsObstacle();
            this.bulletOutOfBounds();
            this.bulletHitsShip();
            for (const sh of this.p1Ships) {
                sh.move();
                sh.update(this.context);
            }
            for (const sh of this.p2Ships) {
                sh.move();
                sh.update(this.context);
            }
            for (const obs of this.obstacles) {
                obs.update(this.context);
            }
            if (this.bullet) {
                this.bullet.move();
                this.bullet.update(this.context);
            }
        }
    }

    nextTurn() {
        this.turns++;
        if (this.turns % 2 === 0) this.idx_p1++;
        else this.idx_p2++;
    }

    shoot() {
        const { x, y } = this.ship;
        this.bullet = new Bullet(4, 4, "black", x, y, "bullet");
        if (this.turns % 2 === 0) this.bullet.fireUp();
        else this.bullet.fireDown();
        this.shots += 1;
    }

    move() {
        const { x, y } = this.ship;
        console.log(`x ${x} y ${y}`);
        this.nextTurn();
    }

    stationary() {
        this.move();
    }

    moveright() {
        this.ship.moveright();
        this.move();
    }

    moveleft() {
        this.ship.moveleft();
        this.move();
    }

    moveup() {
        this.ship.moveup();
        this.move();
    }

    movedown() {
        this.ship.movedown();
        this.move();
    }

    end() {
        clearInterval(this.interval);
        this.gameOver = true;
    }

    static doc() {
        return "Game class starts the game and updates all game components";
    }
}

export default Game;