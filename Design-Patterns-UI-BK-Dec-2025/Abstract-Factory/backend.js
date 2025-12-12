class StripePayment {
  pay(amount) {
    console.log(`Paying ${amount}$ using Stripe`);
  }
}

class StripeNotifier {
  notify(user) {
    console.log(`Notifying ${user} from Stripe`);
  }
}

class PaypalPayment {
  pay(amount) {
    console.log(`Paying ${amount}$ using Paypal`);
  }
}

class PaypalNotifier {
  notify(user) {
    console.log(`Notifying ${user} from Paypal`);
  }
}

class StripeServiceFactory {
  getPayment() {
    return new StripePayment();
  }

  getNotifier() {
    return new StripeNotifier();
  }
}

class PaypalServiceFactory {
  getPayment() {
    return new PaypalPayment();
  }

  getNotifier() {
    return new PaypalNotifier();
  }
}

class ServiceProviderFactory {
  static getProvider(name) {
    switch (name.toLowerCase()) {
      case "stripe":
        return new StripeServiceFactory();
      case "paypal":
        return new PaypalServiceFactory();
      default:
        throw new Error(`Unknown provider: ${name}`);
    }
  }
}

const stripeProvider = ServiceProviderFactory.getProvider("stripe");
let paymentProvider = stripeProvider.getPayment();
let notifier = stripeProvider.getNotifier();

paymentProvider.pay(100);
notifier.notify("Soumya");

const paypalProvider = ServiceProviderFactory.getProvider("paypal");
paymentProvider = paypalProvider.getPayment();
notifier = paypalProvider.getNotifier();

paymentProvider.pay(500);
notifier.notify("Nikita");
