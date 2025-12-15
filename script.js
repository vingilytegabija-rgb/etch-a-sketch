const container = document.getElementById("container");
const resetButton = document.getElementById("reset");


function createGrid(size = 16) {
    container.innerHTML = ''; 
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

       
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });

        container.appendChild(cell);
    }
}

resetButton.addEventListener('click', () => {
    let newSize = prompt("Enter new grid size (max 100):", 16);
    newSize = parseInt(newSize);
    if (newSize && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Invalid size, please enter a number between 1 and 100.");
    }
});

createGrid();
