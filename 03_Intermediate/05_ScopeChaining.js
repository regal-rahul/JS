var name = "Rahul";
console.log("line 2", name);



function sayName() {
    // var name = "Strange";
    console.log("line 12", name);
    sayNameTwo();

    function sayNameTwo() {
        // var name = "Doctor"
        console.log("line 17", name);
    }
}
sayName();


// function sayName() {
//     var name = "Strange";
//     console.log("line 5", name);
// }
// sayName();



// function sayName() {
//     var name = "Strange";
//     console.log("line 12", name);
//     sayNameTwo();

//     function sayNameTwo() {
//         var name = "Doctor"
//         console.log("line 17", name);
//     }
// }
// sayName();