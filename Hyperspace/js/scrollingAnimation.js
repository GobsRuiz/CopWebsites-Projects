function scrollingAnimation() {
    let value = 0;
    let symbol = 0;

    
    
    // Load
    window.addEventListener("load", () => {
        value = window.pageYOffset;

        // Check which check will be executed, the one with the greater than or lesser sign 
        // This is for, if the user reloads the page, but is not on top of it. Will make the animation run at the right time
        if(value > 100){
            symbol = "maior";
            value = 700;
        }else{
            symbol = "menor";
            value = 0;
        }
    })



    // Scroll
    window.addEventListener("scroll", () => {
        // Elements
        let topToBottom = document.querySelectorAll(".topToBottom_scrollingAnimation");
        let servicesCards = document.querySelectorAll("#services .services_cards_card");
        
        // Screen height
        let screenPosition = window.innerHeight / 2 + 200 - value;

        // Get current position
        let topToBottom_CurrentPosition = functionForeach(topToBottom);
        let servicesCards_CurrentPosition = functionForeach(servicesCards);


        // Animation functions
        // Top to bottom
        topToBottom_animate(screenPosition, topToBottom_CurrentPosition)
        
        // Services cards
        servicesCards_animate(screenPosition, servicesCards_CurrentPosition)
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

    // Top to bottom
    function topToBottom_animate(screenPosition, currentPositionArray) {
        // Verification
        verification(screenPosition, currentPositionArray);
    }

    // Services cards
    function servicesCards_animate(screenPosition, currentPositionArray) {
        verification_timeout(screenPosition, currentPositionArray);  
    }

    // Verification
    function verification(screenPosition, array) {
        array.forEach(element => {
            // Execute animation 
            if(symbol == "maior"){
                if(element.top > screenPosition) {
                    defineStyle(element.element);
                }
            }else if(symbol == "menor"){
                if(element.top < screenPosition) {
                    defineStyle(element.element);
                }
            }
        });
    }

    // Verification timeout
    function verification_timeout(screenPosition ,array) {
        let value = 0;

        array.forEach(element => {
            // Execute animation
            if(symbol == "maior"){
                if(element.top > screenPosition){
                    setTimeout(() => {
                        defineStyle(element.element, 1, 0)
                    }, value);
    
                    value += 200;
                }
            }else if(symbol == "menor"){
                if(element.top < screenPosition){
                    setTimeout(() => {
                        defineStyle(element.element, 1, 0)
                    }, value);
    
                    value += 200;
                }
            }
        });
    }

    // Define style
    function defineStyle(element){
        element.style.opacity = 1;
        element.style.bottom = 0;
    }
}scrollingAnimation()