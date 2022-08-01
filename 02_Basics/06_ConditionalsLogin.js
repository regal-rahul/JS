// Allow user to access content if he is:
// logged in from email
// logged in from Google
// logged in from Facebook

var email = false;
var facebook = false;
var google = false;

if (email || facebook || google) {
    console.log("Allowed to access the content");
} else {
    console.log("Log in first to access the content");
}