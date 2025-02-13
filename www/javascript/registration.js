let form = document.getElementById("registration-form");
let inputUsername = document.getElementById("username");
let inputEmail = document.getElementById("useremail");
let inputPassword = document.getElementById("userpwd");
let inputFirstName = document.getElementById("firstname");
let inputLastName = document.getElementById("lastname");
let inputBirthdate = document.getElementById("birthdate");

//console.dir
console.dir(form);
console.dir(inputUsername);
console.dir(inputEmail);
console.dir(inputPassword);
console.dir(inputFirstName);
console.dir(inputLastName);
console.dir(inputBirthdate);

// Error message For username
let UsernameErrorElement = document.createElement("span");
UsernameErrorElement.style.color = "red";
inputUsername.parentNode.appendChild(UsernameErrorElement);
// Error message For email
let emailErrorElement = document.createElement("span");
emailErrorElement.style.color = "red";
inputEmail.parentNode.appendChild(emailErrorElement);
// Error message For Password
let passwordErrorElement = document.createElement("span");
passwordErrorElement.style.color = "red";
inputPassword.parentNode.append(passwordErrorElement);
// Error message For FirstName
let firstNameErrorElement = document.createElement("span");
firstNameErrorElement.style.color = "red";
inputFirstName.parentNode.append(firstNameErrorElement);
// Error message For LastName
let lastNameErrorElement = document.createElement("span");
lastNameErrorElement.style.color = "red";
inputLastName.parentNode.append(lastNameErrorElement);
// Error message For Birthdate
let BirthdateErrorElement = document.createElement("span");
BirthdateErrorElement.style.color = "red";
inputBirthdate.parentNode.append(BirthdateErrorElement);

// Fonctions
VerifyUsername = function () {
  // user's username
  let usernameValue = inputUsername.value;
  // clean error message
  UsernameErrorElement.textContent = "";

  // Check username
  if (usernameValue === "") {
    UsernameErrorElement.textContent = "Username cannot be empty";
    return false;
  } else if (usernameValue.length < inputUsername.minLength) {
    UsernameErrorElement.textContent = "Username should contains 6 characters";
    return false;
  }
  return true;
};

VerifyEmail = function () {
  // Regex email
  let emailRegex = /^[\w.-]+@[\w-]+\.\w{3,6}$/;
  // user email
  let emailValue = inputEmail.value;
  // clean error message
  emailErrorElement.textContent = "";

  // Check email
  if (emailValue === "") {
    emailErrorElement.textContent = "Email cannot be empty.";
    return false;
  } else if (!emailRegex.test(emailValue)) {
    emailErrorElement.textContent = "Please enter a valid email address.";
    return false;
  }
  return true;
};

VerifyPassword = function () {
  // Password regex
  let passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[_\-;:!?./*&$]).{12,}$/;
  // user Password
  let passwordValue = inputPassword.value;
  // clean error message
  passwordErrorElement.textContent = "";

  // Check password
  if (passwordValue === "") {
    passwordErrorElement.textContent = "Password cannot be empty.";
    return false;
  } else if (!passwordRegex.test(passwordValue)) {
    passwordErrorElement.textContent =
      "Password must be at least 12 characters long and include an uppercase letter, a lowercase letter, a digit, and one of the special characters (_-;:!?./*&$).";
    return false;
  }
  return true;
};

VerifyFirstNameFields = function () {
  // clean error message
  firstNameErrorElement.textContent = "";

  // Verify First Name
  if (inputFirstName.value.trim() === "") {
    firstNameErrorElement.textContent = "First name cannot be empty.";
    return false;
  }
  return true;
};

VerifyLastNameFields = function () {
  // clean error message
  lastNameErrorElement.textContent = "";

  // Verify Last Name
  if (inputLastName.value.trim() === "") {
    lastNameErrorElement.textContent = "Last name cannot be empty.";
    return false;
  }
  return true;
};

VerifyBirthdate = function () {
  // Users birthday
  let birthdateValue =
    inputBirthdate.value.trim(); /*trim deletes white space in the input ex: "  Hello  " -> "Hello"*/

  // clean error message
  BirthdateErrorElement.textContent = "";

  // Verify birthday
  if (birthdateValue === "") {
    return true; /* birthday could be left empty*/
  }

  // Regex for the birthday
  let dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

  // Control with Regex
  if (!dateRegex.test(birthdateValue)) {
    BirthdateErrorElement.textContent =
      "Please enter a valid date in the format dd/mm/yyyy.";
    return false;
  }

  // Divide the date and check if it is a valid date
  let [day, month, year] = birthdateValue.split("/").map(Number);
  let date = new Date(year, month - 1, day); // Ay 0 tabanlı olduğu için -1

  // Check if it is a valid date ex: 40/02/2024 FALSE or 31/02/2024 FALSE
  if (
    date.getFullYear() !== year ||
    date.getMonth() + 1 !== month ||
    date.getDate() !== day
  ) {
    BirthdateErrorElement.textContent = "The date is invalid.";
    return false;
  }

  // Today's date
  let today = new Date();
  let todayDay = today.getDate();
  let todayMonth = today.getMonth() + 1; // 0 tabanlı olduğu için +1
  let todayYear = today.getFullYear();

  // Compare user's date with today's date
  if (
    year > todayYear ||
    (year === todayYear && month > todayMonth) ||
    (year === todayYear && month === todayMonth && day >= todayDay)
  ) {
    BirthdateErrorElement.textContent = "The date must be in the past.";
    return false;
  }

  return true;
};

// Checking the Form which user is sending
SendForm = function (event) {
  let isValid =
    VerifyUsername() &&
    VerifyEmail() &&
    VerifyPassword() &&
    VerifyFirstNameFields() &&
    VerifyLastNameFields();

  let birthdateIsValid = VerifyBirthdate(); /* Could be empty */

  isValid = isValid && birthdateIsValid;

  // Show results on Console
  console.log("-----------------------------");

  console.log("username:", VerifyUsername());
  console.log("email:", VerifyEmail());
  console.log("password:", VerifyPassword());
  console.log("firstName:", VerifyFirstNameFields());
  console.log("lastName:", VerifyLastNameFields());
  console.log(
    "birthdate:",
    birthdateIsValid
  ); /*if it is written wrong it is false*/

  if (!isValid) {
    event.preventDefault(); // Prevent sending the form
  }

  console.log("All validations passed:", isValid);

};

// Submit form when Enter key is pressed
function submitEnterKey(event) {
  if (event.key === "Enter") {

    // Check if the currently focused element is part of the form
    if (
      event.target === inputUsername ||
      event.target === inputEmail ||
      event.target === inputPassword ||
      event.target === inputFirstName ||
      event.target === inputLastName ||
      event.target === inputBirthdate
    ) {
      // Trigger form submission validation
      SendForm(event);
    }
  }
}

// Event Listeners
inputUsername.addEventListener("input", VerifyUsername);
inputEmail.addEventListener("input", VerifyEmail);
inputPassword.addEventListener("input", VerifyPassword);
inputFirstName.addEventListener("input", VerifyFirstNameFields);
inputLastName.addEventListener("input", VerifyLastNameFields);
inputBirthdate.addEventListener("input", VerifyBirthdate);
form.addEventListener("submit", SendForm);

// Attach keydown listener to each input field
inputUsername.addEventListener("keydown", submitEnterKey);
inputEmail.addEventListener("keydown", submitEnterKey);
inputPassword.addEventListener("keydown", submitEnterKey);
inputFirstName.addEventListener("keydown", submitEnterKey);
inputLastName.addEventListener("keydown", submitEnterKey);
inputBirthdate.addEventListener("keydown", submitEnterKey);
