const grid= document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20

//create indv block
class Block {
    constructor(xAxis, yAxis){
    this.bottomLeft = [xAxis,yAxis]
    this.bottomRight = [xAxis + blockWidth, yAxis]
    this.topLeft = [xAxis, yAxis + blockHeight]
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

//all blocks
const blocks =[
    new Block(10,270)
]


//draw block

function addBlocks(){
const block = document.createElement('div')
block.classList.add('block')
block.style.left = '100px'
block.style.bottom ='50px'
grid.appendChild(block)

}

addBlock()