class Subject {
    constructor() {
        this.observers =[];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs.id !== observer.id);
    }

    notify(data) {
        this.observers.forEach(obs => obs.update(data));
    }
}

export default Subject;