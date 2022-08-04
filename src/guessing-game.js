class GuessingGame {
    number = 0;
    constructor(name) {
        this.name = name;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.number = Math.round((this.max + this.min)/2);
        return this.number;
    }

    lower() {
        this.max = this.number;
    }

    greater() {
        this.min = this.number;
    }
}

module.exports = GuessingGame;