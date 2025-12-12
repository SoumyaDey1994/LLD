class TimezoneStore {
  constructor() {
    this.subs = new Map();
    this.user = null;
    this.timezone = "UTC";
  }

  subscribe(entity, cb) {
    this.subs.set(entity, cb);
  }

  getTimezone() {
    return this.timezone;
  }

  setTimezone(tz, updatedBy) {
    this.timezone = tz;
    const payload = { updatedTz: this.timezone, user: updatedBy || "Admin" };
    this.notify(payload);
  }

  notify(payload) {
    for (let [entity, cb] of this.subs) {
      cb(entity, payload);
    }
  }
}

const store = new TimezoneStore();
console.log(`Current Timezone: ${store.getTimezone()}`);
const callback = (entity, payload) =>
  console.log(
    `${entity}: ${payload.user} set application Timezone as ${payload.updatedTz}`
  );

store.subscribe("Home Page", callback);
store.subscribe("Users Page", callback);
store.subscribe("Reports Page", callback);
store.subscribe("Settings Page", callback);

const adminUser = "Soumya";
store.setTimezone("Asia/Kolkata", adminUser);

console.log(`Now Timezone: ${store.getTimezone()}`);
