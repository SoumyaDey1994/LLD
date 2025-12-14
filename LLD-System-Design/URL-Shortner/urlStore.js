class UrlStore {
  constructor() {
    this.store = new Map();
  }

  save(code, url, ttlMs) {
    this.store.set(code, {
      url,
      expiresAt: Date.now() + ttlMs,
    });
  }

  find(code) {
    const record = this.store.get(code);

    if (!record) return null;

    if (record.expiresAt < Date.now()) {
      console.log(`URL code expires, removing from store`);
      this.store.delete(code);
      return null;
    }

    return record.url;
  }

  exists(code) {
    return this.find(code) !== null;
  }
}

module.exports = UrlStore;
