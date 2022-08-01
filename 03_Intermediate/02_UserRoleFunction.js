/*
Define a function that can answer the role of a user.
A user can be on following roles:
admin - with all access
subadmin - with access tp create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getuserRole(name, role)
*/

var getUserRole = function(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            // break; // this is not necessary here because of return keyword
        case "subdomainadmin":
            return `${name} is sub-admin with access to create/delete courses`;
            // break;
        case "testprep":
            return `${name} is testprep with access to create/delete test`;
            // break;
        case "user":
            return `${name} is user with access to consume content`;
            // break;
        
        default:
            return `${name} is a trial user`;
            break;
    }
}

console.log(getUserRole("Rahul", "testprep"));

var getRole = getUserRole("Hulk", "user");
console.log(getRole);




// function getUserRole(name, role) {
//     switch (role) {
//         case "admin":
//             return `${name} is admin with all access`;
//             break; // this is not necessary here because of return keyword
//         case "subdomainadmin":
//             return `${name} is sub-admin with access to create/delete courses`;
//             break;
//         case "testprep":
//             return `${name} is testprep with access to create/delete test`;
//             break;
//         case "user":
//             return `${name} is user with access to consume content`;
//             break;
        
//         default:
//             return `${name} is a trial user`;
//             break;
//     }
// }

// console.log(getUserRole("Rahul", "testprep"));

// var getRole = getUserRole("Hulk", "user");
// console.log(getRole);
