const hashTableSize = 10;
const keysToHash = [35, 22, 13, 47, 30];
const hashTableContainer = document.getElementById('hash-table-container');

function createHashTable() {
    for (let i = 0; i < hashTableSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('hash-cell');
        cell.id = `cell-${i}`;
        cell.innerHTML = `Index ${i}`;
        hashTableContainer.appendChild(cell);
    }
}

function hashDivisionMethod(key) {
    return key % hashTableSize;
}

function highlightCell(index) {
    const cell = document.getElementById(`cell-${index}`);
    cell.classList.add('active');
    setTimeout(() => {
        cell.classList.remove('active');
    }, 1000);
}

function startHashing() {
    let delay = 0;
    keysToHash.forEach((key, idx) => {
        const hashValue = hashDivisionMethod(key);
        setTimeout(() => {
            highlightCell(hashValue);
            document.getElementById(`cell-${hashValue}`).innerHTML = `Index ${hashValue} (Key: ${key})`;
        }, delay);
        delay += 1500;
    });
}

// Initialize the hash table on page load
createHashTable();
