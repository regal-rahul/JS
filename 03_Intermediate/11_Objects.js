var user = {
    firstName: "Rahul",
    lastName: "Chandrawanshi",
    role: "admin",
    age: 32,
    facebookSignedIn: true,
    googleSignedIn: false
};

// console.log(user.firstName);
// console.log(user[lastName]);
// console.log(user["lastName"]);

// console.log(user.age); // before age update
// user.age = 23;
// console.log(user.age);
// console.log(user);

// console.table(user);

var iPhone = {
    modelNumber: "QWERTY12345",
    modelName: "iPhone 15 pro",
    launchYear: 2022,
    price: 1999999,
    color: ["black", "white", "red", "blue"],
    storage: 128,
    size: 6.75
};

console.table(iPhone);
console.log(iPhone.color);