class NightsWatch {
    constructor() {
        this.recruits = [];
    }

    recruit(data) {
        this.recruits.push(data);
    }

    fight() {
        for (var i in this.recruits) {
            if (this.recruits[i].constructor.name != "MaesterAemon")
                this.recruits[i].fight();
        }
    }
}

module.exports = NightsWatch;