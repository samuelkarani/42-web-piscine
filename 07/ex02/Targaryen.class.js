class Targaryen {
    getBurned() {
        if (this.resistsFire && this.resistsFire() == true) {
            return "emerges naked but unharmed";
        } else {
            return "burns alive";
        }
    }
}

module.exports = Targaryen;