// script.js
(() => {
    document.addEventListener("DOMContentLoaded", () => {
        // Load Header
        fetch("components/header.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(data => {
                const headerElement = document.getElementById("header");
                if (headerElement) {
                    headerElement.innerHTML = data;

                    // Highlight active link
                    const page = window.location.pathname.split("/").pop();
                    const links = document.querySelectorAll(".nav-link");

                    links.forEach(link => {
                        if (link.getAttribute("href").endsWith(page)) {
                            link.classList.add("active");
                        }
                    });
                }
            })
            .catch(error => console.error("Error loading header:", error));
    });

    // Show and hide Scroll to Top button
    window.onscroll = function () {
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");
        if (scrollToTopBtn) {
            scrollToTopBtn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";
        }
    };

    // Scroll to top functionality
    document.addEventListener("click", (event) => {
        if (event.target.id === "scrollToTopBtn") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });

    // Quiz functionality
    const quizData = [
        // Quiz data as provided in the original code
        // Add your quiz items here
    ];

    const quizContainer = document.getElementById("quiz");
    const submitButton = document.getElementById("submit");
    const resultContainer = document.getElementById("result");

    // Shuffle function for options
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function loadQuiz() {
        if (!quizContainer) return;
        quizContainer.innerHTML = "";
        quizData.forEach((quizItem, quizIndex) => {
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question");

            const questionTitle = document.createElement("h3");
            questionTitle.innerText = `${quizIndex + 1}. ${quizItem.question}`;
            questionDiv.appendChild(questionTitle);

            const optionsList = document.createElement("ul");
            optionsList.classList.add("options");

            const options = [...quizItem.options];
            shuffle(options);

            options.forEach(option => {
                const optionItem = document.createElement("li");
                const button = document.createElement("button");
                button.classList.add("option-button");
                button.innerText = option;
                button.addEventListener("click", () => selectOption(button, quizItem.correct));
                optionItem.appendChild(button);
                optionsList.appendChild(optionItem);
            });

            questionDiv.appendChild(optionsList);
            quizContainer.appendChild(questionDiv);
        });
    }

    function selectOption(optionElement, correctAnswer) {
        const siblings = optionElement.parentNode.parentNode.querySelectorAll(".option-button");
        siblings.forEach(sibling => sibling.classList.remove("correct", "incorrect"));

        if (optionElement.innerText === correctAnswer) {
            optionElement.classList.add("correct");
        } else {
            optionElement.classList.add("incorrect");
        }
    }

    function calculateScore() {
        const selectedOptions = document.querySelectorAll(".option-button.correct");
        const score = selectedOptions.length;
        if (resultContainer) {
            resultContainer.innerHTML = `You got ${score} out of ${quizData.length} correct!`;
        }
    }

    if (submitButton) {
        submitButton.addEventListener("click", calculateScore);
    }

    loadQuiz();
})();