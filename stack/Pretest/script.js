// Correct answers for each question
const correctAnswers = {
    q1: 'b', // A collection of elements that follows the LIFO principle
    q2: 'c', // Push
    q3: 'a', // pop()
    q4: 'a', // O(1)
    q5: 'b', // The last node in the list
    q6: 'd', // All of the above
    q7: 'b', // Cannot access arbitrary elements
    q8: 'a', // Stacks follow LIFO, queues follow FIFO
    q9: 'b', // Pile of books
    q10: 'b' // The stack throws an underflow error
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
            explanationDiv.innerHTML = "<span style='color: green;'>Correct!</span>";
        } else {
            explanationDiv.innerHTML = `<span style='color: red;'>Incorrect! The correct answer is ${correctAnswers[question]}.</span>`;
        }
    }

    // Display the total score
    alert(`Your score is ${score} out of ${totalQuestions}`);
}
