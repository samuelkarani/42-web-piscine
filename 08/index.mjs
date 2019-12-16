import Game from "../Game.class.mjs";
import Ship from "../Ship.class.mjs";
import Obstacle from "./Obstacle.class.mjs";

const p1 = [];
for (let i = 0; i < 5; i++) {
    p1.push(new Ship(16, 4, "red", i * 24, 400 - 4));
}

const p2 = [];
for (let i = 0; i < 5; i++) {
    p2.push(new Ship(16, 4, "blue", 584 - i * 24, 0));
}

const o1 = new Obstacle(40, 10, "green", 300, 120);
const o2 = new Obstacle(40, 10, "green", 200, 220);
const o3 = new Obstacle(40, 10, "green", 400, 280);

const game = new Game(p1, p2, [o1, o2, o3]);

document.getElementById("up").addEventListener("click", game.moveup);
document.getElementById("down").addEventListener("click", game.movedown);
document.getElementById("left").addEventListener("click", game.moveleft);
document.getElementById("right").addEventListener("click", game.moveright);
document.getElementById("shoot").addEventListener("click", game.shoot);

setInterval(() => {
    const text = game.gameOver ?
        "Game Over!" :
        `<p class="${game.isPlayer1 ? "red" : "blue"}">player ${
        game.isPlayer1 ? "1" : "2"
      }</p>`;
    document.getElementById("turn").innerHTML = text;
}, 100);