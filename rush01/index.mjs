import Game from "../Game.class.mjs";
import Ship from "../Ship.class.mjs";
import Obstacle from "./Obstacle.class.mjs";

function init() {
    const p1 = [];
    for (let i = 0; i < 5; i += 1) {
        p1.push(new Ship(16, 4, "red", i * 24, 400 - 4, `ship1_${i}`));
    }
    const p2 = [];
    for (let i = 0; i < 5; i += 1) {
        p2.push(new Ship(16, 4, "blue", i * 24, 300 - 4, `ship2_${i}`));
    }
    const o1 = new Obstacle(40, 10, "green", 300, 120);
    const o2 = new Obstacle(40, 10, "green", 0, 220);
    const o3 = new Obstacle(40, 10, "green", 560, 180);
    const o4 = new Obstacle(40, 10, "green", 200, 280);
    const o5 = new Obstacle(40, 10, "green", 400, 0);
    const o6 = new Obstacle(40, 10, "green", 400, 280);
    const o7 = new Obstacle(40, 10, "green", 0, 0);

    const game = new Game(p1, p2, [o1, o2, o3, o4, o5, o6, o7]);

    const up = document.getElementById("up");
    up.addEventListener("click", game.moveup);
    const down = document.getElementById("down");
    down.addEventListener("click", game.movedown);
    const left = document.getElementById("left");
    left.addEventListener("click", game.moveleft);
    const middle = document.getElementById("middle");
    middle.addEventListener("click", game.stationary);
    const right = document.getElementById("right");
    right.addEventListener("click", game.moveright);

    const shoot = document.getElementById("shoot");
    shoot.addEventListener("click", game.shoot);

    setInterval(() => {
        const turnText = game.gameOver ?
            "Game Over!" :
            `player ${game.turns % 2 === 0 ? "1" : "2"}`;

        document.getElementById("turn").innerHTML = turnText;
    }, 100);
}

init();