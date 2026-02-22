import { RateLimiter } from "./RateLimiter.js";

export class SlidingWindowRateLimiter extends RateLimiter {
  constructor(maxReq, timeLimitInMs) {
    super(maxReq, timeLimitInMs);
    this.reqStore = new Map();
  }

  allow(reqKey) {
    const currTime = Date.now();
    const windowStart = currTime - this.timeLimitInMs;

    const prevReqTimestamps = this.reqStore.get(reqKey) || [];

    // if initial occurance of req is beyond curr window
    // remove them
    while (prevReqTimestamps.length > 0 && prevReqTimestamps[0] < windowStart) {
      prevReqTimestamps.shift();
    }
    // If count of req is more than allowed limit, reject
    if (prevReqTimestamps.length >= this.maxReq) {
      console.log("Sorry, too many requests");
      return false;
    }
    // add curr time to existing timestamp list
    this.reqStore.set(reqKey, [...prevReqTimestamps, currTime]);
    console.log("Request allowed");
    return true;
  }
}
