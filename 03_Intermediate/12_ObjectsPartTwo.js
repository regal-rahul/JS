var user = {
    firstName: "Rahul",
    lastName: "Chandrawanshi",
    role: "admin",
    age: 32,
    facebookSignedIn: true,
    googleSignedIn: false,
    projectList: [],
    makeProject: function (projectName) {
        this.projectList.push(projectName);
    },
    getProjectCount: function () {
        // return `${this.firstName} have contributed in total of ${this.projectList.length} projects`
        return `${this.projectList.length}`
    },
    userInfo: function () {
        return `
            ${this.firstName} ${this.lastName} have contributed in
            ${this.getProjectCount()} projects at the age of ${this.age} while being ${this.role} and the projects are ${this.projectList}
        
        `
    }
};

var projectList = true;
// console.log(user.firstName);
// console.log(user.getProjectCount());

user.makeProject("Go Camp");
user.makeProject("Portfolio");
console.log(user.getProjectCount());

console.log(user.userInfo());