var sections = document.getElementsByTagName("section");
var navList = document.getElementsByClassName("nav-list")[0].children;
window.addEventListener("scroll", () => {
    let activeSection = null;
    
    console.log(window.scrollY);
    console.log(sections[sections.length - 1].offsetTop);
    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        

        if(window.scrollY >= section.offsetTop - 320) {
            activeSection = navList[i];
        }
    }
    
    for (const i of navList) {
        i.classList.remove("active");
    }

    if (!activeSection.classList.contains("active")) {
        activeSection.classList.add("active");
    }
});