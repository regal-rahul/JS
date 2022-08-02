// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

const myStates = [
    "Delhi",
    "UP",
    "Assam",
    "Bihar",
    1998,
    "Banglore",
    "Maharashtra"
];

for(let i = 0; i < myStates.length; i++){
    if (typeof myStates[i] !== "string") break;
    console.log(myStates[i]);
}