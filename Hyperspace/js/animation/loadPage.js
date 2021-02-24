function loadPage() {
    window.addEventListener("load", () => {
        let logo = document.getElementById("header_top_logo");
        let languages = document.querySelectorAll("#header_top_languages a");
        let menuLinks = document.querySelectorAll("#header_top_menu a");
        let headerBottomTexth1 = document.querySelector("#header_bottom_text h1");
        let headerBottomTextp = document.querySelector("#header_bottom_text p");

        if(window.pageYOffset == 0 || window.pageYOffset < 150){
            // Logo
            defineStyle(logo);

            // Languages
            languages.forEach(element => {
                defineStyle(element)
            });

            // Menu links
            let timeout = 0;
            menuLinks.forEach(element => {
                setTimeout(() => {
                    defineStyle(element);
                }, timeout);
                timeout += 150;
            });

            // Header bottom text h1
            defineStyle(headerBottomTexth1)

            // Header bottom text p
            defineStyle(headerBottomTextp)
        }
    })

    // Define style
    function defineStyle(element){
        element.style.opacity = 1;
        element.style.bottom = 0;
    }
}loadPage();