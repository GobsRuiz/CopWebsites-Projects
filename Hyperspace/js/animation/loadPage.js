function loadPage() {
    window.addEventListener("load", () => {
        // Header
        let logo = document.getElementById("header_top_logo");
        let languages = document.querySelectorAll("#header_top_languages a");
        let menuLinks = document.querySelectorAll("#header_top_menu a");
        let headerBottom_topToBottom = document.querySelectorAll("#header_bottom .topToBottom");

        // Chat
        let chatIcon = document.getElementById("chat_icon");
        let chatMessage = document.getElementById("chat_message");



        // page loaded at the top
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

            // Header bottom
            headerBottom_topToBottom.forEach(element => {
                defineStyle(element)
            });
        }

        // Chat
        setTimeout(() => {
            defineStyle(chatIcon);
            
            setTimeout(() => {
                defineStyle(chatMessage);
            }, 300);
        }, 3000);
    })

    // Define style
    function defineStyle(element){
        element.style.opacity = 1;
        element.style.left = 0;
        element.style.bottom = 0;
    }
}loadPage();