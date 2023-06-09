document.addEventListener('DOMContentLoaded', () => {


const grid = document.querySelector('.grid')
const displaySquares = document.querySelectorAll('.previous-grid div')
const startBtn = document.querySelector('button')
const scoreDisplay = document.querySelector('.score-display')
const lineDisplay = document.querySelector('.lines-display')
let squares = Array.from(grid.querySelectorAll('div'))
const width = 10
const height = 20
let currentPosition = 4
let timerId
let score = 0
let lines = 0
let currentIndex =0

//assign func to key
function control(e){
    if(e.keycode ==37){
        moveLeft()
    } else if (e.keycode ===38){
        rotate()
    } else if(e.keycode ===39){
        moveRight()
    }else if(e.keycode ===40){
        moveDown
    }
}
document.addEventListener('keyup', control)

//tetromines the shapes
const lTetromino =[
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1,width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]

]

const zTetromino = [
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1],
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1]

]

const tTetromino = [
    [1,width,width+1, width+2],
    [1,width+1,width+2,width*2+1],
    [width, width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
]

const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
   
    
]

const iTetromino = [
    [1,width+1,width*2+1],
    [width, width+1,width+2, width+3],
    [1, width+1, width*2+1, width*3+1],
    [width,width+1,width+2,width+3]


]


const theTetrominoes = [iTetromino,oTetromino,tTetromino, zTetromino,lTetromino]
let random = (Math.random()*theTetrominoes.length)
let currentRotation = 0
let current = theTetrominoes[random][currentRotation]//randomly select a tetro and rotate



//draw the tetro
function draw(){
    current.forEach(index => (
        squares[currentPosition + index].classList.add('block')
        //squares[currentPosition + index].style.backgroundColor =colors[random]
    ))
}

//undraw the tetro
function undraw(){
    current.forEach(index =>(
        squares[currentPosition + index].classList.remove('block')
        //squares[currentPosition + index].style.backgroundColor = ''

    ))
}

//move dwn func
function moveDown(){
    undraw()//removes the shape
    currentPosition +=width
    draw()//draws the shape
    freeze()
}

//move tetro right
function moveRight(){
    undraw()
    const isAtRightEdge = current.some(index =>(currentPosition + index) % width === width - 1)


    if(!isAtRightEdge) currentPosition +=1

    if(current.some(index => squares[currentPosition + index].classList.contains('block2'))){
        currentPosition -=1

    }
    draw()
}

//move the tetro lft when condition is met
function moveLeft(){
    undraw()
    const isAtLeftEdge = current.some(index =>(currentPosition + index) % width ===0)

    if(!isAtLeftEdge) currentPosition -=1

    if(current.some(index => squares[currentPosition + index].classList.contains('block2'))){
    currentPosition +=1
}
draw()
}

//rotate the tetro
function rotate(){
    undraw()
    currentRotation ++

    if (currentRotation === current.length){
        //if the shape is 4 goes back to 0
        currentRotation = 0
    }
    current = theTetrominoes[random][currentRotation]
    draw()
}

const displayWidth = 4
const displayIndex =0
let nextRandom = 0

const smallTetrominoes = [
    [1, displayWidth+1, displayWidth*2+1, 2],
    [0, displayWidth, displayWidth+1, displayWidth*2+1],
    [1,displayWidth,displayWidth+1, displayWidth+2],
    [0,1,displayWidth,displayWidth+1],
    [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1]
]

function displayShape() {
    displaySquares.foreach(square => {
        square.classList.remove('block')
    })
    smallTetrominoes[nextRandom].foreach( index => {
        displaySquares[displayIndex + index].classList.add('block')
    })
}

//freeze func
function freeze(){
    if(current.some(index => squares[currentPosition + index + width].classList.contains('block')
    || squares[currentPosition + index + width].classList.contains('block2'))){
        current.forEach(index => squares[currentPosition + index].classList.add('block2'))
        //start a new tetro
        random= nextRandom
        nextRandom = Math.floor(Math.random() * theTetrominoes.length)
        current = theTetrominoes[random][currentRotation]
        currentPosition = 4
        draw()
        displayShape()
        addScore()
        gameOver()
    }
}

// function to start
startBtn.addEventListener('click', () => {
    if(timerId){
        clearInterval(timerId)
        timerId=null
    }else{
        draw()
        timerId = setInterval(moveDown,1000)
        nextRandom =Math.floor(Math.random() * theTetrominoes.length)
        displayShape()
    }
})

//game over function
function gameOver(){
    if(current.some(index =>squares[currentPosition + index].classList.contains('block2'))){
        scoreDisplay.innerHTML ='END'
        clearInterval(timerId)
    }
}

//add score
function addScore(){
    for(currentIndex =0; currentIndex<199;i+=width){
        const row =[currentIndex,currentIndex+1,currentIndex+2,currentIndex+3,
            currentIndex+4, currentIndex+5,currentIndex+6,currentIndex+7,currentIndex+8,currentIndex+9]

        if(row.every(index => squares[index].classList.contains('block2'))){
            score+=10
            lines +=1
            scoreDisplay.innerHTML =score
            lineDisplay.innerHTML = lines
            row.foreach(index => {
                squares[index].classList.remove('block2') || squares[index].classList.remove('block')
            })
            const squaresRemoved = squares.splice(currentIndex,width)
            squares = squaresRemoved.concat(squares)
            squares.foreach(cell => grid.appendChild(cell))
        }
    }
}

})