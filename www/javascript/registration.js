document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const submitBtn = document.getElementById("submitBtn");
    const username = document.getElementById("username");
    const email = document.getElementById("useremail");
    const password = document.getElementById("userpwd");

    form.addEventListener('submit', e => {
        e.preventDefault();
        validateInputs();
    });

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success')
    }

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validateInputs = () => {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        if (usernameValue === '') {
            setError(username, 'Username is required');
        } else {
            setSuccess(username);
        }

        if (emailValue === '') {
            setError(email, 'Email is required');
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Provide a valid email address');
        } else {
            setSuccess(email);
        }

        if (passwordValue === '') {
            setError(password, 'Password is required');
        } else if (passwordValue.length < 8) {
            setError(password, 'Password must be at least 8 characters.')
        } else {
            setSuccess(password);
        }

    };

    const validateForm = () => {
        const firstname = document.getElementById("firstname").value.trim();
        const lastname = document.getElementById("lastname").value.trim();
        const birthdate = document.getElementById("birthdate").value.trim();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("userpwd").value.trim();
        const email = document.getElementById("useremail").value.trim();

        const isValidFirstname = firstname !== "";
        const isValidLastname = lastname !== "";
        const isValidBirthdate = isValidDate(birthdate) || birthdate === "";
        const isValidUsername = username.length >= 6;
        const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_!?:;./*&$])[A-Za-z\d-_!?:;./*&$]{12,}$/.test(password);
        const isValidEmail = /\S+@\S+\.\S+/.test(email);

        if (isValidFirstname && isValidLastname && isValidBirthdate && isValidUsername && isValidPassword && isValidEmail) {
            submitBtn.removeAttribute("disabled");
            myErrFunction0();
        } else {
            submitBtn.setAttribute("disabled", true);

            if (!isValidFirstname) {
                myErrFunction1();
            } else if (!isValidLastname) {
                myErrFunction2();
            } else if (!isValidBirthdate) {
                myErrFunction3()
            } else if (!isValidUsername) {
                myErrFunction4()
            } else if (!isValidPassword) {
                myErrFunction5()
            } else if (!isValidEmail) {
                myErrFunction6()
            }
        }
    };

    const isValidDate = (dateString) => {
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        if (!regex.test(dateString)) return false;
        const [day, month, year] = dateString.split('/').map(Number);
        const date = new Date(year, month - 1, day);
        return date.getDate() === day && date.getMonth() === month - 1 && date.getFullYear() === year;
    };

    function myErrFunction0() {
        document.getElementById("demo-p").innerHTML = "";
    }

    function myErrFunction1() {
        document.getElementById("demo-p").innerHTML = "First name should not be empty";
    }
    function myErrFunction2() {
        document.getElementById("demo-p").innerHTML = "Last name should not be empty";
    }
    function myErrFunction3() {
        document.getElementById("demo-p").innerHTML = "Date is not valid";
    }
    function myErrFunction4() {
        document.getElementById("demo-p").innerHTML = "Username length should be more than 5";
    }
    function myErrFunction5() {
        document.getElementById("demo-p").innerHTML = "Password problem";
    }
    function myErrFunction6() {
        document.getElementById("demo-p").innerHTML = "Email problem";
    }

    form.addEventListener("input", validateForm);
});
