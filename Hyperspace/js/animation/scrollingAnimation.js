function scrollingAnimation() {
    let value = 0;
    let symbol = 0;

    
    
    // Load
    window.addEventListener("load", () => {
        
    })



    // Scroll
    window.addEventListener("scroll", () => {
        // Elements
        // Header
            let logo = document.querySelector("#header_top_logo");
            let languages = document.querySelectorAll("#header_top_languages a");
            let menuLinks = document.querySelectorAll("#header_top_menu a");
        // Services
        let servicesCards = document.querySelectorAll("#services .services_cards_card");
        // Top to bottom
        let topToBottom = document.querySelectorAll(".topToBottom");
        
        // Screen height
        let screenPosition = window.innerHeight / 2 + 200 - value;

        // Get current position
        let servicesCards_CurrentPosition = functionForeach(servicesCards);
        let topToBottom_CurrentPosition = functionForeach(topToBottom);


        // Animation functions
        // Header - logo languages, and menu links
        header_animate(logo, languages, menuLinks)
        
        // Services cards
        servicesCards_animate(screenPosition, servicesCards_CurrentPosition)

        // Top to bottom
        topToBottom_animate(screenPosition, topToBottom_CurrentPosition)
    })

    // Get current position
    function functionForeach(array) {
        let currentPositionArray = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            currentPositionArray[i] = {
                element: element, 
                top: element.getBoundingClientRect().top
            }
        }
        return currentPositionArray;
    }



    // Animate functions
    // Header - logo, languages and menu links
    function header_animate(logo, languages, menuLinks) {
        if(window.pageYOffset < 120){
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
                    defineStyle(element)
                }, timeout);
                timeout += 200;
            });
        }
    }

    // Services cards
    function servicesCards_animate(screenPosition, currentPositionArray) {
        verification_timeout(screenPosition, currentPositionArray);  
    }

    // Top to bottom
    function topToBottom_animate(screenPosition, currentPositionArray) {
        // Verification
        verification(screenPosition, currentPositionArray);
    }



    // Verification
    function verification(screenPosition, array) {
        array.forEach(element => {
            // Execute animation 
            if(element.top < screenPosition) {
                defineStyle(element.element);
            }
        });
    }

    // Verification timeout
    function verification_timeout(screenPosition, array) {
        let value = 0;

        array.forEach(element => {
            // Execute animation
            if(element.top < screenPosition){
                setTimeout(() => {
                    defineStyle(element.element, 1, 0)
                }, value);

                value += 200;
            }
        });
    }

    // Define style
    function defineStyle(element){
        element.style.opacity = 1;
        element.style.bottom = 0;
    }
}scrollingAnimation()