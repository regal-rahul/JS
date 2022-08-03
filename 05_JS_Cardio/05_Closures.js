// function init() {
//     var firstName = "rahul";
//     function sayFirstName() {
//         console.log(firstName);
//     }
//     return sayFirstName;
// }

// var value = init();

// value();


function doAddition(x) {
    return function (y) {
        return x + y;
    }
}

var add5 = doAddition(4);
console.log(add5(5));

console.log(doAddition(7)(2));