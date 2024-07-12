function solve(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get form inputs
  var username = document.getElementById("first").value;
  var password = document.getElementById("password").value;

  // Perform validation (for example, checking if fields are not empty)
  if (username.trim() === "" || password.trim() === "") {
    alert("Please fill in all fields.");
    return; // Exit the function if validation fails
  }

  // If validation passes, you can proceed with submitting the form
  // For demonstration purposes, I'm just logging the input values here
  console.log("Username:", username);
  console.log("Password:", password);

  // Here you can submit the form programmatically if needed
  // For example:
  // document.getElementById("myForm").submit();

  // Or you can redirect the user to another page
  // For example:
  // window.location.href = "success.html";
}
