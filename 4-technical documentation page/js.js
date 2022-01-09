var navbarIcon = document.getElementsByClassName("navbar-icon")[0];
var navbarList = document.getElementsByClassName("navbar-list")[0];

navbarIcon.addEventListener("click", () => {
    if (navbarList.classList.contains("expand")) {
        navbarList.classList.remove("expand");
    }
    else {
        navbarList.classList.add("expand");
    }
})
 