console.log(name); // undefined because of variable declaration
var name = "Rahul";

function sayName() {
    var name = "Doctor Strange";
    console.log(name);
}
sayName();
console.log(name); // Prints the upper declaration, because of new context overrite


// tipper("17"); // Global execution context scans the entire code and make the value available
// function tipper(a) {
//     var bill = parseInt(a);
//     console.log(bill + 5);
// }


// function bigTipper(a) {
//     var bill = parseInt(a);
//     console.log(bill + 15);
// }
// bigTipper("200"); // This will give the result because of pur function declaration


// bigTipper("200"); // This will be undefined because of variable declaration
// var bigTipper = function(a) {
//     var bill = parseInt(a);
//     console.log(bill + 15);
// }


// tipper(9);
// tipper("16");
// tipper('a'); // Gives NaN error

// var num = 2;

// function sayMe() {
//     console.log("Say Me");
// }
// sayMe();