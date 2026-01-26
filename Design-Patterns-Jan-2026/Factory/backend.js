const PAYMENT_PROVIDER = {
  VISA: "visa",
  GPAY: "gpay",
  STRIPE: "stripe",
  PAYPAL: "paypal",
};

class VisaPayment {
  constructor() {
    this.provider = PAYMENT_PROVIDER.VISA;
  }

  pay(amount) {
    console.log(`Paying ${amount}$ using ${this.provider}`);
  }
}

class GpayPayment {
  constructor() {
    this.provider = PAYMENT_PROVIDER.GPAY;
  }

  pay(amount) {
    console.log(`Paying ${amount}$ using ${this.provider}`);
  }
}

class PaypalPayment {
  constructor() {
    this.provider = PAYMENT_PROVIDER.PAYPAL;
  }

  pay(amount) {
    console.log(`Paying ${amount}$ using ${this.provider}`);
  }
}

class StripePayment {
  constructor() {
    this.provider = PAYMENT_PROVIDER.STRIPE;
  }

  pay(amount) {
    console.log(`Paying ${amount}$ using ${this.provider}`);
  }
}

class PaymentProviderFactory {
  static getProvider(name) {
    switch (name.toLowerCase()) {
      case PAYMENT_PROVIDER.VISA:
        return new VisaPayment();
      case PAYMENT_PROVIDER.GPAY:
        return new GpayPayment();
      case PAYMENT_PROVIDER.PAYPAL:
        return new PaypalPayment();
      case PAYMENT_PROVIDER.STRIPE:
        return new StripePayment();
      default:
        throw new Error(`Unknown provider ${name}`);
    }
  }
}

const amount = 1500;

let provider = PaymentProviderFactory.getProvider("gpay");
provider.pay(amount);

provider = PaymentProviderFactory.getProvider("visa");
provider.pay(amount);

provider = PaymentProviderFactory.getProvider("paypal");
provider.pay(amount);

try {
  provider = PaymentProviderFactory.getProvider("payU");
  provider.pay(amount);
} catch(error) {
    console.log(error.toString())
  }

