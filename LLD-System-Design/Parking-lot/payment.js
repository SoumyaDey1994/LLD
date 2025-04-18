class Payment {
    static #instance = null;
    constructor(hourlyRates) {
        if(Payment.#instance) {
            throw new Error("Payment is a Singleton class, using getInstance method");
        }
        this.hourlyRates = hourlyRates;
    }

    static getInstance(hourlyRates) {
        if(!Payment.instance) {
            this.instance = new Payment(hourlyRates);
        }
        return this.instance;
    }

    calculatePaymentAmount(vehicle, parkedDuration) {
        const rate = this.hourlyRates[vehicle.type];
        return Math.ceil((rate * parkedDuration)/(1000 * 60 * 60));
    }
}

module.exports = Payment;