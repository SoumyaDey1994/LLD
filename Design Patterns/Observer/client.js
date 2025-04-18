import Subject from "./Subject.js";
import Observer from "./Observer.js";

const subject = new Subject();

const observer1 = new Observer(1);
const observer2 = new Observer(2);
const observer3 = new Observer(3);

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);

subject.notify("New Content");

subject.unsubscribe(observer2);

subject.notify("New Content 2");
