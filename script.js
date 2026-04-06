// script.js

const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio website using HTML, CSS, and JS.",
        category: "Web Design",
        imageURL: "Card_Images/web-design.jpg",
        link: "#"
    },
    {
        title: "Portfolio App",
        description: "A simple portfolio app to showcase projects.",
        category: "App Development",
        imageURL: "Card_Images/App-portfolio.jpg",
        link: "#"
    },
    {
        title: "Portfolio Photo",
        description: "A collection of photos showcasing my work.",
        category: "Photography",
        imageURL: "Card_Images/Photo-portfolio.jpg",
        link: "#"
    },
    {
        title: "Portfolio Architecture",
        description: "A portfolio of architectural designs.",
        category: "Architecture",
        imageURL: "Card_Images/Architecture-portfolio.jpg",
        link: "#"
    },
    {
        title: "Portfolio Travel",
        description: "A collection of travel sites for your next adventure.",
        category: "Travel",
        imageURL: "Card_Images/Travel-design.jpg",
        link: "#"
    },
    {
        title: "Portfolio Sports",
        description: "A collection of sport shows.",
        category: "Sports",
        imageURL: "Card_Images/Sports-events.jpg",
        link: "#"
    }
];


const container = document.getElementById("card-container");

function renderCards(projectList) {
    container.innerHTML = ""; // Clear previous cards

    projectList.forEach(project => {
        const card = document.createElement("article");

        card.innerHTML = `
            <img src="${project.imageURL}" alt="${project.title}">
            <span>${project.category}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <button onclick="window.open('${project.link}', '_blank')">View Project</button>
        `;

        container.appendChild(card);
    });
}

// Initial render
renderCards(projects);


const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    const filteredProjects = projects.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query)
    );

    renderCards(filteredProjects);
});