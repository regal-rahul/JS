var user = {
    firstName: "Rahul",
    lastName: "Chandrawanshi",
    role: "admin",
    age: 32,
    facebookSignedIn: true,
    googleSignedIn: false
};

console.log(user.firstName);
// console.log(user[lastName]);
console.log(user["lastName"]);

console.log(user.age); // before age update
user.age = 23;
console.log(user.age);
console.log(user);

console.table(user);