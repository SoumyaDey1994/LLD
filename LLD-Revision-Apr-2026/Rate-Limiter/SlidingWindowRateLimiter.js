import { RateLimiter } from "./RateLimiter.js";

export class SlidingWindowRateLimiter extends RateLimiter {
  constructor(limit, delay) {
    super(limit, delay);
    this.store = new Map();
  }

  allow(key) {
    const currTime = Date.now();
    const windowStart = currTime - this.delay;

    if (!this.store.has(key)) {
      this.store.set(key, [currTime]);
      console.log(`First req for key ${key}, allowed`);
      return true;
    }

    const timestamps = this.store.get(key);

    while (timestamps.length > 0 && timestamps[0] < windowStart) {
      timestamps.shift();
    }

    if (timestamps.length >= this.limit) {
      console.log(`Too many requests, returing 429 error`);
      return false;
    }

    this.store.set(key, [...timestamps, currTime]);
    console.log(`Request ${timestamps.length + 1} Allowed`);
    return true;
  }
}
