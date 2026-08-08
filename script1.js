function validateName() {
    let name = document.getElementById("name").value.trim();
    let error = document.getElementById("nameError");

    if (name.length < 5) {
        error.innerText = "Name must be at least 5 characters";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

function validateEmail() {
    let email = document.getElementById("email").value.trim();
    let error = document.getElementById("emailError");

    if (!email.includes("@")) {
        error.innerText = "Enter a correct email";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

function validatePhone() {
    let phone = document.getElementById("phone").value.trim();
    let error = document.getElementById("phoneError");

    if (phone.length !== 10) {
        error.innerText = "Phone number must be 10 digits";
        return false;
    }

    if (isNaN(phone)) {
        error.innerText = "Phone number must contain only digits";
        return false;
    }

    if (phone === "123456789") {
        error.innerText = "Enter a valid phone number";
        return false;
    }

    error.innerText = "";
    return true;
}

function validatePassword() {
    let name = document.getElementById("name").value.trim();
    let password = document.getElementById("password").value;
    let error = document.getElementById("passwordError");

    if (password.length < 8) {
        error.innerText = "Password must be at least 8 characters";
        return false;
    }

    if (password.toLowerCase() === "password") {
        error.innerText = "Password is not strong";
        return false;
    }

    if (name !== "" && password.toLowerCase() === name.toLowerCase()) {
        error.innerText = "Password cannot be your name";
        return false;
    }

    error.innerText = "";
    return true;
}

function validateConfirmPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let error = document.getElementById("confirmPasswordError");

    if (password !== confirmPassword) {
        error.innerText = "Passwords do not match";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

function validateForm(event) {
    event.preventDefault();

    let validations = [
        validateName(),
        validateEmail(),
        validatePhone(),
        validatePassword(),
        validateConfirmPassword()
    ];

    let isValid = true;

    for (let i = 0; i < validations.length; i++) {
        if (validations[i] === false) {
            isValid = false;
        }
    }

    let successMessage = document.getElementById("successMessage");

    if (isValid) {
        successMessage.innerText = "Registration successful!";
        successMessage.className = "success";
    } else {
        successMessage.innerText = "Please correct the errors above.";
        successMessage.className = "error";
    }
}