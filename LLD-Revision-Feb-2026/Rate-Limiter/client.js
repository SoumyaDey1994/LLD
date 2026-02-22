import { FixedWindowRateLimiter } from "./FixedWindowRateLimiter.js";
import { SlidingWindowRateLimiter } from "./SlidingWindowRateLimiter.js";
import { RateLimiterStrategy } from "./RateLimiterStrategy.js";

const fixedWindowRl = new FixedWindowRateLimiter(3, 5000);
const slidingWindowRl = new SlidingWindowRateLimiter(3, 5000);

let limiter = new RateLimiterStrategy();
limiter.setStrategy(fixedWindowRl);

let counter = 1,
  counter2 = 1;
// const intervalUser = setInterval(() => {
//   if (counter === 15) clearInterval(intervalUser);

//   limiter.isAllowed(`Request_001`);
//   counter++;
// }, 1000);


limiter.setStrategy(slidingWindowRl);
const intervalAgent = setInterval(() => {
  if (counter2 === 15) clearInterval(intervalAgent);

  limiter.isAllowed("Request_002");
  counter2++;
}, 500);
