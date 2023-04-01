let LivingCreature = require("./LivingCreature")
module.exports = class Flower extends LivingCreature{
    constructor(x, y) {
       super(x,y)
        this.energy = 8;
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
    chooseCell(char,char1) {
        this.getNewCoordinates();
        return super.chooseCell(char);
    }
  
    //բազմանալ
    mul() {
        let emptyCell = this.chooseCell(0);
        let newCell = emptyCell[Math.floor(Math.random*emptyCell.lenght)]
   
        if (newCell && this.energy > 10) {
            let newX = newCell[0];
            let newY = newCell[1];

            let fl = new Flower(newX, newY);
            matrix[newY][newX] = 5;
            flowerArr.push(fl);

            this.energy = 8;
        }
    }


//ուտել
    eat() {
        let emptyCell = this.chooseCell(1);
        let newCell = emptyCell[Math.floor(Math.random*emptyCell.lenght)]
        if (newCell) {
            this.energy += 5;
            let newX = newCell[0];
            let newY = newCell[1];

            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                    break;
                }
            }

            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            if (this.energy > 30) {
                this.mul()
            }
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

            matrix[newY][newX] = 5;
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
        for (let i = 0; i < flowerArr.length; i++) {
            if (flowerArr[i].x == this.x && flowerArr[i].y == this.y) {
                flowerArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }
}