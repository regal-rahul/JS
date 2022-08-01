// Create an application with following roles:
// admin - gets full access
// subadmin - gets access to create/delete content
// newproduct - gets access to create/delete product
// user - gets access to consume content

var user = "admin"

switch (user) {
    case "admin":
        console.log("You get the full access");
        break; // Used to prevent fallcase
    case "subadmin":
        console.log("You get access to create/delete content");
        break;
    case "newproduct":
        console.log("You get access to create/delete product");
        break;
    case "user":
        console.log("You get access to consume content");
        break;
    default:
        console.log("Invalid User");
        break;
}