const uid =  "regal123";

// uid = "123regal"; // can't re-assign values to constant

var firstName = "Rahul";
var lastName = "Chandrawanshi";
var email = "rahul@gmail.com";
var password = "1234567890";
var confirmPassword = "1234567890";
var courseCount = 0;
var isLoggedInFromGoogle = false;
var isLoggedInFromFacebook = true;

// fullName = prompt("Enter your name");

// console.log( "Full Name is: " + fullName);
console.log(email);
console.log(uid);

console.log(`
    With Unique ID: ${uid}
    User is: ${firstName} ${lastName}
    and his email is: ${email}
    and uses the password: ${password}
    logged in from google: ${isLoggedInFromGoogle}
    logged in from facebook: ${isLoggedInFromFacebook}
`);