const user = ["rahul", 3, "admin"];

// var role = user[2];
// var name = user[0];
// console.log(role);


// var [name, projectCount, role] = user;

// console.log(name);
// console.log(role);

const myUser = {
    name: "rahul",
    projectCount: 9,
    role: "admin",
};

console.log(myUser.projectCount);

const {name, projectCount, role} = myUser;
console.log(projectCount);

// const {name, myprojectCount, role} = myUser;
// console.log(myprojectCount); // Thename in object should otherwise it will give undefined.