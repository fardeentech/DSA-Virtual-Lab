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
    if (q1 && q1.value === "a") {
        createBox(true, "Correct! The average time complexity of Quick Sort is O(n log n).", explanation1);
    } else {
        createBox(false, "Incorrect. The correct answer is a: O(n log n).", explanation1);
    }

    // Question 2
    var q2 = document.querySelector('input[name="q2"]:checked');
    var explanation2 = document.getElementById("explanation2");
    if (q2 && q2.value === "a") {
        createBox(true, "Correct! Merge Sort is stable and has a worst-case time complexity of O(n log n).", explanation2);
    } else {
        createBox(false, "Incorrect. The correct answer is a: Merge Sort.", explanation2);
    }

    // Question 3 - Updated for post-test context
    var q3 = document.querySelector('input[name="q3"]:checked');
    var explanation3 = document.getElementById("explanation3");
    if (q3 && q3.value === "b") {
        createBox(true, "Correct! Insertion Sort is stable and efficient for small data sets.", explanation3);
    } else {
        createBox(false, "Incorrect. The correct answer is b: It is stable and efficient for small data sets.", explanation3);
    }

    // Question 4
    var q4 = document.querySelector('input[name="q4"]:checked');
    var explanation4 = document.getElementById("explanation4");
    if (q4 && q4.value === "c") {
        createBox(true, "Correct! Radix Sort is not a comparison-based sorting algorithm.", explanation4);
    } else {
        createBox(false, "Incorrect. The correct answer is c: Radix Sort is not a comparison-based sort.", explanation4);
    }

    // Question 5
    var q5 = document.querySelector('input[name="q5"]:checked');
    var explanation5 = document.getElementById("explanation5");
    if (q5 && q5.value === "b") {
        createBox(true, "Correct! Insertion Sort performs well on nearly sorted data.", explanation5);
    } else {
        createBox(false, "Incorrect. The correct answer is b: Insertion Sort performs well on nearly sorted data.", explanation5);
    }

    // Question 6
    var q6 = document.querySelector('input[name="q6"]:checked');
    var explanation6 = document.getElementById("explanation6");
    if (q6 && q6.value === "c") {
        createBox(true, "Correct! The worst-case time complexity of Bubble Sort is O(n²).", explanation6);
    } else {
        createBox(false, "Incorrect. The correct answer is c: O(n²).", explanation6);
    }

    // Question 7
    var q7 = document.querySelector('input[name="q7"]:checked');
    var explanation7 = document.getElementById("explanation7");
    if (q7 && q7.value === "b") {
        createBox(true, "Correct! Quick Sort divides the array into smaller subarrays.", explanation7);
    } else {
        createBox(false, "Incorrect. The correct answer is b: Quick Sort divides the array into smaller subarrays.", explanation7);
    }

    // Question 8
    var q8 = document.querySelector('input[name="q8"]:checked');
    var explanation8 = document.getElementById("explanation8");
    if (q8 && q8.value === "a") {
        createBox(true, "Correct! Selection Sort is not stable.", explanation8);
    } else {
        createBox(false, "Incorrect. The correct answer is a: It is not stable.", explanation8);
    }

    // Question 9
    var q9 = document.querySelector('input[name="q9"]:checked');
    var explanation9 = document.getElementById("explanation9");
    if (q9 && q9.value === "c") {
        createBox(true, "Correct! Merge Sort is typically used for sorting linked lists.", explanation9);
    } else {
        createBox(false, "Incorrect. The correct answer is c: Merge Sort is typically used for sorting linked lists.", explanation9);
    }

    // Question 10
    var q10 = document.querySelector('input[name="q10"]:checked');
    var explanation10 = document.getElementById("explanation10");
    if (q10 && q10.value === "b") {
        createBox(true, "Correct! Heap Sort uses a heap data structure.", explanation10);
    } else {
        createBox(false, "Incorrect. The correct answer is b: Using a heap data structure.", explanation10);
    }
}
