class Card {
    constructor(cardNo, pin) {
        this.cardNo = cardNo;
        this.pin = pin;
    }

    setPin(newPin) {
        this.pin = newPin;
    }
}

module.exports = Card;
