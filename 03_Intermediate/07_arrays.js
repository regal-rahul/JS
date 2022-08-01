// var name;
// var name2;
// var name3;

var countries = ["India", "USA", "Japan", "Russia"];
var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam")

// console.log(states[0]);
// console.log(states.length);

// states[0] = "Bihar";
// console.log(states);

var user = ["rahul", "rahul@gmail.com", 9, 16, true];
// console.log(user);

user.pop();
user.pop();
// console.log(user);

user.unshift("NEW VALUE");
// console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf("rahul"));
console.log(user.indexOf("rahull")); // unmatched data will give -1.

console.log(Array.from("regal"));