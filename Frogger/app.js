document.addEventListener('DOMContentLoaded', () => {

const squares = document.querySelectorAll('.grid div')
const timeLeft = document.querySelector('#time-left')
const result = document.querySelector('#result')
const startBtn = document.querySelector('#button')
const carsLeft = document.querySelectorAll('.car-left')
const carsRight = document.querySelectorAll('.car-right')
const logsLeft = document.querySelectorAll('.log-left')
const logsRight = document.querySelectorAll('.log-right')
const width = 9
let currentIndex = 76
let timerId
let currentTime  = 20


//render frog on starting block
squares[currentIndex].classList.add('frog')

//move frog
function moveFrog(e){
    squares[currentIndex].classList.remove('frog')
    switch (e.keyCode) {
        case 37:
            if(currentIndex % width != 0) currentIndex -=1
            break;
        case 38:
            if(currentIndex - width >=0) currentIndex -= width
            break
        case 39:
            if(currentIndex % width < width -1) currentIndex +=1
            break
        case 40:
            if(currentIndex + width < width * width) currentIndex += width
            break
    }
    squares[currentIndex].classList.add('frog')
    lose()
    win()
}

//move car
function autoMoveCar(){
    carsLeft.foreach(carsLeft => moveCarLeft(carsLeft))
    carsRight.foreach(carsRight => moveCarRight(carsRight))
}


//move Left
function moveCarLeft(carLeft){
    switch (true) {
        case carLeft.classList.contains('c1'):
            carLeft.classList.remove('c1')
            carLeft.classList.add('c2')
            break
        case carLeft.classList.contains('c2'):
            carLeft.classList.remove('c2')
            carLeft.classList.add('c3')
            break
        case carLeft.classList.contains('c3'):
            carLeft.classList.remove('c3')
            carLeft.classList.add('c1')
            break
    }
}



//mve right

function moveCarRight(carsRight){
    switch (true) {
        case carsRight.classList.contains('c1'):
            carsRight.classList.remove('c1')
            carsRight.classList.add('c3')
            break
        case carsRight.classList.contains('c2'):
            carsRight.classList.remove('c2')
            carsRight.classList.add('c1')
            break
        case carsRight.classList.contains('c3'):
            carsRight.classList.remove('c3')
            carsRight.classList.add('c2')
            break
    }
}


//move logs
function autoMoveLogs(){
    logsLeft.foreach(logLeft => moveLogLeft(logLeft))
    logsRight.foreach(logRight => moveLogLeft(logRight))
}

//move Left
function moveLogLeft(logLeft){
    switch (true) {
        case logLeft.classList.contains('l1'):
            logLeft.classList.remove('l1')
            logLeft.classList.add('l2')
            break
        case logLeft.classList.contains('l2'):
            logLeft.classList.remove('l2')
            logLeft.classList.add('l3')
            break
        case logLeft.classList.contains('l3'):
            logLeft.classList.remove('l3')
            logLeft.classList.add('l4')
            break
        case logLeft.classList.contains('l4'):
            logLeft.classList.remove('l4')
            logLeft.classList.add('l5')
            break
        case logLeft.classList.contains('l5'):
            logLeft.classList.remove('l5')
            logLeft.classList.add('l`')
            break
    }
}


//mve right

function moveLogRight(logRight){
    switch (true) {
        case logRight.classList.contains('l1'):
            logRight.classList.remove('l1')
            logRight.classList.add('l5')
            break
        case logRight.classList.contains('l2'):
            logRight.classList.remove('l2')
            logRight.classList.add('l1')
            break
        case logRight.classList.contains('l3'):
            logRight.classList.remove('l3')
            logRight.classList.add('l2')
            break
        case logRight.classList.contains('l4'):
            logRight.classList.remove('l4')
            logRight.classList.add('l3')
            break 
        case logRight.classList.contains('l5'):
            logRight.classList.remove('l5')
            logRight.classList.add('l4') 
            break
    }
}


//to win frogger

function win (){
    if (squares[4].classList.contains('frog')){
        result.innerHTML = 'YOU WIN!!'
        squares[currentIndex].classList.remove('frog')
        clearInterval(timerId)
        document.removeEventListener('keyup', moveFrog)
    }
}


//lose
function lose () {
    if ((currentTime === 0) || (squares[currentIndex].classList.contains('c1'))
    ||(squares[currentIndex].classList.contains('l5'))
    || (squares[currentIndex].classList.contains('l4'))) {
        result.innerHTML = "YOU LOSE!"
        squares[currentIndex].classList.remove('frog')
        clearInterval.removeEventListener('keyup', moveFrog)
    }
}


//move frog when on log
function moveWithLogLeft(){
    if(currentIndex >= 27 && currentIndex < 35){
        squares[currentIndex].classList.remove('frog')
        currentIndex +=1 
        squares[currentIndex].classList.add('frog')
    }
}


//move frog when on log
function moveWithLogRight(){
    if(currentIndex > 18 && currentIndex <= 26){
        squares[currentIndex].classList.remove('frog')
        currentIndex -=1 
        squares[currentIndex].classList.add('frog')
    }
}

//all func piece
function movePiece(){
    currentTime--
    timeLeft.textContent = currentTime
    autoMoveCar()
    autoMoveLogs()
    moveWithLogLeft()
    moveWithLogRight()
    lose()
}

//start and pause
startBtn.addEventListener('click', () => {
    if(timerId) {
        clearInterval(timerId)
    } else{
        timerId = setInterval(movePiece, 1000)
        document.addEventListener('keyup', moveFrog)
    }
})

})