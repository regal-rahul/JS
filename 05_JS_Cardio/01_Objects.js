var User = function (firstName, projectCount) {
    this.firstName = firstName;
    this.projectCount = projectCount;
    this.getProjectCount = function () {
        console.log(`Course count is: ${this.projectCount}`);
    };
};

var rahul = new User("rahul", 9);
console.log(rahul);

var regal = new User("regal", 7);
console.log(regal);