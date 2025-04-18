class Observer {
    constructor(id) {
        this.id = id;
    }

    update(data) {
        console.log(`${this.id} receives data: ${data}`);
    }

}

export default Observer;