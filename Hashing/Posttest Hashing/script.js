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
    if (q1 && q1.value === "b") {
        createBox(true, "Correct! The primary purpose of a hash function is to create a unique identifier for data.", explanation1);
    } else {
        createBox(false, "Incorrect. The correct answer is b: To create a unique identifier for data.", explanation1);
    }

    // Question 2
    var q2 = document.querySelector('input[name="q2"]:checked');
    var explanation2 = document.getElementById("explanation2");
    if (q2 && q2.value === "b") {
        createBox(true, "Correct! A cryptographic hash function produces a fixed-size output.", explanation2);
    } else {
        createBox(false, "Incorrect. The correct answer is b: It produces a fixed-size output.", explanation2);
    }

    // Question 3
    var q3 = document.querySelector('input[name="q3"]:checked');
    var explanation3 = document.getElementById("explanation3");
    if (q3 && q3.value === "a") {
        createBox(true, "Correct! The load factor refers to the ratio of filled slots to total slots in a hash table.", explanation3);
    } else {
        createBox(false, "Incorrect. The correct answer is a: The ratio of the number of filled slots to the total number of slots.", explanation3);
    }

    // Question 4
    var q4 = document.querySelector('input[name="q4"]:checked');
    var explanation4 = document.getElementById("explanation4");
    if (q4 && q4.value === "b") {
        createBox(true, "Correct! A good hash function should be easy to compute but difficult to invert.", explanation4);
    } else {
        createBox(false, "Incorrect. The correct answer is b: They should be easy to compute but difficult to invert.", explanation4);
    }

    // Question 5
    var q5 = document.querySelector('input[name="q5"]:checked');
    var explanation5 = document.getElementById("explanation5");
    if (q5 && q5.value === "b") {
        createBox(true, "Correct! Digital signatures are a common application of hash functions.", explanation5);
    } else {
        createBox(false, "Incorrect. The correct answer is b: Digital signatures.", explanation5);
    }

    // Question 6
    var q6 = document.querySelector('input[name="q6"]:checked');
    var explanation6 = document.getElementById("explanation6");
    if (q6 && q6.value === "b") {
        createBox(true, "Correct! A deterministic hash function produces the same output for the same input every time.", explanation6);
    } else {
        createBox(false, "Incorrect. The correct answer is b: It produces the same output for the same input every time.", explanation6);
    }

    // Question 7
    var q7 = document.querySelector('input[name="q7"]:checked');
    var explanation7 = document.getElementById("explanation7");
    if (q7 && q7.value === "c") {
        createBox(true, "Correct! Sensitivity to input changes is essential for ensuring data integrity.", explanation7);
    } else {
        createBox(false, "Incorrect. The correct answer is c: Sensitivity to input changes.", explanation7);
    }
}
