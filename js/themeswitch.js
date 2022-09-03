// Get HTML head element
var head = document.getElementsByTagName("HEAD")[0];
// Create new link Element
var link = document.createElement("link");

// set the attributes for link element
link.rel = "stylesheet";
link.type = "text/css";
let cookies = document.cookie;
let theme;

if (cookies === null || cookies.trim() === "") {
    document.cookie = "theme=dark";
    theme = "dark";
} else {
    let cookievars = cookies.split(";");
    cookievars.forEach((cookievar) => {
        let cookiefragments = cookievar.trim().split("=");
        if (cookiefragments[0] === "theme") {
            theme = cookiefragments[1];
        }
    });
}

if (theme === "dark") {
    link.href = "https://bootswatch.com/3/cyborg/bootstrap.min.css";
} else {
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css";
}

// Append link element to HTML head
head.appendChild(link);

document.addEventListener(
    "DOMContentLoaded",
    function () {
        let themeSwitcher = document.getElementById("themeSwitcher")
        if (theme === "dark") {
            themeSwitcher.innerText = '🌞';
        }
        themeSwitcher.addEventListener("click", () => {
            if (theme === "dark") {
                document.cookie = "theme=bright";
                location.reload();
            } else {
                document.cookie = "theme=dark";
                location.reload();
            }
        });
    },
    false
);