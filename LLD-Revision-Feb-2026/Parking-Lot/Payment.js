export class Payment {
    static #instance = null;
    constructor() {
        if(Payment.#instance) {
            throw new Error(`Singleton class, pls use getInstance method`);
        }
    }

    static getInstance() {
        if(this.#instance === null) {
            this.#instance = new Payment();
        }

        return this.#instance;
    }

    getTotalPayable(vehicleType, durationInMinutes, minuteRates) {
        return Math.ceil(durationInMinutes * minuteRates[vehicleType]);
    }
}