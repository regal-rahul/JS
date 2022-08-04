// import User from "./06_classJs";

const User = require("./06_classJs");

const rahul = new User("rahul", "rahul@gmail.com");

// console.log(rahul.getInfo());
rahul.enrollCourse("Javascript Bootcamp");
rahul.enrollCourse("React Bootcamp");

// console.log(rahul.getCourseList());

// let courses = rahul.getCourseList();

// courses.forEach(c => console.log(c));

// console.log(rahul.courseList.length);


console.log(`${rahul.name} is logged in using ${rahul.email} email is enrolled in total of ${rahul.courseList.length} courses and those are ${rahul.getCourseList()}.`);