// Correct answers for each question
const correctAnswers = {
    q1: 'b',
    q2: 'a',
    q3: 'a',
    q4: 'b',
    q5: 'a',
    q6: 'b',
    q7: 'a',
    q8: 'b',
    q9: 'b',
    q10: 'c'
};

// Function to submit the quiz
function submitQuiz() {
    const form = document.getElementById('quizForm');
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    // Loop through each question
    for (let question in correctAnswers) {
        const selectedOption = form[question].value;
        const explanationDiv = document.getElementById(`explanation${question.slice(1)}`);

        // Clear previous explanation
        explanationDiv.innerHTML = '';

        // Check if the selected option is correct
        if (selectedOption === correctAnswers[question]) {
            score++;
            explanationDiv.innerHTML = `<p style="color: green;">Correct!</p>`;
        } else {
            // Provide the correct answer explanation
            explanationDiv.innerHTML = `<p style="color: red;">Incorrect! The correct answer is <strong>${correctAnswers[question]}</strong>.</p>`;
        }
    }

    // Display the total score
    alert(`You scored ${score} out of ${totalQuestions}`);
}
