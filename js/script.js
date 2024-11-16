
let rows = 16;
let cols = 30;
let totalMines = 99;
let minesCount = 0;
let minePositions = [];
let minePng = "../assets/mine.png"

let gameBoard = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => 0)
);

function getRandIndex(num) {
    return Math.floor(Math.random() * num);
}

while (minesCount <= totalMines) {
    let pos = [getRandIndex(rows), getRandIndex(cols)];

    if (!minePositions.includes(pos)) {
        minePositions.push(pos);
        gameBoard[pos[0]][pos[1]] = -1;
        minesCount++;
    }
}

function calculateSurroundingMines(i, j) {
    if (gameBoard[i][j] === -1) { return -1 }
    let count = 0;
    if (i !== 0) {
        if (j !== 0) { 
            if (gameBoard[i - 1][j - 1] === -1) { count++ } 
        }
        if (gameBoard[i - 1][j] === -1) { count++ }
        if (j !== cols - 1) {
            if (gameBoard[i - 1][j + 1] === -1) { count++ }
        }
    }
    if (j !== 0) {
        if (gameBoard[i][j - 1] === -1) { count++ }
    }
    if (j !== cols - 1) {
        if (gameBoard[i][j + 1] === -1) { count++ }
    }
    if (i !== rows - 1) {
        if (j !== 0) {
            if (gameBoard[i + 1][j - 1] === -1) { count++ }
        }
        if (gameBoard[i + 1][j] === -1) { count++ }
        if (j !== cols - 1) {
            if (gameBoard[i + 1][j + 1] === -1) { count++ }
        }
    }
    return count;
}

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        gameBoard[i][j] = calculateSurroundingMines(i, j);
    }
}

let gameContainer = document.getElementById('game-container');
let table = document.createElement('table');

gameContainer.appendChild(table);

gameBoard.forEach((row, rowIndex) => {
    const tr = document.createElement('tr');

    row.forEach(cell => {
      const td = document.createElement('td');
      if (cell === -1) {
        td.className = "no" + cell.toString();
        td.textContent = "";
      } else if (cell === 0) {
        td.textContent = "";
      } else {
        td.className = "no" + cell.toString();
        td.textContent = cell;
      }
      tr.appendChild(td);
    });

    table.appendChild(tr);
});




