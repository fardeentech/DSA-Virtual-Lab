const questionsDB = [
    [
    {
        question: "1. What is the primary reason for using hash functions in digital signatures?",
        options: ["Speed of computation", "Ensuring data integrity", "Encrypting data", "Data compression"],
        correct: 1,
        explanation: "Hash functions ensure the integrity of the data by providing a unique hash value."
    },
    {
        question: "2. What property of a cryptographic hash function makes it resistant to pre-image attacks?",
        options: ["Fixed output size", "One-way function", "Randomness of the output", "Efficiency of computation"],
        correct: 1,
        explanation: "A cryptographic hash function is one-way, making it difficult to reverse-engineer the input from the hash."
    },
    {
        question: "3. Which cryptographic attack tries to find two different inputs that result in the same hash?",
        options: ["Brute-force attack", "Birthday attack", "Dictionary attack", "Man-in-the-middle attack"],
        correct: 1,
        explanation: "The birthday attack is used to find hash collisions by exploiting probability."
    },
    {
        question: "4. What is the typical output length of the SHA-3 (Keccak) hash function in bits?",
        options: ["160", "224", "256", "512"],
        correct: 2,
        explanation: "SHA-3 (Keccak) typically has a 256-bit output."
    },
    {
        question: "5. Which of the following uses hashing for data integrity verification during transmission?",
        options: ["HTTPS", "SHA-256", "HMAC", "TLS"],
        correct: 2,
        explanation: "HMAC (Hash-based Message Authentication Code) ensures data integrity during transmission."
    },
],
    // Bucket 2
    [
    {
        question: "6. Why is adding salt to a password before hashing recommended?",
        options: ["It speeds up the hashing process", "It ensures unique hash values for identical passwords", "It reverses the hash", "It compresses the password"],
        correct: 1,
        explanation: "Salt makes sure that identical passwords have unique hash values, protecting against rainbow table attacks."
    },
    {
        question: "7. Which hash function is considered weak and susceptible to collisions?",
        options: ["SHA-256", "SHA-512", "MD5", "SHA-3"],
        correct: 2,
        explanation: "MD5 is considered weak because it is vulnerable to collision attacks."
    },
    {
        question: "8. What does the term 'hash chain' refer to in blockchain technology?",
        options: ["A sequence of encrypted transactions", "A chain of hashes linking blocks together", "A method of password encryption", "A method of mining cryptocurrencies"],
        correct: 1,
        explanation: "In blockchain, a hash chain links blocks together by including the hash of the previous block."
    },
    {
        question: "9. In hash tables, what is a common method for resolving collisions?",
        options: ["Re-hashing", "Double hashing", "Chaining", "All of the above"],
        correct: 3,
        explanation: "Re-hashing, double hashing, and chaining are all methods used to handle hash table collisions."
    },
    {
        question: "10. Which of the following is a use case for cryptographic hash functions?",
        options: ["Securing HTTP communication", "File integrity checks", "Data compression", "Wireless communication encryption"],
        correct: 1,
        explanation: "Cryptographic hash functions are widely used in file integrity checks."
    },
],
    // Bucket 3
    [
    {
        question: "11. What is the role of 'salt' in password hashing?",
        options: ["To increase hash size", "To slow down brute-force attacks", "To allow easy decryption", "To make hashes faster to compute"],
        correct: 1,
        explanation: "Salt is used to slow down brute-force attacks by adding unique data to each hash."
    },
    {
        question: "12. What does it mean for a hash function to have collision resistance?",
        options: ["It generates random values", "It’s impossible to reverse-engineer the hash", "It’s difficult to find two inputs that produce the same hash", "It can process large files quickly"],
        correct: 2,
        explanation: "Collision resistance means it is hard to find two different inputs that produce the same hash output."
    },
    {
        question: "13. What is the purpose of a hash digest?",
        options: ["To compress data", "To verify the integrity of data", "To encrypt data", "To encode data for transmission"],
        correct: 1,
        explanation: "A hash digest is used to verify the integrity of data, ensuring it has not been altered."
    },
    {
        question: "14. Which of the following hashing algorithms is used in Bitcoin mining?",
        options: ["SHA-1", "SHA-256", "MD5", "CRC32"],
        correct: 1,
        explanation: "SHA-256 is used in Bitcoin for mining and block creation."
    },
    {
        question: "15. What is 'rainbow table attack' in the context of hashing?",
        options: ["A brute-force attack on passwords", "An attack that uses precomputed hash values to crack passwords", "An attack using hash collisions", "A type of cryptographic side-channel attack"],
        correct: 1,
        explanation: "A rainbow table attack uses precomputed hash values to crack passwords quickly."
    },
],
    // Bucket 4
    [
    {
        question: "16. Which of these is not a valid use case for a hash function?",
        options: ["Password storage", "Data compression", "File integrity checks", "Digital signatures"],
        correct: 1,
        explanation: "Hash functions are not used for data compression; they are used for password storage, integrity checks, and digital signatures."
    },
    {
        question: "17. What is the key advantage of using hash functions for digital evidence in forensic investigations?",
        options: ["It makes evidence more secure", "It allows reversible encryption", "It ensures the integrity of evidence", "It speeds up the investigation process"],
        correct: 2,
        explanation: "Hash functions help ensure that digital evidence has not been tampered with by providing a unique hash for the data."
    },
    {
        question: "18. Which property of hash functions makes them ideal for data integrity verification?",
        options: ["Efficiency", "Collision resistance", "Fixed output size", "One-way property"],
        correct: 1,
        explanation: "Collision resistance ensures that hash functions are ideal for verifying data integrity."
    },
    {
        question: "19. What is the avalanche effect in hashing?",
        options: ["A small change in input causes a large change in output", "The hash function becomes slower with larger inputs", "The hash function becomes faster over time", "The hash produces identical outputs for similar inputs"],
        correct: 0,
        explanation: "The avalanche effect means that even a small change in the input results in a drastically different hash output."
    },
    {
        question: "20. Which of the following is true about cryptographic hash functions?",
        options: ["They can be easily reversed", "They are used for encrypting data", "They always produce the same hash for a given input", "They generate random-length outputs"],
        correct: 2,
        explanation: "A cryptographic hash function will always produce the same hash for a given input."
    }
]
];


let selectedQuestions = []; // Store selected questions for consistency

function loadRandomQuestions() {
    const quizForm = document.getElementById('quizForm');
    quizForm.innerHTML = ''; // Clear the form
    selectedQuestions = []; // Reset selected questions

    for (let i = 0; i < 5; i++) {
        const bucket = questionsDB[i % questionsDB.length];
        const randomIndex = Math.floor(Math.random() * bucket.length);
        const questionObj = bucket[randomIndex];
        selectedQuestions.push(questionObj);

        const questionHTML = `
            <div class="question">
                <p>${questionObj.question}</p>
                ${questionObj.options.map((option, j) => `
                    <label><input type="radio" name="q${i}" value="${j}"> ${option}</label><br>
                `).join('')}
                <div id="explanation${i}" class="explanation" style="display:none;"></div>
            </div>
        `;
        quizForm.insertAdjacentHTML('beforeend', questionHTML);
    }
}

function submitQuiz() {
    selectedQuestions.forEach((questionObj, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        const explanationDiv = document.getElementById(`explanation${index}`);
        explanationDiv.innerHTML = ''; // Clear previous explanation

        if (selectedOption) {
            if (parseInt(selectedOption.value) === questionObj.correct) {
                explanationDiv.classList.add("correct");
                explanationDiv.classList.remove("incorrect");
                explanationDiv.innerHTML = "Correct! " + questionObj.explanation;
            } else {
                explanationDiv.classList.add("incorrect");
                explanationDiv.classList.remove("correct");
                explanationDiv.innerHTML = "Incorrect. The correct answer is " + questionObj.options[questionObj.correct] + ": " + questionObj.explanation;
            }
        } else {
            explanationDiv.classList.add("incorrect");
            explanationDiv.innerHTML = "You didn't select an answer!";
        }
        explanationDiv.style.display = "block";
    });
}

// Event listeners for the buttons
document.getElementById('submitBtn').addEventListener('click', submitQuiz);
document.getElementById('refreshBtn').addEventListener('click', loadRandomQuestions);

// Initial load
window.onload = loadRandomQuestions;