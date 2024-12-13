// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Dynamically load components
    loadComponent("header", "components/header.html", () => {
        // Highlight active link in the header
        const page = window.location.pathname.split("/").pop();
        const links = document.querySelectorAll(".nav-link");
        links.forEach(link => {
            if (link.getAttribute("href").endsWith(page)) {
                link.classList.add("active");
            }
        });
    });

    loadComponent("footer", "components/footer.html");
    loadComponent("footer1", "components/footer1.html");
    loadComponent("ad-bar", "components/ad-bar.html");
});

/**
 * Dynamically loads an HTML component into an element by ID
 * @param {string} elementId - The ID of the target element
 * @param {string} filePath - The path to the HTML file to load
 * @param {function} [callback] - Optional callback function after the component is loaded
 */
function loadComponent(elementId, filePath, callback) {
    const element = document.getElementById(elementId);
    if (element) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                element.innerHTML = data;
                if (callback) callback();
            })
            .catch(error => console.error(error));
    }
}


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
//const scrollToTopBtn = document.getElementById('scrollToTopBtn');
// window.onscroll = function() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         scrollToTopBtn.style.display = "block";
//     } else {
//         scrollToTopBtn.style.display = "none";
//     }
// };
// scrollToTopBtn.addEventListener('click', function() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// });



// // Scroll to top functionality
 const scrollToTopBtn = document.getElementById("scrollToTopBtn");
 if (scrollToTopBtn) {
     scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
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


        function openWindow() {
            myWin = window.open("https://www.trycatchclasses.com/our-courses/", "myWin", "width=1200, height=600, top=100, left=100, scrollbars=yes, resizable=yes");
        }

        function myFunction() {
            myWin = window.open("https://www.trycatchclasses.com/contact-us/", "myWin", "width=1200, height=600, top=100, left=100, scrollbars=yes, resizable=yes");
        }

        function displayAlert() {
            var value = document.getElementById("name").value;
            alert("Hello " + value + ", share this practice page and share your knowledge");
            document.getElementById("name").value = "";
        }

        function displayConfirm() {
            var value = document.getElementById("name").value;
            confirm("Hello " + value + ", Are you sure you want to confirm?")
            document.getElementById("name").value = "";
        }

        function hideElement() {
            var x = document.getElementById("displayed-text");
            //style.visibility = "hidden";
            x.style.display = "none";
        }

        function showElement() {
            var x = document.getElementById("displayed-text");
            //style.visibility = "visible";
            x.style.display = "block";
        }
        function autocomplete () {
                var availableTags = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom (UK)", "United States (USA)", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];
                $("#autocomplete").autocomplete({
                    maxResults: 10,
                    minLength: 2,
                    source: availableTags,
                })};
    
        function toggle(element) {
            // Toggle 'open' class
            element.parentNode.classList.toggle('open');
          }

         // Helper functions for validation
         function isValidMobileNumber(number) {
            const mobileRegex = /^[0-9]{10}$/;
            return mobileRegex.test(number);
        }

        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function isValidDOB(dob) {
            const today = new Date();
            const selectedDate = new Date(dob);
            return selectedDate < today;
        }

        // Validate Form Function
        document.getElementById('validate').addEventListener('click', function () {
            const mobileNumber = document.getElementById('userNumber').value;
            const email = document.getElementById('userEmail').value;
            const dob = document.getElementById('dateOfBirthInput').value;

            // Clear error messages
            document.getElementById('mobileError').innerText = '';
            document.getElementById('emailError').innerText = '';
            document.getElementById('dobError').innerText = '';

            let isValid = true;

            // Mobile Number Validation
            if (!isValidMobileNumber(mobileNumber)) {
                document.getElementById('mobileError').innerText = 'Please enter a valid 10-digit mobile number.';
                isValid = false;
            }

            // Email Validation
            if (!isValidEmail(email)) {
                document.getElementById('emailError').innerText = 'Please enter a valid email address.';
                isValid = false;
            }

            // Date of Birth Validation
            if (!isValidDOB(dob)) {
                document.getElementById('dobError').innerText = 'Please enter a valid date of birth (cannot be today or a future date).';
                isValid = false;
            }

            // Terms and Conditions Validation
            const termsChecked = document.getElementById('terms').checked;
            if (!termsChecked) {
                alert('Please agree to the terms and conditions.');
                isValid = false;
            }

            if (isValid) {
                document.getElementById('thankYouMessage').innerText = 'Thank you! Your form is validated and ready to submit.';
            }
        });

        // Separate Submit Button
        document.getElementById('submitButton').addEventListener('click', function () {
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const message = `Thank You! Welcome ${firstName} ${lastName}, let's learn Selenium together`;
            document.getElementById('thankYouMessage').innerText = message;
        });


        //waits

        document.getElementById('completed').addEventListener('click', function () {
            const fields = [
                document.getElementById('username').value,
                document.getElementById('email').value,
                document.getElementById('password').value,
                document.getElementById('phone').value,
                document.getElementById('address').value
            ];

            const filledFieldsCount = fields.filter(field => field !== '').length;
            let delayTime = filledFieldsCount * 5000; // 5 seconds per field

            if (filledFieldsCount > 0) {
                document.getElementById('submitBtn').style.display = 'none'; // Hide submit button initially
                document.getElementById('delayDisplay').textContent = `Delay: ${delayTime / 1000} seconds...`;
                const startTime = new Date();

                setTimeout(function () {
                    document.getElementById('submitBtn').style.display = 'inline-block'; // Show submit button after delay

                    // Display current time when the submit button appears
                    const now = new Date();
                    const timeString = now.toLocaleTimeString();
                    const elapsedTime = (now - startTime) / 1000;
                    document.getElementById('timeDisplay').textContent = `Submit button visible after ${elapsedTime} seconds at: ${timeString}`;
                }, delayTime);
            } else {
                alert('Please fill at least one field!');
            }
        });

// cheatsheet

function downloadPDF() {
    const element = document.getElementById('content');
    html2pdf().from(element).set({
        margin: 1,
        filename: 'Selenium_Cheatsheet.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'in', format: 'letter', compressPDF: true }
    }).save();
}