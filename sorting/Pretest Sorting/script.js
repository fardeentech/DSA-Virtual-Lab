const questions = [
    {
        question: "What is the average time complexity of Insertion Sort?",
        options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
        correctAnswer: "O(n²)",
        explanation: "The average time complexity of Insertion Sort is O(n²)."
    },
    {
        question: "In which case does Insertion Sort perform the best?",
        options: ["When the array is randomly ordered", "When the array is sorted", "When the array is in reverse order", "When the array has many duplicate elements"],
        correctAnswer: "When the array is sorted",
        explanation: "Insertion Sort performs best when the array is already sorted."
    },
    {
        question: "Is Insertion Sort adaptive?",
        options: ["No", "Yes", "Only for reverse sorted arrays", "Only for random arrays"],
        correctAnswer: "Yes",
        explanation: "Insertion Sort is adaptive and works efficiently on nearly sorted data."
    },
    {
        question: "What is the space complexity of Insertion Sort?",
        options: ["O(1)", "O(n)", "O(n log n)", "O(n²)"],
        correctAnswer: "O(1)",
        explanation: "Insertion Sort is an in-place algorithm with a space complexity of O(1)."
    },
    {
        question: "Is Insertion Sort a stable sorting algorithm?",
        options: ["Yes", "No", "Depends on the implementation", "Depends on the data"],
        correctAnswer: "Yes",
        explanation: "Insertion Sort is stable, meaning it preserves the relative order of equal elements."
    },
    {
        question: "Which type of data structure does Insertion Sort work well on?",
        options: ["Binary trees", "Linked lists", "Stacks", "Graphs"],
        correctAnswer: "Linked lists",
        explanation: "Insertion Sort is efficient when used with linked lists."
    },
    {
        question: "What is the worst-case time complexity of Insertion Sort?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
        correctAnswer: "O(n²)",
        explanation: "The worst-case time complexity of Insertion Sort occurs when the data is in reverse order, and it is O(n²)."
    },
    {
        question: "Which of the following is a disadvantage of Insertion Sort?",
        options: ["It uses additional memory", "It has poor average-case performance", "It is difficult to implement", "It is not adaptive"],
        correctAnswer: "It has poor average-case performance",
        explanation: "One of the disadvantages of Insertion Sort is its O(n²) average-case performance."
    },
    {
        question: "What is the best-case time complexity of Insertion Sort?",
        options: ["O(n log n)", "O(log n)", "O(n²)", "O(n)"],
        correctAnswer: "O(n)",
        explanation: "The best-case time complexity of Insertion Sort is O(n), which occurs when the data is already sorted."
    },
    {
        question: "Is Insertion Sort an in-place sorting algorithm?",
        options: ["Yes", "No", "Depends on the data size", "Depends on the implementation"],
        correctAnswer: "Yes",
        explanation: "Insertion Sort sorts data in place, requiring no additional memory."
    },
    {
        question: "In which scenario is Insertion Sort most efficient?",
        options: ["Large datasets", "Nearly sorted datasets", "Randomly ordered datasets", "Reverse ordered datasets"],
        correctAnswer: "Nearly sorted datasets",
        explanation: "Insertion Sort is highly efficient for nearly sorted datasets due to its adaptive nature."
    },
    {
        question: "Which sorting algorithm is best compared with Insertion Sort for small datasets?",
        options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
        correctAnswer: "Bubble Sort",
        explanation: "Bubble Sort and Insertion Sort are both simple algorithms that are used for small datasets."
    },
    {
        question: "What is a key characteristic of Insertion Sort?",
        options: ["It is non-adaptive", "It works with linked lists", "It is not stable", "It requires O(n log n) memory"],
        correctAnswer: "It works with linked lists",
        explanation: "One key characteristic of Insertion Sort is that it works well with linked lists."
    },
    {
        question: "How does Insertion Sort process elements?",
        options: ["By splitting and merging", "By comparing and swapping", "By building a sorted array one element at a time", "By comparing against the median"],
        correctAnswer: "By building a sorted array one element at a time",
        explanation: "Insertion Sort works by building a sorted array one element at a time, inserting each element in its correct position."
    },
    {
        question: "What is the main advantage of Insertion Sort?",
        options: ["Its O(n²) performance", "Its simplicity and efficiency for small datasets", "Its high memory usage", "Its ability to parallelize easily"],
        correctAnswer: "Its simplicity and efficiency for small datasets",
        explanation: "Insertion Sort's main advantage is its simplicity and efficiency for small datasets."
    },
    {
        question: "Does Insertion Sort use recursion?",
        options: ["Yes", "No", "Only in certain implementations", "Depends on the data size"],
        correctAnswer: "No",
        explanation: "Insertion Sort is an iterative algorithm and does not use recursion."
    },
    {
        question: "Which part of an array is sorted in Insertion Sort after each pass?",
        options: ["The entire array", "The right half", "The left half", "A growing portion from the start"],
        correctAnswer: "A growing portion from the start",
        explanation: "In Insertion Sort, after each pass, the left portion of the array (a growing portion from the start) is sorted."
    },
    {
        question: "Which type of algorithm is Insertion Sort?",
        options: ["Divide and conquer", "Greedy", "Dynamic programming", "Comparison-based"],
        correctAnswer: "Comparison-based",
        explanation: "Insertion Sort is a comparison-based sorting algorithm."
    },
    {
        question: "What happens in each iteration of Insertion Sort?",
        options: ["The array is split and merged", "The largest element is placed at the correct position", "One element is inserted into its correct position", "The smallest element is placed at the end of the array"],
        correctAnswer: "One element is inserted into its correct position",
        explanation: "In each iteration, one element is inserted into its correct position in the sorted portion of the array."
    },
    {
        question: "In which situation is Insertion Sort inefficient?",
        options: ["Small datasets", "Nearly sorted data", "Large random datasets", "Data with duplicates"],
        correctAnswer: "Large random datasets",
        explanation: "Insertion Sort is inefficient for large random datasets due to its O(n²) time complexity."
    }
]
// Function to shuffle array (Fisher-Yates shuffle)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to display 5 random questions
function displayRandomQuestions() {
    const quizContainer = document.getElementById("quizForm");
    quizContainer.innerHTML = ""; // Clear previous questions

    shuffle(questions); // Shuffle the questions array
    const selectedQuestions = questions.slice(0, 5); // Select the first 5 questions after shuffle

    selectedQuestions.forEach((q, index) => {
        const questionHTML = `
            <div class="question">
                <p>${index + 1}. ${q.question}</p>
                ${q.options.map((option, i) => `<label><input type="radio" name="q${index + 1}" value="${option}"> ${option}</label><br>`).join('')}
                <div id="explanation${index + 1}" class="explanation"></div>
            </div>
        `;
        quizContainer.innerHTML += questionHTML;
    });

    quizContainer.innerHTML += `<button type="button" class="submit-button" onclick="submitQuiz()">Submit</button>`;
}

// Call the function to display random questions when the page loads
window.onload = displayRandomQuestions;

// Function to handle quiz submission
function submitQuiz() {
    const explanations = document.querySelectorAll('.explanation');
    explanations.forEach(exp => exp.innerHTML = ""); // Clear existing explanations

    const selectedQuestions = questions.slice(0, 5); // The same 5 selected questions
    
    selectedQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index + 1}"]:checked`);
        const explanationElement = document.getElementById(`explanation${index + 1}`);
        if (selectedOption && selectedOption.value === q.correctAnswer) {
            createBox(true, `Correct! ${q.explanation}`, explanationElement);
        } else {
            createBox(false, `Incorrect. The correct answer is: ${q.correctAnswer}. ${q.explanation}`, explanationElement);
        }
    });
}

function createBox(isCorrect, message, explanationElement) {
    const box = document.createElement('div');
    box.classList.add(isCorrect ? 'correct-box' : 'incorrect-box', 'explanation-box');
    box.textContent = message;
    explanationElement.appendChild(box);
}