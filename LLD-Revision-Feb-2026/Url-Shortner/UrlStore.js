export class UrlStore {
    constructor() {
        this.store = new Map();
    }

    save(url, code, ttl){
        // console.log(url, code);
        this.store.set(code, {
            url,
            expiresAt: Date.now() + ttl
        });
        return true;
    }

    get(code) {
        if(!this.store.has(code)) {
            return null;
        }

        const data = this.store.get(code);
        const expiry = data.expiresAt;
        const currTime = Date.now();

        if(currTime > expiry) {
            console.log(`Url code expires`);
            this.#delete(code);
            return null;
        }
        return data.url;
    }

    contains(code) {
        return this.store.has(code);
    }

    #delete(code) {
        return this.store.delete(code);
    }

    printAllEntries() {
        for(let [code, data] of this.store.entries()) {
            console.log(code + " --> " + data.url);
        }
    }
}
