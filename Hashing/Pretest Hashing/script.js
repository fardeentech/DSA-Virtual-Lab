function submitQuiz() {
    // Clear any previous explanations or boxes
    const explanations = document.querySelectorAll('.explanation-box');
    explanations.forEach(exp => exp.remove());

    function createBox(isCorrect, message, explanationElement) {
        const box = document.createElement('div');
        box.classList.add(isCorrect ? 'correct-box' : 'incorrect-box', 'explanation-box');
        box.textContent = message;
        explanationElement.appendChild(box);
    }

    // Question 1
    var q1 = document.querySelector('input[name="q1"]:checked');
    var explanation1 = document.getElementById("explanation1");
    if (q1 && q1.value === "c") {
        createBox(true, "Correct! Hashing maps data of any size to a fixed-size value.", explanation1);
    } else {
        createBox(false, "Incorrect. The correct answer is c: Hashing maps data of any size to a fixed size.", explanation1);
    }

    // Question 2
    var q2 = document.querySelector('input[name="q2"]:checked');
    var explanation2 = document.getElementById("explanation2");
    if (q2 && q2.value === "c") {
        createBox(true, "Correct! A good hash function should be fast to compute.", explanation2);
    } else {
        createBox(false, "Incorrect. The correct answer is c: A good hash function should be fast and easy to compute.", explanation2);
    }

    // Question 3
    var q3 = document.querySelector('input[name="q3"]:checked');
    var explanation3 = document.getElementById("explanation3");
    if (q3 && q3.value === "a") {
        createBox(true, "Correct! A hash collision occurs when two inputs produce the same hash value.", explanation3);
    } else {
        createBox(false, "Incorrect. The correct answer is a: A hash collision occurs when two inputs produce the same hash value.", explanation3);
    }

    // Question 4
    var q4 = document.querySelector('input[name="q4"]:checked');
    var explanation4 = document.getElementById("explanation4");
    if (q4 && q4.value === "b") {
        createBox(true, "Correct! SHA-256 is a cryptographic hash function widely used for security.", explanation4);
    } else {
        createBox(false, "Incorrect. The correct answer is b: SHA-256 is a cryptographic hash function.", explanation4);
    }

    // Question 5
    var q5 = document.querySelector('input[name="q5"]:checked');
    var explanation5 = document.getElementById("explanation5");
    if (q5 && q5.value === "c") {
        createBox(true, "Correct! Good hash functions always produce fixed-size outputs.", explanation5);
    } else {
        createBox(false, "Incorrect. The correct answer is c: Good hash functions always produce fixed-size outputs.", explanation5);
    }

    // Question 6
    var q6 = document.querySelector('input[name="q6"]:checked');
    var explanation6 = document.getElementById("explanation6");
    if (q6 && q6.value === "b") {
        createBox(true, "Correct! Pre-image resistance means it’s difficult to find the input from the hash output.", explanation6);
    } else {
        createBox(false, "Incorrect. The correct answer is b: Pre-image resistance means it’s difficult to find the input from the hash output.", explanation6);
    }

    // Question 7
    var q7 = document.querySelector('input[name="q7"]:checked');
    var explanation7 = document.getElementById("explanation7");
    if (q7 && q7.value === "b") {
        createBox(true, "Correct! SHA-256 is stronger in terms of security compared to MD5 and SHA-1.", explanation7);
    } else {
        createBox(false, "Incorrect. The correct answer is b: SHA-256 is the strongest in terms of security.", explanation7);
    }

    // Question 8
    var q8 = document.querySelector('input[name="q8"]:checked');
    var explanation8 = document.getElementById("explanation8");
    if (q8 && q8.value === "c") {
        createBox(true, "Correct! Hash functions are not reversible.", explanation8);
    } else {
        createBox(false, "Incorrect. The correct answer is c: Hash functions are not reversible.", explanation8);
    }

    // Question 9
    var q9 = document.querySelector('input[name="q9"]:checked');
    var explanation9 = document.getElementById("explanation9");
    if (q9 && q9.value === "b") {
        createBox(true, "Correct! Double hashing applies the same hash function twice.", explanation9);
    } else {
        createBox(false, "Incorrect. The correct answer is b: Double hashing applies the same hash function twice to the same input.", explanation9);
    }

    // Question 10
    var q10 = document.querySelector('input[name="q10"]:checked');
    var explanation10 = document.getElementById("explanation10");
    if (q10 && q10.value === "d") {
        createBox(true, "Correct! Chaining and quadratic probing are common techniques for handling hash collisions.", explanation10);
    } else {
        createBox(false, "Incorrect. The correct answer is d: Both chaining and quadratic probing are used to handle collisions.", explanation10);
    }
}