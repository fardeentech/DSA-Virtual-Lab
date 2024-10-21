function submitQuiz() {
    // Clear previous explanations or boxes
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
    if (q1 && q1.value === "d") {
        createBox(true, "Correct! Binary Search is not a collision resolution technique.", explanation1);
    } else {
        createBox(false, "Incorrect. The correct answer is d: Binary Search is not a collision resolution technique.", explanation1);
    }

    // Question 2
    var q2 = document.querySelector('input[name="q2"]:checked');
    var explanation2 = document.getElementById("explanation2");
    if (q2 && q2.value === "a") {
        createBox(true, "Correct! Linear Probing resolves collisions by searching the next available slot in a circular manner.", explanation2);
    } else {
        createBox(false, "Incorrect. The correct answer is a: Linear Probing resolves collisions by searching the next available slot in a circular manner.", explanation2);
    }

    // Question 3
    var q3 = document.querySelector('input[name="q3"]:checked');
    var explanation3 = document.getElementById("explanation3");
    if (q3 && q3.value === "b") {
        createBox(true, "Correct! Separate Chaining uses linked lists to store multiple elements at the same index.", explanation3);
    } else {
        createBox(false, "Incorrect. The correct answer is b: Separate Chaining uses linked lists to store multiple elements at the same index.", explanation3);
    }

    // Question 4
    var q4 = document.querySelector('input[name="q4"]:checked');
    var explanation4 = document.getElementById("explanation4");
    if (q4 && q4.value === "b") {
        createBox(true, "Correct! Quadratic Probing resolves collisions by probing at intervals of squares (i.e., 1, 4, 9, etc.).", explanation4);
    } else {
        createBox(false, "Incorrect. The correct answer is b: Quadratic Probing resolves collisions by probing at intervals of squares.", explanation4);
    }

    // Question 5
    var q5 = document.querySelector('input[name="q5"]:checked');
    var explanation5 = document.getElementById("explanation5");
    if (q5 && q5.value === "b") {
        createBox(true, "Correct! Double hashing uses a secondary hash function to resolve collisions.", explanation5);
    } else {
        createBox(false, "Incorrect. The correct answer is b: Double hashing uses a secondary hash function.", explanation5);
    }

    // Question 6
    var q6 = document.querySelector('input[name="q6"]:checked');
    var explanation6 = document.getElementById("explanation6");
    if (q6 && q6.value === "c") {
        createBox(true, "Correct! The key problem associated with linear probing is primary clustering.", explanation6);
    } else {
        createBox(false, "Incorrect. The correct answer is c: The key problem associated with linear probing is primary clustering.", explanation6);
    }

    // Question 7
    var q7 = document.querySelector('input[name="q7"]:checked');
    var explanation7 = document.getElementById("explanation7");
    if (q7 && q7.value === "b") {
        createBox(true, "Correct! Linear Probing is most likely to lead to secondary clustering.", explanation7);
    } else {
        createBox(false, "Incorrect. The correct answer is b: Linear Probing is most likely to lead to secondary clustering.", explanation7);
    }

    // Question 8
    var q8 = document.querySelector('input[name="q8"]:checked');
    var explanation8 = document.getElementById("explanation8");
    if (q8 && q8.value === "c") {
        createBox(true, "Correct! Double Hashing provides the best distribution of keys to avoid collisions.", explanation8);
    } else {
        createBox(false, "Incorrect. The correct answer is c: Double Hashing provides the best distribution of keys to avoid collisions.", explanation8);
    }

    // Question 9
    var q9 = document.querySelector('input[name="q9"]:checked');
    var explanation9 = document.getElementById("explanation9");
    if (q9 && q9.value === "a") {
        createBox(true, "Correct! When a hash table using separate chaining becomes full, the table automatically resizes.", explanation9);
    } else {
        createBox(false, "Incorrect. The correct answer is a: The table automatically resizes when it becomes full.", explanation9);
    }
}