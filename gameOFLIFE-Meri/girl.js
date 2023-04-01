let LivingCreature = require("./LivingCreature")
 module.exports = class Girl extends LivingCreature {
    constructor(x, y) {
       super(x,y)
        this.energy = 50;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {
        this.getNewCoordinates();
        return super.chooseCell(char)
    }
    

//ուտել
    eat() {
        let emptyCell = this.chooseCell(1);
        let newCell = emptyCell[Math.floor(Math.random*emptyCell.lenght)]
        if (newCell) {
            this.energy += 5;
            let newX = newCell[0];
            let newY = newCell[1];

            for (let i = 0; i < flowerArr.length; i++) {
                if (flowerArr[i].x == newX && flowerArr[i].y == newY) {
                    flowerArr.splice(i, 1)
                    break;
                }
            }

            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

        } 
        
        
        
        else {
            this.move()
        }
    }

    //քայլել
    move() {
        let emptyCell = this.chooseCell(0);
        let newCell = emptyCell[Math.floor(Math.random*emptyCell.lenght)]
        
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;

           
            this.x = newX;
            this.y = newY;

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        } 
    }
    



    die() {
        for (let i = 0; i < girlArr.length; i++) {
            if (girlArr[i].x == this.x && girlArr[i].y == this.y) {
                girlArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }
}