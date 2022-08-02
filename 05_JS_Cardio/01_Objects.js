var User = function (firstName, projectCount) {
    this.firstName = firstName;
    this.projectCount = projectCount;
    this.getProjectCount = function () {
        console.log(`Course count is: ${this.projectCount}`);
    };
};

User.prototype.getFirstName = function () {
    console.log(`Your firstname is : ${this.firstName}`);
};


var rahul = new User("rahul", 9);
rahul.getProjectCount();
rahul.getFirstName();
// console.log(rahul);

var regal = new User("regal", 7);
regal.getProjectCount();
regal.getFirstName();
// console.log(regal);