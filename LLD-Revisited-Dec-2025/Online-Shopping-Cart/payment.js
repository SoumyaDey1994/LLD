class Payment {

  static calculateTotalAmount(cartItems) {
    let totalAmount = 0;
    for (let item of cartItems) {
      totalAmount = totalAmount + item.getTotalItemPrice();
    }
    return totalAmount;
  }
}

module.exports = Payment;
