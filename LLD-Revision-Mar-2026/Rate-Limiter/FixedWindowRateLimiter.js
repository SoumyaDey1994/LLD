import { RateLimiter } from "./RateLimiter.js";

export class FixedWindowRateLimiter extends RateLimiter {
  constructor(limit, delay) {
    super(limit, delay);
    this.store = new Map();
  }

  allow(key) {
    const currTime = Date.now();
    const windowStart = currTime - (currTime % this.delay);

    if (!this.store.has(key)) {
      this.store.set(key, {
        count: 1,
        windowStart: windowStart,
      });
      return true;
    }

    const value = this.store.get(key);
    if (value.windowStart !== windowStart) {
      value.count = 1;
      value.windowStart = windowStart;
    }

    if (value.count >= this.limit) {
      console.log(`Too many requests for key ${key}, rejecting it`);
      return false;
    }

    this.store.set(key, {
      count: value.count + 1,
      windowStart: windowStart,
    });
    console.log(`Request ${key} is allowed`);
    return true;
  }
}
