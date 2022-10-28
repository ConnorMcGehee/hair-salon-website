const $ = (elementId) => {
    return document.getElementById(elementId);
}

const menuButton = $("menu-button");
const navList = $("nav-list");
const logo = $("logo");

let isNavOpen = false;

menuButton.addEventListener("click", () => {
    if (!isNavOpen) {
        navList.style.display = "block";
        menuButton.style.background = "#20c3bc";
        isNavOpen = true;
    } else {
        navList.style.display = "none";
        menuButton.style.background = "#36aca6";
        isNavOpen = false;
    }
});

menuButton.addEventListener("mouseover", () => {

    menuButton.style.background = "#20c3bc";
});
menuButton.addEventListener("mouseout", () => {

    if (!isNavOpen) {
        menuButton.style.background = "#36aca6";
    }
});
