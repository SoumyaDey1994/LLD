export class UrlStore {
  constructor() {
    this.store = new Map();
  }
  /**
   * Save orginal URL against code with ttl
   * @param {*} url
   * @param {*} code
   * @param {*} ttl
   * @returns
   */
  save(url, code, ttl) {
    this.store.set(code, {
      url,
      expiresAt: Date.now() + ttl,
    });

    return true;
  }
  /**
   * Find original url agaisnt given code
   * @param {*} code
   * @returns
   */
  find(code) {
    const value = this.store.get(code);
    if (!value) {
      console.log(`No URL exists with code ${code}`);
      return null;
    }

    const now = Date.now();
    if (value.expiresAt < now) {
      console.log(`Url code expires, hence removing it from store`);
      this.#remove(code);
      return null;
    }

    return value.url;
  }
  /**
   * Check if the entry with given code exists or not
   * @param {*} code
   * @returns
   */
  isExists(code) {
    return this.find(code) !== null;
  }

  #remove(code) {
    return this.store.delete(code);
  }

  printAllCodes() {
    for (const [code, data] of this.store.entries()) {
      console.log(`Url: ${data.url}, Code: ${code}`);
    }
  }
}
