import { RateLimiter } from "./RateLimiter.js";

export class FixedWindowRateLimiter extends RateLimiter {
  constructor(limit, windowMs) {
    super(limit, windowMs);
    this.store = new Map();
  }

  allow(key) {
    const currTime = Date.now();
    const windowStart = currTime - (currTime % this.windowMs);
    console.log(`Start of window: ${windowStart}`);

    const data = this.store.get(key) || {
      frequency: 0,
      windowStart: windowStart,
    };

    if (data.windowStart !== windowStart) {
      data.frequency = 0;
      data.windowStart = windowStart;
    }

    if (data.frequency >= this.limit) {
      console.log(`Request exceeds limit, hence rejecting request ${key}`);
      return false;
    }

    this.store.set(key, {
      frequency: data.frequency + 1,
      windowStart: windowStart,
    });
    console.log(`Allowing request ${key} as falls b/w fixed window range...`);
    return true;
  }
}
