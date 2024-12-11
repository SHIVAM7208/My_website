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

// Scroll-to-top functionality
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



// // Scroll to top functionality
// const scrollToTopBtn = document.getElementById("scrollToTopBtn");
// if (scrollToTopBtn) {
//     scrollToTopBtn.addEventListener("click", function() {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     });
// }
function validateForm() 
        {
            var userName = document.getElementById("userName").value;
            var password = document.getElementById("password").value;
            var message = document.getElementById("message");
            var usernamePattern = /^[A-Za-z]+$/;
            var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
            // Validate username (alphabets only)
            if (!usernamePattern.test(userName)) {
                message.innerHTML = "Username should only contain alphabets.";
                document.getElementById("forgotPassword").style.display = "none";
                return false;
            }
    
            // Validate password (must contain at least 8 characters with letters and numbers)
            if (!passwordPattern.test(password)) {
                message.innerHTML = "Password must contain at least 8 characters, including both letters and numbers.";
                document.getElementById("forgotPassword").style.display = "block";
                return false;
            }
    
            // Correct password check
            if (password === "selenium") {
                message.innerHTML = "Welcome, " + userName + "! Let's learn Selenium together.";
                document.getElementById("forgotPassword").style.display = "none";
            } else {
                message.innerHTML = "Incorrect password.";
                document.getElementById("forgotPassword").style.display = "block";
            }
        }
function showPassword() 
        {
            alert("The correct password is: selenium24");
        }
