const IFighter = require("./IFighter.class");
const NightsWatch = require("./NightsWatch.class");

class Varys {
    pretendToFight() {
        console.log("* finds someone to fight for him *");
    }
}

var varys = new Varys();
var nw = new NightsWatch();

nw.recruit(varys);
nw.fight();

// <?php

// include_once('IFighter.class.php');
// include_once('NightsWatch.class.php');

// class Varys implements IFighter {
// 	public function pretendToFight() {
// 		print("* finds someone to fight for him *" . PHP_EOL);
// 	}
// }

// $varys = new Varys();
// $nw = new NightsWatch();

// $nw->recruit($varys);

// $nw->fight();

// ?>