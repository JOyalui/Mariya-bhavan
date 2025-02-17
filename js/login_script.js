document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("errorMessage");
    const inputWrapper = passwordInput.parentElement;
    const correctPassword = "correctpassword"; // Change this to your actual password

    if (passwordInput.value !== correctPassword) {
        errorMessage.style.display = "block"; // Show error message
        inputWrapper.classList.add("input-error"); // Add red border & icon
    } else {
        errorMessage.style.display = "none"; // Hide error message
        inputWrapper.classList.remove("input-error"); // Remove error styles
        
        // Redirect after login success
        window.location.href = "dashboard.html"; // Change to your actual dashboard page
    }
});
