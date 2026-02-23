export class ShortenAlgo {
  static #BASE_30 = `ABCDEFGHIJabcdefghij0123456789`;
  static #MAGIC_NUM = 31;
  static #CODE_DIGITS = 5;

  constructor() {}

  shortenUrl(url, salt) {
    let hash = url.length + salt;

    for (let i = 0; i < url.length; i++) {
      hash = hash * ShortenAlgo.#MAGIC_NUM + url.charCodeAt(i);
    }

    hash = Math.abs(hash);
    const longCode = this.#encode(hash);
    return longCode.slice(0, ShortenAlgo.#CODE_DIGITS);
  }

  #encode(hash) {
    let hashStr = "";
    while (hash > 0) {
      const rem = hash % 30;
      hashStr = hashStr + ShortenAlgo.#BASE_30[rem];
      hash = Math.floor(hash / 30);
    }

    return hashStr;
  }
}
