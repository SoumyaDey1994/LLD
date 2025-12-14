class UrlShortner {
  constructor(store, generator, ttlMs = 60000) {
    this.store = store;
    this.ttlMs = ttlMs;
    this.generator = generator;
  }

  shorten(url) {
    let salt = Math.floor(Math.random() * 1000);
    let code;

    do {
      code = this.generator.generate(url, salt);
    } while (this.store.exists(code));

    this.store.save(code, url, this.ttlMs);
    return code;
  }

  resolve(code) {
    return this.store.find(code);
  }
}

module.exports = UrlShortner;
