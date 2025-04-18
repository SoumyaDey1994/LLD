const CacheSystem = require("./CacheSystem");

const system = new CacheSystem();
system.initialize(5);
system.setNodeCapacity(0, 10);

const key1 = 'name', value1 = 'Soumya Dey';
const key2 = 'id', value2 = 'soumydey';
const key3 = 'email', value3 = 'deysoumy31@gmail.com';
const key4 = 'contact', value4 = 9972589053;
const key5 = 'profession', value5 = 'Software Developer';
const key6 = 'isMarried', value6 = false;
const key7 = 'skill', value7 = 'Full-stack Development';
const key8 = 'foodPreference', value8 = 'Non-veg salad';
const key9 = 'location', value9 = 'Bangalore';
const key10 = 'employeeId', value10 = 724605;

system.addData(key1, value1);
system.addData(key2, value2);
system.addData(key3, value3);
system.addData(key4, value4);
system.addData(key5, value5);
system.addData(key6, value6);
system.addData(key7, value7);
system.addData(key8, value8);
system.addData(key9, value9);
system.addData(key10, value10);

console.log("\n\n");

let value = system.getData(key2);
console.log(`Value of ${key2} is: ${value}`);

value = system.getData(key3);
console.log(`Value of ${key3} is: ${value}`);

value = system.getData(key7);
console.log(`Value of ${key7} is: ${value}`);

value = system.getData(key10);
console.log(`Value of ${key10} is: ${value}`);

system.removeData(key2);

value = system.getData(key2);
console.log(`Value of ${key2} is: ${value}`);

