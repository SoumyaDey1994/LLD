class EventBus {
  constructor() {
    this.eventHandlers = new Map();
  }

  on(event, cb) {
    if (!this.eventHandlers.has(event)) {
      this.eventHandlers.set(event, []);
    }

    this.eventHandlers.get(event)?.push(cb);
  }

  emit(event, data) {
    if (!this.eventHandlers.has(event)) return;

    this.notify(event, data);
  }

  notify(event, data) {
    const callbacks = this.eventHandlers.get(event);
    for (let cb of callbacks) {
      cb(data);
    }
  }
}

const updateOrderInDB = (order) =>
  console.log(`Order updated in DB: ${order.id}`);
const sendEmail = (order) => console.log(`Email sent to user: ${order.id}`);
const sendSms = (order) =>
  console.log(`Informed user about order via SMS: ${order.id}`);
const notifyPayment = (order) =>
  console.log(`Amount receivable for order ${order.id} is: ${order.amount}`);
const auditOrder = (order) => console.log(`Order audited: ${order.id}`);

const eb = new EventBus();

eb.on("purchase", updateOrderInDB);
eb.on("purchase", notifyPayment);
eb.on("purchase", sendEmail);
eb.on("purchase", sendSms);
eb.on("purchase", auditOrder);

const order = { id: 1, items: ["shirt", "pant"], amount: 1000 };

eb.emit("purchase", order);
