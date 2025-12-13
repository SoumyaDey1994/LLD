const RateLimiterStrategy = require("./RateLimiterStrategy");

class SlidingWindowRateLimiter extends RateLimiterStrategy {
  constructor(limit, windowMs) {
    super();
    this.limit = limit;
    this.windowMs = windowMs;
    this.store = new Map();
  }

  allow(key) {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    const timestamps = this.store.get(key) || [];
    console.log(`SW: Window Start: ${timestamps[0]}`);
    while (timestamps.length > 0 && timestamps[0] <= windowStart) {
      timestamps.shift();
    }

    if (timestamps.length >= this.limit) {
      console.log(`SW: Rejected entry of key ${key} as its outside window`);
      return false;
    }

    timestamps.push(now);
    this.store.set(key, timestamps);
    console.log(`SW: Accepted entry of key ${key}`);
    return true;
  }
}

module.exports = SlidingWindowRateLimiter;
