class UrlCodeGenerator {
  #CHARS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  /**
   * Generates a short, deterministic code from a long URL using a rolling hash.
   * The hash is encoded in Base62 for compactness and trimmed to 5 characters.
   * A salt is used to regenerate a new code in case of collisions.
   * @param {*} url
   * @param {*} salt
   */
  generate(url, salt = 0) {
    let hash = url.length + salt;

    let magicNum = 31;
    for (let i = 0; i < url.length; i++) {
      hash = hash * magicNum + url.charCodeAt(i);
    }

    hash = Math.abs(hash);
    return this.#encode(hash).slice(0, 5);
  }

  #encode(num) {
    let res = "";

    while (num > 0) {
      res = this.#CHARS[num % 62] + res;
      num = Math.floor(num / 62);
    }

    return res;
  }
}

module.exports = UrlCodeGenerator;
