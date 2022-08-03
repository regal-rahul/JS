const projects = [
    {
        name: "ReactJS project",
        price: "9.7"
    },
    {
        name: "NodeJS project",
        price: "7.2"
    },
    {
        name: "MEAN project",
        price: "3"
    },
    {
        name: "MERN project",
        price: "9"
    },
    {
        name: "Golang project",
        price: "8.5"
    },
    {
        name: "Django project",
        price: "2.9"
    },
    {
        name: "Python project",
        price: "9.9"
    },
    {
        name: "C++ project",
        price: "4"
    },
];

function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    projects.forEach(project => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(project.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$ " + project.price);
        span.appendChild(price);
        
        li.appendChild(span);
        ul.appendChild(li);
    });
}

// generateList(); //both method are same choose any to get the work done.
window.addEventListener("load", generateList);

const successButton = document.querySelector(".btn-success");
successButton.addEventListener("click", () => {
    projects.sort((a, b) => a.price - b.price);
    generateList();
});

const primaryButton = document.querySelector(".btn-primary");
primaryButton.addEventListener("click", () => {
    projects.sort((a, b) => b.price - a.price);
    generateList();
});