const body = document.body;
const toggleThemeButton = document.getElementById('theme-btn');
const themeIcon = document.getElementById('theme-icon');

// Local storage theme
const savedTheme = localStorage.getItem("theme");

// If no theme is saved
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// set initial theme based on local storage
body.classList.toggle('dark', savedTheme == "dark" || (!savedTheme && prefersDarkMode));

// Set initial button text
// toggleThemeButton.textContent = body.classList.contains("dark") ? "Dark" : "Light";


// Set initial button image
themeIcon.src = body.classList.contains("dark") ? "./dist/assets/moon.png" : "./dist/assets/sun.png";


// 
toggleThemeButton.addEventListener('click', function () {
    body.classList.toggle("dark");
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
    themeIcon.src = body.classList.contains("dark") ? "./dist/assets/moon.png" : "./dist/assets/sun.png";

});

// Collapsing container
var col = document.getElementsByClassName("collapsible");
var changeBorderRadius = document.getElementById('border-r');
for (var i = 0; i < col.length; i++) {
    col[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "flex") {
            content.style.display = "none";
            changeBorderRadius.classList.toggle("rounded-b-xl") ?? "rounded-b-none";
            // changeBorderRadius.classList.toggle("rounded-b-xl border-2") ?"rounded-b-none border-t-2 border-l-2 border-r-2":"rounded-b-xl border-2";
        } else {
            content.style.display = "flex";
            changeBorderRadius.classList.toggle("rounded-b-xl") ? "rounded-b-none " : "rounded-b-xl ";
        }
    });
}




// Hamburger menu
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener('click', function () {
    if (nav.classList.contains("hidden")) {
        nav.classList.remove("hidden")
        nav.classList.add("flex")
    } else {
        nav.classList.remove("flex")
        nav.classList.add("hidden")
    }

});


// Current year
let currentDate = new Date();
var currentYear = currentDate.getFullYear();
const docYear = document.getElementById('year').innerHTML = currentYear;