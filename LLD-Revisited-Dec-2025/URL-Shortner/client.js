import { UrlShortner } from "./UrlShortner.js";
import { ShortenAlgo } from "./ShortenAlgo.js";
import { UrlStore } from "./UrlStore.js";

const store = new UrlStore();
const generator = new ShortenAlgo();
const shortener = new UrlShortner(store, generator);

let url = "https://example.com/some/very/long/url";
let code = shortener.shorten(url);
console.log("URL code: ", code); // e.g. "aZ9xP"
console.log("Resolved URL: ", shortener.resolve(code)); // original URL

url =
  "https://www.udemy.com/?srsltid=AfmBOor6NAPpLYpDv7-NKH-6oIcycuusrzT_j0CAfuHMluFMDeW2P-xV";
code = shortener.shorten(url);
console.log("URL code: ", code);
console.log("Resolved URL: ", shortener.resolve(code));

code = shortener.shorten(url);
console.log("URL code: ", code);
console.log("Resolved URL: ", shortener.resolve(code));

console.log(`...........All Entries.........`);
let urlEntries = shortener.printAllEntries();
