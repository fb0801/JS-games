document.addEventListener('DOMContentLoaded', () => {

const squares = document.querySelectorAll('.grid div')
const timeLeft = document.querySelector('#time-left')
const result = document.querySelector('#result')
const startBtn = document.querySelector('#button')
const carsLeft = document.querySelector('.car-left')
const carsRight = document.querySelector('.car-right')
const logLeft = document.querySelector('.log-left')
const logRight = document.querySelector('.log-right')
const width = 9
let currentIndex = 76
let timerId


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
    carsLeft.foreach(carsLeft => moveCarLeft(carLeft))
    carsRight.foreach(carsRight => moveCarRight(carsRight))
}


//move Left
function moveCarLeft(carLeft){
    switch (true) {
        case carLeft.classList.contains('c1'):
            carLeft.classList.remove('c1')
            carLeft.classList.add('c2')
        case carLeft.classList.contains('c2'):
            carLeft.classList.remove('c2')
            carLeft.classList.add('c3')
        case carLeft.classList.contains('c3'):
            carLeft.classList.remove('c3')
            carLeft.classList.add('c1')
    }
}



//mve right

function moveCarLeft(carsRight){
    switch (true) {
        case carsRight.classList.contains('c1'):
            carsRight.classList.remove('c1')
            carsRight.classList.add('c2')
        case carsRight.classList.contains('c2'):
            carsRight.classList.remove('c2')
            carsRight.classList.add('c3')
        case carsRight.classList.contains('c3'):
            carsRight.classList.remove('c3')
            carsRight.classList.add('c1')
    }
}





























})