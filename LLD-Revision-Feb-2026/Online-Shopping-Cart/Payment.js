export class Payment {
  static #instance = null;

  constructor() {
    if (Payment.#instance) {
      throw new Error("Singleton class, pls use getInstance() method");
    }
  }

  static getInstance() {
    if (!Payment.#instance) {
      Payment.#instance = new Payment();
    }

    return Payment.#instance;
  }

  calculateTotalAmount(cart) {
    let total = 0;
    for (let item of cart.items) {
      total = total + item.getTotalPrice();
    }

    return total;
  }
}
