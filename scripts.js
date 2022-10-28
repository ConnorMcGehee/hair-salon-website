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
    menuButton.style.cursor = "pointer";
});
menuButton.addEventListener("mouseout", () => {

    menuButton.style.cursor = "initial";
    if (!isNavOpen) {
        menuButton.style.background = "#36aca6";
    }
});

const mediaQuery = window.matchMedia('(min-width: 48em)');

mediaQuery.onchange = (e) => handleScreenChange(e);

const handleScreenChange = (e) => {
    const nav = $("nav");
    if (!e.matches) {
        navList.style.display = "none";
        isNavOpen = false;
    } else {
        navList.style.display = "flex";
    }
}
// Initial check
handleScreenChange(mediaQuery); 