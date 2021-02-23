function pageLoaded() {
    let languages = document.querySelectorAll("#header_top_languages a");
    let menuLinks = document.querySelectorAll("#header_top_menu a");
    let topToBottom = document.querySelectorAll(".topToBottom");
    


    window.addEventListener("load", (e) => {
        // Languages animate
        languages_animate();
    
        // Menu links
        menuLinks_animate();
    
        // Top to botto
        topToBottom_animate();
    })
    
    // Menu links
    function menuLinks_animate() {
        // First link
        menuLinks[0].style.opacity = 1;
    
        // Index
        let i = 1;
    
        // Runtime
        setInterval(() => {
            if(i < menuLinks.length){
                menuLinks[i].style.opacity = 1;
                i += 1;
            }
        }, 150);
    }
    
    // Top to bottom
    function topToBottom_animate() {
        topToBottom.forEach(element => {
            element.style.opacity = "1";
            element.style.bottom = "0";
        });
    }
    
    function languages_animate() {
        languages.forEach(element => {
            element.style.opacity = 1;
        });
    }
}pageLoaded()


