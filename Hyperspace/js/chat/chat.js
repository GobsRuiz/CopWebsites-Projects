function chat() {
    var iconPencil = document.getElementById("chat_icon_pencil");
    var iconChat = document.getElementById("chat_icon_chat")
    var chat = document.getElementById("chat_chat");
    var closeBtn = document.getElementById("chat_chat_infoRight_closebtn");
    
    
    // Functions
    // Open chat
    function openChat() {
        iconPencil.addEventListener("click", (e) => {
            console.log("open")
            // Switch icon 
            switchIcon();
            
            // Show chat
            open()
        })
        
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
        function open() {
            chat.style.display = "grid";
    
            setTimeout(() => {
                chat.style.opacity = "1";
                chat.style.left = "-52%";
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
            chat.style.opacity = "0";
            chat.style.left = "-45%";

            setTimeout(() => {
                chat.style.display = "none";
            }, 310);
        }
    }closeChat()
}chat()