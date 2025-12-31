import { RateLimiter } from "./RateLimiter.js";

export class SlidingWindowRateLimiter extends RateLimiter {
  constructor(limit, windowMs) {
    super(limit, windowMs);
    this.store = new Map();
  }

  allow(key) {
    const currTime = Date.now();
    const windowStart = currTime - this.windowMs;
    console.log(`Start of window: ${windowStart}`);

    const reqTimes = this.store.get(key) || [];
    // remove entries outside window
    if (reqTimes.length > 0 && reqTimes[0] < windowStart) {
      reqTimes.shift();
    }

    if (reqTimes.length >= this.limit) {
      console.log(
        `Too many request within time-range, hence rejecting the current req ${key}`
      );
      return false;
    }

    this.store.set(key, [...reqTimes, currTime]);
    console.log(`Allowing req ${key} as falls withing sliding window range`);
    return true;
  }
}
