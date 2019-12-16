const UnholyFactory = require("./UnholyFactory.class");
const Fighter = require("./Fighter.class");

class CrippledSoldier extends Fighter {
    constructor() {
        super("crippled soldier");
    }
}

const uf = new UnholyFactory();
uf.absorb(new CrippledSoldier());

requested_fighters = [
    "crippled soldier",
    "crippled soldier",
    "crippled soldier",
    "crippled soldier"
];

actual_fighters = [];

for (const i in requested_fighters) {
    f = uf.fabricate(requested_fighters[i]);
    if (f != null) {
        actual_fighters.push(f);
    }
}

targets = ["the Hound", "Tyrion", "Podrick"];

for (const i in actual_fighters) {
    for (const i in targets) {
        f.fight(targets[t]);
    }
}

// <?php

// include_once('UnholyFactory.class.php');
// include_once('Fighter.class.php');

// class CrippledSoldier extends Fighter {
// 	public function __construct() {
// 		parent::__construct("crippled soldier");
// 	}
// }

// $uf = new UnholyFactory();
// $uf->absorb(new CrippledSoldier());

// $requested_fighters = Array(
// 	"crippled soldier",
// 	"crippled soldier",
// 	"crippled soldier",
// 	"crippled soldier",
// );

// $actual_fighters = Array(
// );

// foreach ($requested_fighters as $rf) {
// 	$f = $uf->fabricate($rf);
// 	if ($f != null) {
// 		array_push($actual_fighters, $f);
// 	}
// }

// $targets = Array("the Hound", "Tyrion", "Podrick");

// foreach ($actual_fighters as $f) {
// 	foreach ($targets as $t) {
// 		$f->fight($t);
// 	}
// }