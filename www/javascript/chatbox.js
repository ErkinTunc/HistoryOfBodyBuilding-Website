document.addEventListener("DOMContentLoaded", function() {
    // Fonction pour envoyer un message
    function sendMessage() {
        var message = document.getElementById("message").value.trim();
        if (message !== "") {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "chatsend.py", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var response = JSON.parse(xhr.responseText);
                    if (response.num === 0) {
                        document.getElementById("message").value = ""; // Efface le champ message après l'envoi
                        getChatMessages(); // Rafraîchit la liste des messages
                    } else {
                        displayError(response.msg); // Affiche les erreurs
                    }
                }
            };
            xhr.send("msg=" + encodeURIComponent(message));
        }
    }

    // Fonction pour récupérer les messages du chat
    function getChatMessages() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "chatget.py", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var messages = JSON.parse(xhr.responseText);
                displayMessages(messages);
            }
        };
        xhr.send();
    }

    // Fonction pour afficher les messages dans la chatbox
    function displayMessages(messages) {
        var chatbox = document.getElementById("chatbox");
        chatbox.innerHTML = ""; // Efface le contenu actuel de la chatbox
        messages.forEach(function(msg) {
            var messageDiv = document.createElement("div");
            messageDiv.innerHTML = "<strong>" + msg.user + "</strong>: " + msg.msg;
            chatbox.appendChild(messageDiv);
        });
        chatbox.scrollTop = chatbox.scrollHeight; // Fait défiler la chatbox vers le bas
    }

    // Fonction pour afficher les erreurs
    function displayError(errorMsg) {
        var errorDiv = document.createElement("div");
        errorDiv.className = "error";
        errorDiv.textContent = errorMsg;
        document.body.appendChild(errorDiv);
    }

    // Actualise les messages toutes les 3 secondes
    setInterval(getChatMessages, 3000);

    // Charge les messages initiaux au chargement de la page
    getChatMessages();
});
