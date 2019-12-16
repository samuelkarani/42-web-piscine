const Targaryen = require("./Targaryen.class");

class Viserys extends Targaryen {}

class Daenerys extends Targaryen {
    resistsFire() {
        return true;
    }
}

let viserys = new Viserys();
let daenerys = new Daenerys();

console.log("Viserys " + viserys.getBurned());
console.log("Daenerys " + daenerys.getBurned());

// <?php

// include('Targaryen.class.php');

// class Viserys extends Targaryen {
// }

// class Daenerys extends Targaryen {
// 	public function resistsFire() {
// 		return True;
// 	}
// }

// $viserys = new Viserys();
// $daenerys = new Daenerys();

// print("Viserys " . $viserys->getBurned() . PHP_EOL);
// print("Daenerys " . $daenerys->getBurned() . PHP_EOL);

// ?>