/*
=========================================
Projects Database
=========================================
*/

const projects = [

    {
        title: "Network Topologies",
        description: "Enterprise, Campus and DataCenter topologies.",
        liveProject: "../projects/topology1/index.html",
        githubProject:
        "https://github.com/ValochTangou/RegLab/tree/main/projects/topology1",
        icon: "fa-network-wired"
    },

    {
        title: "Architectures",
        description: "HLD, LLD and Infrastructure Design.",
        liveProject: "../projects/architecture1/index.html",
        githubProject:
        "https://github.com/ValochTangou/RegLab/tree/main/projects/architecture1",
        icon: "fa-cloud"
    },

    {
        title: "Configurations & Scripts",
        description: "BGP, OSPF, VLANs, Automation and Ansible.",
        liveProject: "../projects/configs1/index.html",
        githubProject:
        "https://github.com/ValochTangou/RegLab/tree/main/projects/configs1",
        icon: "fa-code"
    }

];

/*
=========================================
Security Helpers
=========================================
*/

function isSafeUrl(url)
{
    try
    {
        const parsed = new URL(url, window.location.origin);

        return (
            parsed.protocol === "https:" ||
            parsed.protocol === "http:"
        );
    }
    catch
    {
        return false;
    }
}

/*
=========================================
Page Loaded
=========================================
*/

document.addEventListener("DOMContentLoaded", () =>
{

    console.log("RegLab loaded successfully");

    const homeLink = document.querySelector(".nav-link");

    if (homeLink)
    {
        homeLink.addEventListener("click", (event) =>
        {
            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    const cardsContainer = document.querySelector(".cards-grid");

    if (!cardsContainer)
    {
        return;
    }

    cardsContainer.textContent = "";

    projects.forEach(project =>
    {

        const card = document.createElement("div");
        card.className = "card";

        const iconContainer = document.createElement("div");
        iconContainer.className = "icon-container";

        const icon = document.createElement("i");
        icon.className = `fa-solid ${project.icon}`;

        iconContainer.appendChild(icon);

        const title = document.createElement("h2");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const buttons = document.createElement("div");
        buttons.className = "card-buttons";

        const projectBtn = document.createElement("a");

        projectBtn.className = "project-btn";
        projectBtn.textContent = "Open Project";

        if (isSafeUrl(project.liveProject))
        {
            projectBtn.href = project.liveProject;
        }
        else
        {
            projectBtn.href = "#";
        }

        const githubBtn = document.createElement("a");

        githubBtn.className = "github-btn";
        githubBtn.textContent = "GitHub";

        if (isSafeUrl(project.githubProject))
        {
            githubBtn.href = project.githubProject;
        }
        else
        {
            githubBtn.href = "#";
        }

        githubBtn.target = "_blank";

        githubBtn.rel =
            "noopener noreferrer";

        githubBtn.referrerPolicy =
            "strict-origin-when-cross-origin";

        buttons.appendChild(projectBtn);
        buttons.appendChild(githubBtn);

        card.appendChild(iconContainer);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(buttons);

        cardsContainer.appendChild(card);

    });

});