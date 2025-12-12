class Stripe {
  charge(amount) {
    console.log(`Charging ${amount}$ via Stripe`);
  }
}

class Paypal {
  makePayment(amount) {
    console.log(`Making payment of ${amount}$ using Paypal`);
  }
}

class StripeAdaptor {
  constructor(stripe) {
    this.stripe = stripe;
  }

  pay(amount) {
    this.stripe.charge(amount);
  }
}

class PaypalAdaptor {
  constructor(paypal) {
    this.paypal = paypal;
  }

  pay(amount) {
    this.paypal.makePayment(amount);
  }
}

const stripe = new Stripe();
const paypal = new Paypal();

const paymentA = new StripeAdaptor(stripe);
paymentA.pay(1000);

const paymentB = new PaypalAdaptor(paypal);
paymentB.pay(3000);
