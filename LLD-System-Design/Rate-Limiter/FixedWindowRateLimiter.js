const RateLimiterStrategy = require("./RateLimiterStrategy");

class FixedWindowRateLimiter extends RateLimiterStrategy {
  constructor(limit, windowMs) {
    super();
    this.limit = limit;
    this.windowMs = windowMs;
    this.store = new Map();
  }

  allow(key) {
    const now = Date.now();
    let windowStart = now - (now % this.windowMs);

    // Fetch stored data for the key
    const entry = this.store.get(key) || { count: 0, windowStart };

    console.log(`FW: Window Start: ${entry.windowStart}`);
    // Detect window change
    if (entry.windowStart !== windowStart) {
      // if start of entry doesn't match with current window start
      entry.count = 0;
      entry.windowStart = windowStart;
    }

    // Enforce rate limit
    if (entry.count >= this.limit) {
      console.log(`FW: Rejected entry of key ${key} as its outside window`);
      return false;
    }

    entry.count++;
    this.store.set(key, entry);
    console.log(`FW: Accepted entry of key ${key}`);
    return true;
  }
}

module.exports = FixedWindowRateLimiter;
