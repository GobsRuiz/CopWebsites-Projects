function chat() {
    var iconPencil = document.getElementById("chat_icon_pencil");
    var iconChat = document.getElementById("chat_icon_chat")
    var chat = document.getElementById("chat_chat");
    var closeBtn = document.getElementById("chat_chat_infoRight_closebtn");
    
    
    // Functions
    // Open chat
    function openChat() {
        if(window.innerWidth > 991){
            iconPencil.addEventListener("click", (e) => {
                // Switch icon 
                switchIcon();
                
                // Show chat
                open("block", "-52%")
            })
        }else{
            iconChat.addEventListener("click", (e) => {
                // Switch icon 
                switchIcon();
                
                // Show chat
                open("grid", "0%")
            })
        }
        
        // Switch icon
        function switchIcon() {
            // Pencil
            iconPencil.children[0].style.left = "-200%";
            iconPencil.children[1].style.left = "-90%";
            
            // Chat
            iconChat.children[0].style.left = "-200%";
            iconChat.children[1].style.left = "-90%";
        }
        // Show chat
        function open(displayValue, leftValue) {
            chat.style.display = displayValue;
    
            setTimeout(() => {
                chat.style.opacity = "1";
                chat.style.left = leftValue;
            }, 10);
        }
    }openChat()
    


    // Close chat
    function closeChat() {
        closeBtn.addEventListener("click", (e) => {
            console.log("click")

            // Switch icon
            switchIcon()

            // Close chat
            close()
        })

        // Switch icon
        function switchIcon() {
            // Pencil
            iconPencil.children[0].style.left = "0%";
            iconPencil.children[1].style.left = "200%";
            
            // Chat
            iconChat.children[0].style.left = "0%";
            iconChat.children[1].style.left = "200%";
        }

        // Close chat
        function close() {
            if(window.innerWidth > 991){
                chat.style.left = "-45%";
            }else{
                chat.style.left = "0%";
            }
            
            chat.style.opacity = "0";
            setTimeout(() => {
                chat.style.display = "none";
            }, 310);
        }
    }closeChat()
}chat()