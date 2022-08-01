var isEven = (element) => {
    // if (element % 2 === 0) {
    //     return true;
    // }
    // return false;

    return element % 2 === 0;
}
// console.log(isEven(9));

var result = [2, 4, 7, 9].every((e) => (e % 2 === 0)); // writting a callback without return and {}
console.log(result);


// var result = [2, 4, 7, 8, 9].every(isEven); // if all element pass test then returns true otherwise false
// console.log(result);



// var result = [2, 4, 7, 9].every((e) => {
//     return e % 2 === 0;
// }); // writting a callback
// console.log(result);





// function isEven(element) {
    // if (element % 2 === 0) {
    //     return true;
    // }
    // return false;

//     return element % 2 === 0;
// }
// console.log(isEven(9));