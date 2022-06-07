const title = document.querySelector("#page-title");
const btn = document.querySelector("#mode-selector");
const footer = document.querySelector("footer");
const body = document.querySelector("body");
const darkModeClass = "dark-mode";

btn.addEventListener("click", changeMode);

function changeMode() {
    changeClasses();
    changeTexts();
}

function changeTexts() {

    let containClass = title.classList.contains(darkModeClass);

    if (containClass) {
        title.innerHTML = "Dark Mode ON";
        btn.innerHTML = "Light Mode";
    } else {
        title.innerHTML = "Light Mode ON";
        btn.innerHTML = "Dark Mode";
    }

}

function changeClasses() {
    title.classList.toggle(darkModeClass);
    btn.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
}