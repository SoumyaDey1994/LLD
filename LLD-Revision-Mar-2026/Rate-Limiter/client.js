import { TokenBucketRateLimiter } from "./TokenBucketRateLimiter.js";

const rateLimiter = new TokenBucketRateLimiter(5, 1);

let count = 0;
const timer = setInterval(() => {
  if (count === 50) {
    clearInterval(timer);
  }

  rateLimiter.allow(`Req-001`);
  count++;
}, 150);
