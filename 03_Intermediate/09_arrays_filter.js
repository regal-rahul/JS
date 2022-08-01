var testArray = [2, 3, 4, 6, 1, 9, 5];

console.log(testArray.fill("r", 3, 5));

const myNumber = [12, 9, 16, 17, 99, 98, 57, 50, 89];

// const result = myNumber.filter((num) => num != 57);

const result = myNumber.filter((num) => num > 57);
console.log(result);