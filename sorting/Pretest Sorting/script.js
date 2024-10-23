function submitQuiz() {
    // Clear any previous explanations or boxes
    const explanations = document.querySelectorAll('.explanation');
    explanations.forEach(exp => exp.innerHTML = ""); // Clear existing explanations

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
        createBox(true, "Correct! The average time complexity of Insertion Sort is O(n²).", explanation1);
    } else {
        createBox(false, "Incorrect. The correct answer is b: O(n²).", explanation1);
    }

    // Question 2
    var q2 = document.querySelector('input[name="q2"]:checked');
    var explanation2 = document.getElementById("explanation2");
    if (q2 && q2.value === "a") {
        createBox(true, "Correct! Insertion Sort is stable and performs well for small datasets.", explanation2);
    } else {
        createBox(false, "Incorrect. The correct answer is a: It is stable and performs well for small datasets.", explanation2);
    }

    // Question 3
    var q3 = document.querySelector('input[name="q3"]:checked');
    var explanation3 = document.getElementById("explanation3");
    if (q3 && q3.value === "c") {
        createBox(true, "Correct! Insertion Sort is adaptive and efficient for nearly sorted data.", explanation3);
    } else {
        createBox(false, "Incorrect. The correct answer is c: It is adaptive and efficient for nearly sorted data.", explanation3);
    }

    // Question 4
    var q4 = document.querySelector('input[name="q4"]:checked');
    var explanation4 = document.getElementById("explanation4");
    if (q4 && q4.value === "d") {
        createBox(true, "Correct! Insertion Sort works well on linked lists due to its nature.", explanation4);
    } else {
        createBox(false, "Incorrect. The correct answer is d: It works well on linked lists.", explanation4);
    }

    // Question 5
    var q5 = document.querySelector('input[name="q5"]:checked');
    var explanation5 = document.getElementById("explanation5");
    if (q5 && q5.value === "a") {
        createBox(true, "Correct! Insertion Sort can sort data in place with low memory usage.", explanation5);
    } else {
        createBox(false, "Incorrect. The correct answer is a: It can sort data in place with low memory usage.", explanation5);
    }

    // Question 6
    var q6 = document.querySelector('input[name="q6"]:checked');
    var explanation6 = document.getElementById("explanation6");
    if (q6 && q6.value === "b") {
        createBox(true, "Correct! Insertion Sort has a worst-case time complexity of O(n²).", explanation6);
    } else {
        createBox(false, "Incorrect. The correct answer is b: O(n²).", explanation6);
    }

    // Question 7
    var q7 = document.querySelector('input[name="q7"]:checked');
    var explanation7 = document.getElementById("explanation7");
    if (q7 && q7.value === "c") {
        createBox(true, "Correct! Insertion Sort is based on the idea of building a sorted array one element at a time.", explanation7);
    } else {
        createBox(false, "Incorrect. The correct answer is c: It builds a sorted array one element at a time.", explanation7);
    }

    // Question 8
    var q8 = document.querySelector('input[name="q8"]:checked');
    var explanation8 = document.getElementById("explanation8");
    if (q8 && q8.value === "a") {
        createBox(true, "Correct! The main disadvantage of Insertion Sort is its average-case performance of O(n²).", explanation8);
    } else {
        createBox(false, "Incorrect. The correct answer is a: Its average-case performance is O(n²).", explanation8);
    }

    // Question 9
    var q9 = document.querySelector('input[name="q9"]:checked');
    var explanation9 = document.getElementById("explanation9");
    if (q9 && q9.value === "b") {
        createBox(true, "Correct! Insertion Sort is often used for small datasets and is easy to implement.", explanation9);
    } else {
        createBox(false, "Incorrect. The correct answer is b: It's easy to implement and efficient for small datasets.", explanation9);
    }

    // Question 10
    var q10 = document.querySelector('input[name="q10"]:checked');
    var explanation10 = document.getElementById("explanation10");
    if (q10 && q10.value === "b") {
        createBox(true, "Correct! Insertion Sort has a space complexity of O(1) since it sorts in place.", explanation10);
    } else {
        createBox(false, "Incorrect. The correct answer is b: Its space complexity is O(1) because it sorts in place.", explanation10);
    }
}
