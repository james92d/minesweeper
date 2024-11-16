class Utils {
    static rows;
    static height;
    
    static delay = 100;

    static setSizesGame() {
        let windowSize = window.innerWidth;
        Utils.screenWidth = windowSize > 620 ? 600 : Math.floor((windowSize - 20) / 50) * 50;
        Utils.size = Utils.screenWidth / 20;
        Utils.width = Math.floor(Utils.screenWidth / Utils.size);
        Utils.height = Math.floor(Utils.width * 0.6);
    }

    static setSizesCSS() {
        const style = document.createElement('style');
        style.innerHTML = `
            .snake-body-part { width: ${this.size}px; height: ${this.size}px; }
            .food { width: ${this.size}px; height: ${this.size}px; }
            #game-container {width: ${this.size * this.width}px;  height: ${this.size * this.height}px;}
        `;
        document.head.appendChild(style);
    }

    static position(pos) {
        return pos * Utils.size;
    } 

    static getRandomPos(range) {
        return Math.floor(Math.random() * range) * Utils.size;
    }
}

export default Utils;