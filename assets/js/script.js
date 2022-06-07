const title = document.querySelector("#page-title");
const btn = document.querySelector("#mode-selector");
const footer = document.querySelector("footer");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
    title.classList.toggle("dark-mode");
    btn.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");

    let darkModeClass = title.classList.contains("dark-mode");

    if (darkModeClass) {
        title.innerHTML = "Dark Mode ON";
        btn.innerHTML = "Light Mode";
    }else{
        title.innerHTML = "Light Mode ON";
        btn.innerHTML = "Dark Mode";
    }

});