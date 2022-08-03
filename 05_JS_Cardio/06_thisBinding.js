// Curring topic

const rahul  = {
    firstName: "Rahul",
    lastName: "Chandrawanshi",
    role: "admin",
    projectCount: 9,
    getInfo: function () {
        console.log(`
            First name is ${this.firstName}
            Last name is ${this.lastName}
            His role is ${this.role}
            and he contributed to ${this.projectCount} projects.
        `);
    },
};


const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "sub-admin",
    courseCount: 4,
};

// rahul.getInfo();
// dj.getInfo(); // Undefined function

// rahul.getInfo.bind(dj)();
// var djInfo = rahul.getInfo.bind(dj);
// djInfo();


rahul.getInfo.call(dj);