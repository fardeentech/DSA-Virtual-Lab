// Questions database: 5 buckets, each containing 5 questions
const questionsDB = [
    // Bucket 1
    [
        {
            question: "Q. What is the main purpose of hashing?",
            options: ["Encryption", "Data compression", "Mapping data of any size to a fixed size", "Sorting"],
            correct: 2,
            explanation: "Hashing maps data of any size to a fixed size."
        },
        {
            question: "Q. What is a common characteristic of a good hash function?",
            options: ["Always produces different outputs for different inputs", "Collides frequently", "Is fast and easy to compute", "Produces variable-length outputs"],
            correct: 2,
            explanation: "A good hash function is fast and easy to compute."
        },
        {
            question: "Q. What is a hash collision?",
            options: ["Two inputs produce the same hash value", "When a hash function is not reversible", "A hash function that returns different outputs for different inputs", "A secure hashing algorithm"],
            correct: 0,
            explanation: "A hash collision occurs when two inputs produce the same hash value."
        },
        {
            question: "Q. Which of the following is a cryptographic hash function?",
            options: ["MD5", "SHA-256", "CRC32", "LZW"],
            correct: 1,
            explanation: "SHA-256 is a cryptographic hash function widely used in security protocols."
        },
        {
            question: "Q. Which of the following is NOT a property of a good hash function?",
            options: ["Deterministic", "Minimizes collisions", "Produces outputs of varying sizes", "Efficient to compute"],
            correct: 2,
            explanation: "A good hash function produces fixed-size outputs."
        }
    ],
    // Bucket 2
    [
        {
            question: "Q. What does the term 'pre-image resistance' mean in hashing?",
            options: ["It's impossible to find two different inputs with the same hash", "It's difficult to find the input from the hash output", "The function is fast", "It's impossible to reverse a hash"],
            correct: 1,
            explanation: "Pre-image resistance means it's difficult to find the input given a hash output."
        },
        {
            question: "Q. Which of the following hash functions is the strongest in terms of security?",
            options: ["SHA-1", "SHA-256", "MD5", "SHA-0"],
            correct: 1,
            explanation: "SHA-256 is considered the strongest among these hash functions."
        },
        {
            question: "Q. Which of the following statements about hash functions is false?",
            options: ["A hash function always produces a fixed-size output", "Hash functions can be used to store passwords securely", "Hash functions are always reversible", "Hash functions help ensure data integrity"],
            correct: 2,
            explanation: "Hash functions are not reversible."
        },
        {
            question: "Q. What is double hashing?",
            options: ["Using two different hash functions for security", "Applying the same hash function twice to the same input", "Using two rounds of hashing for key distribution", "Using a hash function for compression"],
            correct: 1,
            explanation: "Double hashing applies the same hash function twice to the same input for security."
        },
        {
            question: "Q. In hash tables, what is the typical solution to handle hash collisions?",
            options: ["Use a larger hash size", "Chaining", "Quadratic probing", "Both b and c"],
            correct: 3,
            explanation: "Chaining and quadratic probing are common methods to handle hash collisions."
        }
    ],
    // Bucket 3
    [
        {
            question: "Q. What is the output size of the SHA-256 hash function?",
            options: ["128 bits", "256 bits", "512 bits", "64 bits"],
            correct: 1,
            explanation: "SHA-256 produces a 256-bit hash value."
        },
        {
            question: "Q. What property of a hash function makes it suitable for digital signatures?",
            options: ["Collisions are frequent", "It’s impossible to reverse the hash", "It is fast", "It generates random data"],
            correct: 1,
            explanation: "A good hash function for digital signatures must be non-reversible."
        },
        {
            question: "Q. What is the primary use of a hash function in password storage?",
            options: ["To encrypt the password", "To hash the password and store the hash", "To compress the password", "To store the password in plain text"],
            correct: 1,
            explanation: "Hashing is used to securely store password hashes instead of plain passwords."
        },
        {
            question: "Q. What is the purpose of salt in password hashing?",
            options: ["To add extra randomness to the hash", "To make the hash smaller", "To reverse the hash", "To speed up the hashing process"],
            correct: 0,
            explanation: "Salt adds randomness to the password hash to make it harder to crack."
        },
        {
            question: "Q. What is meant by 'collision resistance' in a hash function?",
            options: ["It’s impossible to find two different inputs with the same hash", "It’s impossible to reverse the hash", "It’s difficult to find the input from the hash output", "It’s fast to compute"],
            correct: 0,
            explanation: "Collision resistance means it's hard to find two different inputs that result in the same hash."
        }
    ],
    // Bucket 4
    [
        {
            question: "Q. What is a common use of hash functions in blockchain?",
            options: ["Encrypting transactions", "Linking blocks together", "Storing wallet addresses", "Mining cryptocurrency"],
            correct: 1,
            explanation: "Hash functions link blocks together in blockchain by ensuring the integrity of data."
        },
        {
            question: "Q. Which of the following is an advantage of using hash functions in digital forensics?",
            options: ["Secures data", "Ensures integrity of evidence", "Encrypts digital evidence", "Compresses data for storage"],
            correct: 1,
            explanation: "Hash functions help ensure the integrity of digital evidence in forensics."
        },
        {
            question: "Q. What is 'avalanche effect' in hashing?",
            options: ["A small change in input leads to a large change in output", "Inputs with similar values have similar hashes", "Hash function generates random values", "Hash function fails under heavy load"],
            correct: 0,
            explanation: "The avalanche effect refers to a small change in input causing a large change in the hash output."
        },
        {
            question: "Q. What does the 'birthday attack' relate to in hashing?",
            options: ["Cracking a hash by brute force", "Finding hash collisions using probabilistic methods", "Encrypting data with hash functions", "Securing passwords"],
            correct: 1,
            explanation: "The birthday attack exploits the probability of hash collisions to break hash functions."
        },
        {
            question: "Q. Which of the following algorithms is considered outdated for cryptographic hashing?",
            options: ["SHA-256", "MD5", "SHA-512", "SHA-3"],
            correct: 1,
            explanation: "MD5 is considered outdated due to vulnerabilities and frequent collisions."
        }
    ],
    // Bucket 5
    [
        {
            question: "Q. Which hashing algorithm is most commonly used in Bitcoin?",
            options: ["MD5", "SHA-256", "SHA-1", "CRC32"],
            correct: 1,
            explanation: "SHA-256 is used in Bitcoin for block generation and mining."
        },
        {
            question: "Q. What is the typical use of hash functions in file integrity checks?",
            options: ["To verify that the file has not been altered", "To compress the file", "To encrypt the file", "To speed up file transfer"],
            correct: 0,
            explanation: "Hash functions are used to ensure that a file has not been altered during transmission."
        },
        {
            question: "Q. What is the main reason for using a cryptographic hash function in digital certificates?",
            options: ["To encrypt the certificate", "To verify the certificate’s authenticity", "To compress the certificate data", "To ensure the certificate can be reversed"],
            correct: 1,
            explanation: "Cryptographic hashes are used to verify the authenticity of digital certificates."
        },
        {
            question: "Q. How does the hash function help in password authentication?",
            options: ["It encrypts passwords", "It compares the hash of the entered password with the stored hash", "It stores passwords securely in plain text", "It compresses passwords for faster authentication"],
            correct: 1,
            explanation: "Password authentication systems compare the hash of an entered password with the stored hash."
        },
        {
            question: "Q. Why are hash functions not suitable for encryption?",
            options: ["Because they cannot be reversed", "Because they generate random data", "Because they are slow", "Because they are too large"],
            correct: 0,
            explanation: "Hash functions are one-way and cannot be reversed, making them unsuitable for encryption."
        }
    ]
];

// Global array to store selected questions for consistent explanation display
let selectedQuestions = [];

function loadRandomQuestions() {
    const quizForm = document.getElementById('quizForm');
    quizForm.innerHTML = ''; // Clear the form
    selectedQuestions = []; // Reset selected questions array

    // Pick one random question from each bucket and add to selectedQuestions
    for (let i = 0; i < 5; i++) {
        const bucket = questionsDB[i];
        const randomIndex = Math.floor(Math.random() * bucket.length);
        selectedQuestions.push(bucket[randomIndex]); // Store selected question for later use
    }

    // Render questions in the quiz form
    selectedQuestions.forEach((questionObj, index) => {
        const questionHTML = `
            <div class="question">
                <p>${questionObj.question}</p>
                ${questionObj.options.map((option, i) => `
                    <label><input type="radio" name="q${index}" value="${i}"> ${option}</label><br>
                `).join('')}
                <div id="explanation${index}" class="explanation" style="display:none; color:white;"></div>
            </div>
        `;
        quizForm.insertAdjacentHTML('beforeend', questionHTML);
    });
}

// Function to check answers and display results
function submitQuiz() {
    const quizForm = document.getElementById('quizForm');

    // Iterate over selectedQuestions to check answers and show explanations
    selectedQuestions.forEach((questionObj, index) => {
        const selectedOption = quizForm.querySelector(`input[name="q${index}"]:checked`);
        const explanationDiv = document.getElementById(`explanation${index}`);
        explanationDiv.innerHTML = ''; // Clear previous explanation

        if (selectedOption) {
            if (parseInt(selectedOption.value) === questionObj.correct) {
                selectedOption.parentElement.style.color = "green";
                explanationDiv.innerHTML = "Correct! " + questionObj.explanation;
                explanationDiv.classList.add("correct");
                explanationDiv.classList.remove("incorrect");
            } else {
                selectedOption.parentElement.style.color = "red";
                explanationDiv.innerHTML = "Incorrect. The correct answer is " +
                    questionObj.options[questionObj.correct] + ": " + questionObj.explanation;
                explanationDiv.classList.add("incorrect");
                explanationDiv.classList.remove("correct");
            }
        } else {
            explanationDiv.classList.add("incorrect");
            explanationDiv.innerHTML = "You didn't select an answer!";
        }
        explanationDiv.style.display = "block";
    });
}

// Event listeners for buttons
document.getElementById('submitBtn').addEventListener('click', submitQuiz);
document.getElementById('refreshBtn').addEventListener('click', loadRandomQuestions);

// Initial load
window.onload = loadRandomQuestions;
