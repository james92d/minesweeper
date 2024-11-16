class Game {
    constructor() {
        this.rows = 16;
        this.cols = 30;
        this.totalMines = 99;
        this.mines = 0;
        this.gameBoard = Array.from({ length: rows }, () =>
            Array.from({ length: cols }, () => 0)
        );
    }

    populateMines() {
        
    }

}
