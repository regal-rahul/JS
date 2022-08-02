console.log(this);

var user = {
    firstName: "Rahul",
    projectCount: 2,
    getProjectCount: function () {
        console.log("line 7", this);
        function sayHello() {
            console.log("Hello");
            console.log("line 10", this);
        }
        sayHello();
    },
}

user.getProjectCount();