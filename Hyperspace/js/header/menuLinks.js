function menuLinks() {
    let links = document.querySelectorAll("#header_top_menu a");



    // Functions
    links.forEach(element => {
        element.addEventListener("click", (e) => {
            e.preventDefault();

            // Get section
            let section = document.getElementById(e.target.getAttribute("href"));

            // Scroll
            window.scroll({
                top: section.offsetTop,
                behavior: "smooth"
            })
        })
    });
}menuLinks()