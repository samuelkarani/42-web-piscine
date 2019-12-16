const House = require("./House.class.js");

class HouseStark extends House {
    getHouseName() {
        return "Stark";
    }
    getHouseMotto() {
        return "Winter is coming";
    }
    getHouseSeat() {
        return "Winterfell";
    }
}

class HouseMartell extends House {
    getHouseName() {
        return "Martell";
    }
    getHouseMotto() {
        return "Unbowed, Unbent, Unbroken";
    }
    getHouseSeat() {
        return "Sunspear";
    }
}

let houses = Array(new HouseStark(), new HouseMartell());

for (const house in houses) {
    houses[house].introduce();
}

// <?php

// include('House.class.php');

// class HouseStark extends House {
// 	public function getHouseName() {
// 		return "Stark";
// 	}
// 	public function getHouseMotto() {
// 		return "Winter is coming";
// 	}
// 	public function getHouseSeat() {
// 		return "Winterfell";
// 	}
// }

// class HouseMartell extends House {
// 	public function getHouseName() {
// 		return "Martell";
// 	}
// 	public function getHouseMotto() {
// 		return "Unbowed, Unbent, Unbroken";
// 	}
// 	public function getHouseSeat() {
// 		return "Sunspear";
// 	}
// }

// $houses = Array(new HouseStark(), new HouseMartell());

// foreach ($houses as $house) {
// 	$house->introduce();
// }

// ?>