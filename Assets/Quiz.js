fetch('new_website\components\QuizData.json')
    .then(response => response.json())
    .then(data => {
        // Use the `data` object to populate your quiz
        console.log(data);
        loadQuiz(data); // Call your quiz logic function here
    })
    .catch(error => console.error('Error loading quiz data:', error));