const CacheSystem = require("./cacheSystem");

const system = CacheSystem.getInstance();
system.initialize(5);
system.setNodeCapacity(0, 10);
system.setNodeCapacity(2, 5);

const key1 = "name",
  value1 = "Soumya Dey";
const key2 = "id",
  value2 = "soumydey";
const key3 = "email",
  value3 = "deysoumy31@gmail.com";
const key4 = "contact",
  value4 = 9972589053;
const key5 = "profession",
  value5 = "Software Developer";
const key6 = "isMarried",
  value6 = false;
const key7 = "skill",
  value7 = "Full-stack Development";
const key8 = "foodPreference",
  value8 = "Non-veg salad";
const key9 = "location",
  value9 = "Bangalore";
const key10 = "employeeId",
  value10 = 724605;

system.add(key1, value1);
system.add(key2, value2);
system.add(key3, value3);
system.add(key4, value4);
system.add(key5, value5);
system.add(key6, value6);
system.add(key7, value7);
system.add(key8, value8);
system.add(key9, value9);
system.add(key10, value10);

console.log("\n\n");

let value = system.get(key2);
console.log(`Value of ${key2} is: ${value}`);

value = system.get(key3);
console.log(`Value of ${key3} is: ${value}`);

value = system.get(key7);
console.log(`Value of ${key7} is: ${value}`);

value = system.get(key10);
console.log(`Value of ${key10} is: ${value}`);

system.delete(key2);

value = system.get(key2);
console.log(`Value of ${key2} is: ${value}`);
