var User = {
    name: "",
    getUserName: function () {
        console.log(`User name is: ${this.name}`);
    },
};


var rahul = Object.create(User);
console.log(rahul);

rahul.name = "Rahul Chandrawanshi";
rahul.getUserName();

var sam = Object.create(User, {
    name: {value: "sammy"},
    projectsCount: {value: 3},
});

sam.getUserName();