var myMap = new Map();


myMap.set(1, "One");
myMap.set(2, "Two");
myMap.set(3, "Three");
myMap.set(4, "Four");
myMap.set(5, "Five");

// console.log(myMap);

// for (let key of myMap.keys()) {
//     console.log(`Key is ${key}`);
// }

// for (let [key, value] of myMap) {
//     console.log(`Key is: ${key}, Value is ${value}`);
// }

// myMap.forEach((key) => console.log(`${key}`));
// myMap.forEach((value) => console.log(`${value}`));

// myMap.forEach((k, v) => console.log(`key is: ${k} and value is: ${v}`)); // It gives the value first because of forEach method
myMap.forEach((v, k) => console.log(`Value is: ${v} and key is: ${k}`));


myMap.delete(2);
console.log(myMap); // It will delete the value having key 2.