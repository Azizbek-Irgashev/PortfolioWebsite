window.addEventListener("load", () => {
    console.log("Sophia's site is active!");

    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", evt => {
            evt.preventDefault();
            const id = link.getAttribute("href").substring(1);
            const section = document.getElementById(id);
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
});