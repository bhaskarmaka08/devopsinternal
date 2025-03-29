document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validation
    if (username.length < 3) {
        alert('Username must be at least 3 characters long.');
        return;
    }

    if (username && email && password) {
        alert('Registration successful!');
    } else {
        alert('Please fill out all fields.');
    }
});
