// User is only allowed to make a purchase when he is:
// logged in
// email verified
// cardInfo - valid
// if any one is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = false;

// if (isLoggedIn) {
//     console.log("Logged in Success!");
//     if (isEmailVerified) {
//         console.log("Email is verified");
//         if (cardInfo) {
//             console.log("You can make a purchase");
//         }
//     }
// }

if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("Allowed to make a purchase");
} else {
    console.log("You are not allowed to complete purchase");
}