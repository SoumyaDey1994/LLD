import { RateLimiter } from "./RateLimiter.js";

export class SlidingWindowRateLimiter extends RateLimiter{
  constructor(limit, delayInMs) {
    super(limit, delayInMs);
    this.store = new Map();
  }

  allow(key) {
    if (!this.store.has(key)) {
      this.store.set(key, [Date.now()]);
      return true;
    }

    const timestamps = this.store.get(key);
    const currTime = Date.now();
    const windowStart = currTime - this.delay;

    if (timestamps[0] && timestamps[0] < windowStart) {
      timestamps.shift();
    }

    if (timestamps.length >= this.limit) {
      console.log(`Too many request for ${key}, rejecting it`);
      return false;
    }

    timestamps.push(currTime);
    this.store.set(key, timestamps);
    console.log(`Request ${key} is allowed`);
    return true;
  }
}
