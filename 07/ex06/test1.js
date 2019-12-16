const UnholyFactory = require("./UnholyFactory.class");
const Fighter = require("./Fighter.class");

class Footsoldier extends Fighter {
    constructor() {
        super("foot soldier");
    }
    fight(target) {
        console.log("* draws his sword and runs towards " + target + " *");
    }
}

class Archer extends Fighter {
    constructor() {
        super("archer");
    }
    fight(target) {
        console.log("* shoots arrows at " + target + " *");
    }
}

class Assassin extends Fighter {
    constructor() {
        super("assassin");
    }
    fight(target) {
        console.log("* creeps behind " + target + " and stabs at it *");
    }
}

class Llama {
    fight(target) {
        console.log("* spits at " + target + " *");
    }
}

uf = new UnholyFactory();
uf.absorb(new Footsoldier());
uf.absorb(new Footsoldier());
uf.absorb(new Archer());
uf.absorb(new Assassin());
uf.absorb(new Llama());

const requested_fighters = [
    "foot soldier",
    "llama",
    "foot soldier",
    "archer",
    "foot soldier",
    "assassin",
    "foot soldier",
    "archer"
];

const actual_fighters = [];

for (const i in requested_fighters) {
    f = uf.fabricate(requested_fighters[i]);
    if (f != null) {
        actual_fighters.push(f);
    }
}

const targets = ["the Hound", "Tyrion", "Podrick"];

for (const i in actual_fighters) {
    for (const t in targets) {
        actual_fighters[i].fight(targets[t]);
    }
}

// <?php

// include_once('UnholyFactory.class.php');
// include_once('Fighter.class.php');

// class Footsoldier extends Fighter {
// 	public function __construct() {
// 		parent::__construct("foot soldier");
// 	}

// 	public function fight($target) {
// 		print ("* draws his sword and runs towards " . $target . " *" . PHP_EOL);
// 	}
// }

// class Archer extends Fighter {
// 	public function __construct() {
// 		parent::__construct("archer");
// 	}

// 	public function fight($target) {
// 		print ("* shoots arrows at " . $target . " *" . PHP_EOL);
// 	}
// }

// class Assassin extends Fighter {
// 	public function __construct() {
// 		parent::__construct("assassin");
// 	}

// 	public function fight($target) {
// 		print ("* creeps behind " . $target . " and stabs at it *" . PHP_EOL);
// 	}
// }

// class Llama {
// 	public function fight($target) {
// 		print ("* spits at " . $target . " *" . PHP_EOL);
// 	}
// }

// $uf = new UnholyFactory();
// $uf->absorb(new Footsoldier());
// $uf->absorb(new Footsoldier());
// $uf->absorb(new Archer());
// $uf->absorb(new Assassin());
// $uf->absorb(new Llama());

// $requested_fighters = Array(
// 	"foot soldier",
// 	"llama",
// 	"foot soldier",
// 	"archer",
// 	"foot soldier",
// 	"assassin",
// 	"foot soldier",
// 	"archer",
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