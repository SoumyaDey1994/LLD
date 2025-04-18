class Singleton {
    static #instance;
    constructor() {
        if(Singleton.#instance) {
            throw new Error("Please use static getInstance() to acess instance of this class");
        }

        this.data = null;
    }

    static getInstance() {
        // Check if an instance exists (first check - no locking yet)
        // const { Mutex } = require('async-mutex');
        // if (!Singleton.#instance) {
        //     // Acquire the mutex lock for thread safety
        //     await Singleton.#mutex.runExclusive(async () => {
        //         if (!Singleton.#instance) {  // Double-checked locking
        //             Singleton.#instance = new Singleton();
        //         }
        //     });
        // }

        if(!Singleton.#instance) {
            Singleton.#instance = new Singleton();
        }
        return Singleton.#instance;
    }

    setData() {
        this.data = 'Updated Data';
    }

    getData() {
        return this.data;
    }
}

/**
 * Client code
 */
const instance = Singleton.getInstance();
console.log("Data: "+instance.getData());

instance.setData("New data");

const instance2 = Singleton.getInstance();
console.log("Data: "+instance2.getData());

console.log("Is both instances same: ", instance === instance2);

