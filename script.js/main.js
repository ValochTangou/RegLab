// Rend la fonction accessible depuis les attributs onclick du HTML
window.navigateTo = function (section) {
    console.log("User clicked on: " + section);
    alert("Navigating to the " + section + " section...");
};

document.addEventListener("DOMContentLoaded", () => {
    console.log("main.js Uploaded successfully !");

    const homeLink = document.querySelector(".nav-link");

    if (homeLink) {
        homeLink.addEventListener("click", (e) => {
            e.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});