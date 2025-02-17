document.addEventListener("DOMContentLoaded", function () {
    // Hamburger Menu Toggle
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Close menu when clicking a link (for better UX)
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
});
