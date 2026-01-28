const PAYMENT_PROVIDER = {
  STRIPE: "stripe",
  PAYPAL: "paypal",
};

class StripePayment {
  constructor() {
    this.provider = PAYMENT_PROVIDER.STRIPE;
  }

  pay(amount) {
    console.log(`Paying ${amount} using ${this.provider}`);
  }
}

class StripeNotification {
  constructor() {
    this.provider = PAYMENT_PROVIDER.STRIPE;
  }

  notify(user) {
    console.log(`Notifying ${user} from ${this.provider}`);
  }
}

class PaypalPayment {
  constructor() {
    this.provider = PAYMENT_PROVIDER.PAYPAL;
  }

  pay(amount) {
    console.log(`Paying ${amount} using ${this.provider}`);
  }
}

class PaypalNotification {
  constructor() {
    this.provider = PAYMENT_PROVIDER.PAYPAL;
  }

  notify(user) {
    console.log(`Notifying ${user} from ${this.provider}`);
  }
}

class StripeProvider {
  getPaymentProvider() {
    return new StripePayment();
  }

  getNotificationProvider() {
    return new StripeNotification();
  }
}

class PaypalProvider {
  getPaymentProvider() {
    return new PaypalPayment();
  }

  getNotificationProvider() {
    return new PaypalNotification();
  }
}

class ProviderFactory {
  static getProvider(name) {
    switch (name.toLowerCase()) {
      case PAYMENT_PROVIDER.STRIPE:
        return new StripeProvider();
      case PAYMENT_PROVIDER.PAYPAL:
        return new PaypalProvider();
      default:
        throw new Error(`Unknown provider: ${name}`);
    }
  }
}

const stripeFactory = ProviderFactory.getProvider("stripe");

let payProvider = stripeFactory.getPaymentProvider();
payProvider.pay(500);

let notifProvider = stripeFactory.getNotificationProvider();
notifProvider.notify("Soumya Dey");

const paypalFactory = ProviderFactory.getProvider("PAYPAL");
payProvider = paypalFactory.getPaymentProvider();
payProvider.pay(1500);

notifProvider = paypalFactory.getNotificationProvider();
notifProvider.notify("Tanima Dey");
