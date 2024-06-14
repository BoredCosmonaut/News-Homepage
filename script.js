const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu-box");
const menuExit = document.querySelector("#exit-image");


menuButton.addEventListener("click", (e) => {
    menu.style.display = "flex";
    document.querySelector("body").classList.add("scroll-lock");
})

menuExit.addEventListener("click", () => {
    menu.style.display = "none";
    document.querySelector("body").classList.remove("scroll-lock");
})