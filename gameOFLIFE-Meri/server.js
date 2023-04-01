var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);

function matrixGenerator(matrixSize, grass, grassEater, predator, fairy, flower, girl) {
    var matrix = []

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)

        }
    }


    for (let i = 0; i < grass; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 1

    }

    for (let i = 0; i < grassEater; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 2

    }



    for (let i = 0; i < predator; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 3


    }


    for (let i = 0; i < fairy; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 4

    }

    for (let i = 0; i < flower; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 5

    }
    for (let i = 0; i < girl; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 6

    }
    io.emit("send matrix", matrix)
    return matrix
}

matrix = matrixGenerator(30, 40, 15, 5, 5, 8)
grassArr = []
grassEaterArr = []
predatorArr = []
fairyArr = []
flowerArr = []
girlArr = []

const Grass = require("./grass")
const GrassEater = require("./grassEater")
const Predator = require("./predator")
const Fairy = require("./fairy")
const Flower = require("./flower")
const Girl = require("./girl")

function crateobj() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y)
                predatorArr.push(pred)
            } else if (matrix[y][x] == 4) {
                var fairy = new Fairy(x, y)
                fairyArr.push(fairy)
            } else if (matrix[y][x] == 5) {
                var flower = new Flower(x, y)
                flowerArr.push(flower)
            } else if (matrix[y][x] == 6) {
                var girl = new Girl(x, y)
                girlArr.push(girl)
            }
        }
    }
    io.emit("send matrix", matrix)


}
crateobj()


function gameMove() {
  
    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()

    }

    for (let i in predatorArr) {
        predatorArr[i].eat()
    }

    for (let i in fairyArr) {
        fairyArr[i].eat()
    }

    for (let i in flowerArr) {
        flowerArr[i].eat()
    }
    for (let i in girlArr) {
        girlArr[i].eat()
    }
    io.emit("send matrix", matrix)
}
setInterval(gameMove, 1000)