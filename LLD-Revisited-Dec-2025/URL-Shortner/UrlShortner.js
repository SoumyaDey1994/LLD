export class UrlShortner {
  constructor(store, algo) {
    this.store = store;
    this.algo = algo;
  }
  /**
   * Method to shortner a URL to generate a Code
   * @param {*} url
   * @param {*} ttl
   * @returns
   */
  shorten(url, ttl = 1000) {
    const salt = Math.floor(Math.random() * 1000);
    let shortCode = null;

    do {
      shortCode = this.algo.generate(url, salt);
    } while (this.store.isExists(shortCode));

    this.store.save(url, shortCode, ttl);
    return shortCode;
  }

  resolve(code) {
    return this.store.find(code);
  }

  isExists(code) {
    return this.store.isExists(code);
  }

  printAllEntries() {
    return this.store.printAllCodes();
  }
}
