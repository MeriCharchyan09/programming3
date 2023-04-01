// function matrixGenerator(matrixSize,grass,grassEater,predator,fairy, flower, girl) {
//     var matrix = []

//     for (let i = 0; i < matrixSize; i++) {
//         matrix.push([])
//         for (let j = 0; j < matrixSize; j++) {
//         matrix[i].push(0)
        
//         }
//     }


//     for (let i = 0; i < grass; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 1
        
//     }

//     for (let i = 0; i < grassEater; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 2
        
//     }
    


//     for (let i = 0; i < predator; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 3

        
//     }


//     for (let i = 0; i < fairy; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 4

//     }

//     for (let i = 0; i < flower; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 5

//     }
//     for (let i = 0; i < girl; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 6

//     }

//     return matrix
// }

// var matrix = matrixGenerator(30,40,15,5,5,8)
var side = 25

const socket = io()
// var grassArr = []
// var grassEaterArr = []
// var predatorArr = [] 
// var fairyArr = []
// var flowerArr = []
// var girlarr = []


function setup() {
   
    createCanvas(30* side ,30* side)

//     for (let y = 0; y < matrix.length; y++) {
//         for (let x = 0; x < matrix[y].length; x++) {
       
//            if(matrix[y][x] == 1){
//                 var gr = new Grass(x,y)
//                 grassArr.push(gr)
//            }else  if(matrix[y][x] == 2){
//             var grEat = new GrassEater(x,y)
//             grassEaterArr.push(grEat)
//            }else if(matrix[y][x] == 3){
//             var pred = new Predator(x,y)
//                 predatorArr.push(pred)
//             }else if(matrix[y][x] == 4){
//                 var fairy = new Fairy(x,y)
//                 fairyArr.push(fairy)
//             }else if(matrix[y][x] == 5){
//                 var flower = new Flower(x,y)
//                 flowerArr.push(flower)
//             }else if(matrix[y][x] == 6){
//                 var girl = new Girl(x,y)
//                 girlArr.push(girl)
//             }
//            }
//         }
        
    }



function changeColor(matrix) {
    
      for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
          
                if(matrix[y][x] == 1){
                     fill ("green")
                }else if (matrix[y][x] == 2){
                         fill ("yellow")
                }else if(matrix[y][x] == 3){
                             fill ("red")
                }else if(matrix[y][x] == 4){
                                 fill("light blue")
                }else if(matrix[y][x] == 5){
                                     fill("purple")
                }else if(matrix[y][x] == 6){
                                         fill("white")
                }else{
                    fill ("gray")
                }
                rect (x * side , y * side ,side,side)
        }
          
      }

//       for(let i in  grassArr){
//             grassArr[i].mul()
//       }

//       for(let i in  grassEaterArr){
//         grassEaterArr[i].eat()
        
//   }

//      for(let i in predatorArr){
//          predatorArr[i].eat()
//      }

//      for(let i in fairyArr){
//          fairyArr[i].eat()
//      }

//      for(let i in flowerArr){
//          flowerArr[i].eat()
//      }
//      for(let i in girlArr){
//         girlArr[i].eat()
//     }
}

socket.on('send matrix' , changeColor);