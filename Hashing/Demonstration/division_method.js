function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findNextPrime(num) {
    while (!isPrime(num)) {
        num++;
    }
    return num;
}

function hashFunction(key, nextprime) {
    return key % nextprime;
}

function insert(newarr, key, nextprime, indexDisplayCallback) {
    let index = hashFunction(key, nextprime);
    console.log(`Inserting Key: ${key} at Index: ${index}`);

    if (newarr[index] !== 0) {
        const collisionBox = document.getElementById(`box-${index}`);
        if (collisionBox) {
            collisionBox.style.backgroundColor = 'darkblue';
            collisionBox.textContent = `Index ${index}: Collision`;
        }
    }

    while (newarr[index] !== 0) {
        const collisionBox = document.getElementById(`box-${index}`);
        if (collisionBox) {
            collisionBox.style.backgroundColor = 'darkblue';
            collisionBox.textContent = `Index ${index}: Collision`;
        }
        index = (index + 1) % nextprime;
    }
    newarr[index] = key;

    indexDisplayCallback(key, nextprime, index);
}

function display(newarr, nextprime) {
    const hashTableDiv = document.getElementById("hashTable");
    hashTableDiv.innerHTML = '';

    for (let i = 0; i < nextprime; i++) {
        const box = document.createElement("div");
        box.classList.add("hashBox");
        box.id = `box-${i}`;

        if (newarr[i] !== 0) {
            box.textContent = `Index ${i}: ${newarr[i]}`;
            box.classList.add("highlight");
        } else {
            box.textContent = `Index ${i}: Empty`;
        }

        hashTableDiv.appendChild(box);
    }
}

document.getElementById("hashButton").addEventListener("click", function () {
    const arrayInput = document.getElementById("arrayInput").value;
    const keys = arrayInput.split(',').map(key => parseInt(key.trim())).filter(Number.isFinite);

    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const step3 = document.getElementById("step3");
    const step4 = document.getElementById("step4");

    step1.classList.add("active");

    setTimeout(() => {
        step1.classList.remove("active");
        step2.classList.add("active");

        const nextprime = findNextPrime(keys.length + 1);
        const newarr = new Array(nextprime).fill(0);
        document.getElementById("nextPrime").textContent = `Next Prime: ${nextprime}`;

        console.log(`Next Prime: ${nextprime}`);

        setTimeout(() => {
            step2.classList.remove("active");
            step3.classList.add("active");

            let insertionIndex = 0;

            function insertNext() {
                if (insertionIndex < keys.length) {
                    const key = keys[insertionIndex];
                    insert(newarr, key, nextprime, (key, nextprime, index) => {
                        const hashTableDiv = document.getElementById("hashTable");
                        const box = document.createElement("div");
                        box.classList.add("hashBox");
                        box.textContent = `${key} % ${nextprime} = ${hashFunction(key, nextprime)} (Stored at ${index})`;
                        box.classList.add("highlight");
                        hashTableDiv.appendChild(box);

                        setTimeout(() => {
                            box.remove();
                            insertionIndex++;
                            insertNext();
                        }, 2000);
                    });
                } else {
                    setTimeout(() => {
                        step3.classList.remove("active");
                        step4.classList.add("active");
                        display(newarr, nextprime);
                    }, 1000);
                }
            }

            insertNext();
        }, 1000);
    }, 1000);
});