// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Load Header
    fetch("components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;

            // Highlight active link
            const page = window.location.pathname.split("/").pop();
            const links = document.querySelectorAll(".nav-link");

            links.forEach(link => {
                if (link.getAttribute("href").endsWith(page)) {
                    link.classList.add("active");
                }
            });
        });
});

// Show and hide Scroll to Top button
window.onscroll = function() {
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (scrollToTopBtn) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }
};

// Scroll to top functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
