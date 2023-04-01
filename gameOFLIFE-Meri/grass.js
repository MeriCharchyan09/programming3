let LivingCreature = require("./LivingCreature")
module.exports = class Grass extends LivingCreature {



    mul() {
        this.multiply++
        let emptyCell = this.chooseCell(0)
        let newCell = emptyCell[Math.floor(Math.random*emptyCell.lenght)]
      
        if (this.multiply >= 8 && newCell) {
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = 1

            var gr = new Grass(newX, newY)

            grassArr.push(gr)

            this.multiply = 0


        }
    }
}