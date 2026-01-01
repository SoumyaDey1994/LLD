export class ShortenAlgo {
  static #CODE_LENGTH = 5;
  static #BASE20 = "abcdefghijABCDEFGHIJ0123456789";
  static #MAGIC_NUM = 31;

  generate(url, salt = 0) {
    let hash = url.length + salt;

    for (let i = 0; i < url.length; i++) {
      hash = hash * ShortenAlgo.#MAGIC_NUM + url.charCodeAt(i);
    }

    hash = Math.abs(hash);
    return this.#encode(hash).slice(0, ShortenAlgo.#CODE_LENGTH);
  }

  #encode(value) {
    let result = "";
    while (value > 0) {
      result = result + ShortenAlgo.#BASE20[value % 20];
      value = Math.floor(value / 20);
    }
    return result;
  }
}
