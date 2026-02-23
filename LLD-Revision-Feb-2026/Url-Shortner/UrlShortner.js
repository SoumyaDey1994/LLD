export class UrlShortner {
    constructor(store, algo, ttlInMs=5000) {
        this.store = store;
        this.algo = algo;
        this.ttl = ttlInMs;
    }

    shorten(url) {
        const salt = Math.floor(Math.random() * 1000);
        let code = null;
        do {
            code = this.algo.shortenUrl(url, salt);
        } while(this.store.contains(code));

        this.store.save(url, code, this.ttl);
        return code;
    }

    resolve(code) {
        return this.store.get(code);
    }

    displayEntries() {
        this.store.printAllEntries();
    }
}