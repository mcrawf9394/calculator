let numOne = []
let numTwo = []
let operator = []
let display = []
let i = 0
function addition (a,b){
    return a+b;
}
function subtraction(a,b){
    return a-b;
}
function division (a,b){
    return a/b;
}
function multiplication (a,b){
    return a*b;
}
function solve (a,b,c) {

}
const numButtons = document.querySelectorAll('.numButtons')
numButtons.forEach((numButton) => {
    numButton.addEventListener('click', () => numInputHandling(numButton.value)) 
})
function numInputHandling (value){
    if (operator.length == 0) {
        display.push(value)
        numOne.push(value)
    }
    if(operator.length >= 1) {
        display.push(value)
        numTwo.push(value)
    }
}
const operatorNums = document.querySelectorAll('.operatorButtons')
operatorNums.forEach((operatorNum) => {
    operatorNum.addEventListener('click', () => operatorInputHandling(operatorNum.value))
})
function operatorInputHandling (value){
    if ((operator.length >= 1) || (value = "=")) {
        let numOneWorkable = parseFloat(numOne.reduce((total, clickedNum) => {
            return total + clickedNum;
        }))
        let numTwoWorkable = parseFloat(numTwo.reduce((total, clickedNum) => {
            return total + clickedNum;
        }))
        i++
        solve (numOneWorkable, operator [i-1], numTwoWorkable)
    }
    else {
        display.push(value)
        operator.push(value)
        i++
    }
    console.log(operator)
}