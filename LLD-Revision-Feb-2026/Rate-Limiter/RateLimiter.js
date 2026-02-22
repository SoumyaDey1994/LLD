export class RateLimiter {
    constructor(maxReq, timeLimitInMs) {
        this.maxReq = maxReq;
        this.timeLimitInMs = timeLimitInMs
    }
}
