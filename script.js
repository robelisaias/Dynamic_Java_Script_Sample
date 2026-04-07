const container = document.getElementById("card-container");
const searchInput = document.getElementById("search");
let projects = [];



function renderCards(projectList) {
    container.innerHTML = ""; 

    if (projectList.length === 0) {
        container.innerHTML = "<p style='text-align:center; color: gray;'>No projects found.</p>";
    }

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

async function loadProjects() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/robelisaias/Dynamic_Java_Script_Sample/refs/heads/feature/fetch-json/Data/projects.json");
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        projects= await response.json();
        renderCards(projects);
    }
    catch(error){
        console.error("Error fetching projects", error);
        container.innerHTML= "<p style='color:red;'>Failed to load projects.</p>";
    }
}

loadProjects();


searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    const filteredProjects = projects.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query)
    );

    renderCards(filteredProjects);
});