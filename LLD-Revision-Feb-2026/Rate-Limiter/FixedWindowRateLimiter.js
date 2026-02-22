import { RateLimiter } from "./RateLimiter.js";

export class FixedWindowRateLimiter extends RateLimiter {
  constructor(maxReq, timeLimitInMs) {
    super(maxReq, timeLimitInMs);
    this.reqStore = new Map();
  }

  allow(reqKey) {
    const currTime = Date.now();
    const windowStart = currTime - (currTime % this.timeLimitInMs);
    const reqEntry = this.reqStore.get(reqKey) || {
      count: 0,
      windowStart,
    };
    // if outside of curr window,
    // reset the window
    if (reqEntry.windowStart !== windowStart) {
      reqEntry.count = 0;
      reqEntry.windowStart = windowStart;
    }
    // If count of req is more than allowed limit, reject
    if (reqEntry.count >= this.maxReq) {
      console.log("Sorry, too many requests");
      return false;
    }
    // set count of req to existing count+1
    this.reqStore.set(reqKey, {
      count: reqEntry.count + 1,
      windowStart: windowStart,
    });
    console.log("Request allowed");
    return true;
  }
}
