// var returnedValue = Math.max(2, 5, 6, 7, 8, 9, 17, 16, 98, 99, 20, 88);

// console.log(returnedValue);

// var myObj = {};

// Object.assign(myObj, {a:1, b:2, c:3}, {f:9, y:98, g:7}, {e:3, t:16, p:17});
// console.log(myObj);

function sumOne(a, b) {
    return a + b;
}

var myA = [5, 4];
// console.log(sumOne(...myA)); // Spread operator ... to spread the values inside the Array into function.

// REST operator
function sumTwo(a, b, ...args) {
    let multi = a * b;
    let sum = 0;
    for (const arg of args) {
        // sum = sum + args;
        sum += arg;
    }
    return [sum, multi];
}
console.log(sumTwo(3, 13, 9, 2, 99, 1));