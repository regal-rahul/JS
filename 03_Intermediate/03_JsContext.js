// sayhello();

// function sayhello() {
//     console.log("Hello");
// }

if (2 === "2") {
    console.log("This is true");
}

// var myName = "Rahul";
// if (myName === myName) {
//     console.log("This is true");
// }
// Global context not available in node and it differs from browser.
// var myName = "Rahul";
// if (myName === window.myName) {
//     console.log("This is true");
// } // window should be only called in browsers this global context is available to us in browser

var myName = "Rahul";
if (myName === myName) {
    console.log("This is true");
}