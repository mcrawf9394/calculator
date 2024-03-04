let numOne = []
let numTwo = []
let operator = []
let display = []
let i = 0
let numOneWorkable
function solve (a,b,c) {
    if (b == "+"){
        numOneWorkable = a + c
    }
    else if (b == "-") {
        numOneWorkable = a - c;
    }
    else if (b == "/") {
        numOneWorkable = a / c;
    }
    else if (b == "*"){
        numOneWorkable = a * c;
    }
    else {
        alert("Something went wrong here! Clearing calculator!")
        
    }
    numTwo.length = 0
    display.push("=", numOneWorkable)
    console.log(display)
    console.log(b)
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
    if (operator.length == 0) {
        display.push(value)
        operator.push(value)
        numOneWorkable = parseFloat(numOne.reduce((total, clickedNum) => {
            return total + clickedNum;
        }))
    }
    else if (value = "="){
        let numTwoWorkable = parseFloat(numTwo.reduce((total, clickedNum) => {
            return total + clickedNum;
        }))
        solve (numOneWorkable, operator [i], numTwoWorkable)
    }
    else  {
        let numTwoWorkable = parseFloat(numTwo.reduce((total, clickedNum) => {
            return total + clickedNum;
        }))
        solve (numOneWorkable, operator [i], numTwoWorkable)
        i++
        operator.push(value)
    }
    console.log(operator[i])
}