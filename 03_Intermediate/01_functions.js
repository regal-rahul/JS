function namastey() {
    return "Hello in India";
}
namastey(); // console logging and return is diffrent so it will not print any value

var greetings = namastey(); // store namstey function values
console.log(greetings); // now printing the stored value inside greeetings
console.log(namastey()); // you can also log a funtion by calling inside but it's not preferred always

// function sayHello(name) {
//     console.log("Hello there, Rahul");
//     console.log(`Hello there, ${name}, how are you?`);
// }
// sayHello("Regal");


// function sayHello() {
//     console.log("Hello there, Rahul");
// }
// sayHello; //referencing a function
// sayHello(); // calling a function
// sayHello();

// function sayHello(name) {
//     console.log("Hello there, Rahul");
//     console.log("Hello there, ", name);
// }
// sayHello("Rahul");
// sayHello("Regal");