export class Payment {
  static #instance;
  constructor(hourlyRates) {
    if (Payment.#instance) {
      throw new Error(`Singleton class, pls use getInstance() method`);
    }
    this.hourlyRates = hourlyRates;
  }

  static getInstance(hourlyRates) {
    if (!Payment.#instance) {
      Payment.#instance = new Payment(hourlyRates);
    }
    return Payment.#instance;
  }

  getTotalPayable(parkDuration, vehicle) {
    const unitAmount = this.hourlyRates[vehicle.type];
    if (unitAmount) {
      return parkDuration * unitAmount;
    }
    console.log(`Unit amount not found for vehicle type ${vehicleType}`);
    return null;
  }
}
