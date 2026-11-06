window.navigateTo = function (section) {

    console.log("Opening: " + section);

    alert("Opening " + section);

};

/*
=========================================
Projects Database
=========================================
*/

const projects = [

    {
        title: "Network Topologies",
        description: "Enterprise, Campus and DataCenter topologies.",
        github: "https://github.com/ValochTangou/RegLab",
        icon: "fa-network-wired"
    },

    {
        title: "Architectures",
        description: "HLD, LLD and Infrastructure Design.",
        github: "https://github.com/ValochTangou/RegLab",
        icon: "fa-cloud"
    },

    {
        title: "Configurations & Scripts",
        description: "BGP, OSPF, VLANs, Automation and Ansible.",
        github: "https://github.com/ValochTangou/RegLab",
        icon: "fa-code"
    }

];

/*
=========================================
Page Loaded
=========================================
*/

document.addEventListener("DOMContentLoaded", function () {

    console.log("RegLab loaded successfully");

    /*
    -------------------------------------
    HOME button smooth scroll
    -------------------------------------
    */

    const homeLink = document.querySelector(".nav-link");

    if (homeLink) {

        homeLink.addEventListener("click", function (event) {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    /*
    -------------------------------------
    Dynamic project cards
    -------------------------------------
    */

    const cardsContainer = document.querySelector(".cards-grid");

    if (!cardsContainer) return;

    cardsContainer.innerHTML = "";

    projects.forEach(project => {

        const card = document.createElement("a");

        card.href = project.github;

        card.target = "_blank";

        card.className = "card";

        card.innerHTML = `
            <div class="icon-container">
                <i class="fa-solid ${project.icon}"></i>
            </div>

            <h2>${project.title}</h2>

            <p>${project.description}</p>

            <span class="card-link">
                View Project on GitHub
            </span>
        `;

        cardsContainer.appendChild(card);

    });

});
