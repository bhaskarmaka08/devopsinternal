function validateForm() {
    let isValid = true;


    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";


    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }


    const email = document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        isValid = false;
    }


    const password = document.getElementById("password").value;
    if (password.trim() === "") {
        document.getElementById("passwordError").textContent = "Password is required.";
        isValid = false;
    }


    const confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword.trim() === "") {
        document.getElementById("confirmPasswordError").textContent = "Please confirm your password.";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    }

    return isValid;
}