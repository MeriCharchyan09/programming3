let LivingCreature = require("./LivingCreature")
module.exports = class Fairy extends LivingCreature {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
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


//բազմանալ
mul() {
    let emptyCell = this.chooseCell(0);
    let newCell = random(emptyCell)
console.log(newCell);
    if (newCell && this.energy > 15) {
        let newX = newCell[0];
        let newY = newCell[1];

        let fr = new Fairy(newX, newY);
        matrix[newY][newX] = 4;
        fairyArr.push(fr);

        this.energy = 10;
    }
}

chooseCell(char,char1) {
    this.getNewCoordinates();
    return super.chooseCell(char);
}

//ուտել
eat() {
    let emptyCell = this.chooseCell(3);
    let newCell = random(emptyCell)

    if (newCell) {
        this.energy += 5;
        let newX = newCell[0];
        let newY = newCell[1];

        for (let i = 0; i  < predatorArr.length; i++) {
            if (predatorArr[i].x == newX && predatorArr[i].y == newY) {
                predatorArr.splice(i, 1)
                break;
            }
        }

        matrix[newY][newX] = 4;
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
    let newCell = random(emptyCell)

    if (newCell) {
        let newX = newCell[0];
        let newY = newCell[1];

        matrix[newY][newX] = 4;
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
    for (let i = 0; i < fairyArr.length; i++) {
        if (fairyArr[i].x == this.x && fairyArr[i].y == this.y) {
            fairyArr.splice(i, 1)
        }
    }
    matrix[this.y][this.x] = 0;
}
}











