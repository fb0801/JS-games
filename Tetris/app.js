document.addEventListener('DOMContentLoaded', () => {


const grid = document.querySelector('.grid')
let squares = Array.from(grid.querySelectorAll('div'))
const width = 10
const height = 20
let currentPosition = 4

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
    current.forEach(index => {
        squares[currentPosition + index].classList.add('tetromino')
        //squares[currentPosition + index].style.backgroundColor =colors[random]
    })
}

//undraw the tetro
function undraw(){
    current.forEach(index =>{
        squares[currentPosition + index].classList.remove('tetromino')
        //squares[currentPosition + index].style.backgroundColor = ''

    })
}












})