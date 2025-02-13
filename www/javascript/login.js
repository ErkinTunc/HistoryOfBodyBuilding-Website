let form = document.getElementById("registration-form");
let inputUsername = document.getElementById("username");
let inputPassword = document.getElementById("userpwd");
let messageArea = document.getElementById("message-area");

//console.dir
console.dir(form);
console.dir(inputUsername);
console.dir(inputPassword);
console.dir(messageArea);

// XMLHttpRequest
function sendLoginRequest(event) {
  event.preventDefault(); // Prevent sending the form

  // Manually create URL-encoded form data
  let username = document.getElementById("username").value;
  let password = document.getElementById("userpwd").value;

  // Manually construct the form data string
  let formData = `username=${encodeURIComponent(
    username
  )}&userpwd=${encodeURIComponent(password)}`;

  // 1. Create a new XMLHttpRequest object
  let xhr = new XMLHttpRequest();

  // 2. Configure it
  xhr.open("POST", "htbin/login.py", true);

  // IMPORTANT: Set the correct content type for form submission
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // 3. Send the request
  xhr.send(formData);

  // 4. Handle the response
  xhr.onload = function () {
    if (xhr.status === 200) {
      let response = xhr.responseText;
      let messageArea = document.getElementById("message-area");

      messageArea.innerHTML = response;
      messageArea.classList.add("login-result-message");

      if (response.startsWith("Bonjour")) {
        messageArea.classList.add("login-success");
        messageArea.classList.remove("login-failed");
        console.log("Login successful!");
      } else {
        messageArea.classList.add("login-failed");
        messageArea.classList.remove("login-success");
        console.log("Login failed!");
      }
    } else {
      console.error("Server error:", xhr.status, xhr.statusText);
    }
  };

  // Catch network errors
  xhr.onerror = function () {
    console.error("Network error occurred");
    let messageArea = document.getElementById("message-area");
    messageArea.textContent = "Network error. Please try again later.";
    messageArea.classList.add("login-result-message", "login-failed");
  };
}

function submitEnterKey(event) {
  if (event.key === "Enter") {
    console.log("Enter key pressed");
    sendLoginRequest(event);
  }
}

// Event Listeners
form.addEventListener("submit", sendLoginRequest);
/*When we are on a input field(while using "keydown") and push on a key from keyboard it activates*/
inputUsername.addEventListener("keydown", submitEnterKey);
inputPassword.addEventListener("keydown", submitEnterKey);
