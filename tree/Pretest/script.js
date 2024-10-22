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
        createBox(true, "Correct! A linked list is a collection of elements stored in non-contiguous memory locations.", explanation1);
    } else {
        createBox(false, "Incorrect. The correct answer is b: A linked list is a collection of elements stored in non-contiguous memory locations.", explanation1);
    }

    // Question 2
    var q2 = document.querySelector('input[name="q2"]:checked');
    var explanation2 = document.getElementById("explanation2");
    if (q2 && q2.value === "c") {
        createBox(true, "Correct! A linked list requires extra memory for pointers.", explanation2);
    } else {
        createBox(false, "Incorrect. The correct answer is c: A linked list requires extra memory for pointers.", explanation2);
    }

    // Question 3
    var q3 = document.querySelector('input[name="q3"]:checked');
    var explanation3 = document.getElementById("explanation3");
    if (q3 && q3.value === "a") {
        createBox(true, "Correct! A singly linked list is where each node points to the next node.", explanation3);
    } else {
        createBox(false, "Incorrect. The correct answer is a: A singly linked list is where each node points to the next node.", explanation3);
    }

    // Question 4
    var q4 = document.querySelector('input[name="q4"]:checked');
    var explanation4 = document.getElementById("explanation4");
    if (q4 && q4.value === "b") {
        createBox(true, "Correct! In a doubly linked list, each node contains two pointers.", explanation4);
    } else {
        createBox(false, "Incorrect. The correct answer is b: In a doubly linked list, each node contains two pointers to the next and previous nodes.", explanation4);
    }

    // Question 5
    var q5 = document.querySelector('input[name="q5"]:checked');
    var explanation5 = document.getElementById("explanation5");
    if (q5 && q5.value === "b") {
        createBox(true, "Correct! Inserting a node at the beginning of a linked list has a time complexity of O(1).", explanation5);
    } else {
        createBox(false, "Incorrect. The correct answer is b: O(1) for inserting at the beginning.", explanation5);
    }

    // Question 6
    var q6 = document.querySelector('input[name="q6"]:checked');
    var explanation6 = document.getElementById("explanation6");
    if (q6 && q6.value === "c") {
        createBox(true, "Correct! Accessing an element is typically more complex in a linked list compared to an array.", explanation6);
    } else {
        createBox(false, "Incorrect. The correct answer is c: Accessing an element is more complex in a linked list.", explanation6);
    }

    // Question 7
    var q7 = document.querySelector('input[name="q7"]:checked');
    var explanation7 = document.getElementById("explanation7");
    if (q7 && q7.value === "b") {
        createBox(true, "Correct! When you delete a node, the pointers must be adjusted.", explanation7);
    } else {
        createBox(false, "Incorrect. The correct answer is b: The pointers must be adjusted when a node is deleted.", explanation7);
    }

    // Question 8
    var q8 = document.querySelector('input[name="q8"]:checked');
    var explanation8 = document.getElementById("explanation8");
    if (q8 && q8.value === "d") {
        createBox(true, "Correct! You can find the length of a linked list by traversing or using a recursive function.", explanation8);
    } else {
        createBox(false, "Incorrect. The correct answer is d: You can find the length by traversing or using recursion.", explanation8);
    }

    // Question 9
    var q9 = document.querySelector('input[name="q9"]:checked');
    var explanation9 = document.getElementById("explanation9");
    if (q9 && q9.value === "b") {
        createBox(true, "Correct! The main advantage of using a linked list over an array is its dynamic size.", explanation9);
    } else {
        createBox(false, "Incorrect. The correct answer is b: The dynamic size is an advantage of linked lists.", explanation9);
    }

    // Question 10
    var q10 = document.querySelector('input[name="q10"]:checked');
    var explanation10 = document.getElementById("explanation10");
    if (q10 && q10.value === "b") {
        createBox(true, "Correct! The tail of a linked list is the last node in the list.", explanation10);
    } else {
        createBox(false, "Incorrect. The correct answer is b: The tail of a linked list is the last node.", explanation10);
    }
}
