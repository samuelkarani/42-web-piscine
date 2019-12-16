const House = require("./House.class.js");

class DrHouse extends House {
    diagnose() {
        console.log("It's not lupus !");
    }
}

let house = new DrHouse();
house.introduce();

// <?php

// include('House.class.php');

// class DrHouse extends House {
// 	public function diagnose() {
// 		print("It's not lupus !" . PHP_EOL);
// 	}
// }

// $house = new DrHouse();
// $house->introduce();

// ?>