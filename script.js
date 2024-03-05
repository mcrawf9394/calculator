let numOne = []
let numTwo = []
let operator = []
let display = []
let i = 0
let numOneWorkable
let displayNew
let calculatorText = document.getElementById('calculatorText')
calculatorText.textContent = "0"
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
        clear()
    }
    numTwo.length = 0
    display.push("=", numOneWorkable)
    displayNew = display.join("")
    calculatorText.textContent = displayNew
}
function clear (){
    numOne.length = 0
    numTwo.length = 0
    operator.length = 0
    display.length = 0
    numOneWorkable = 0
    i = 0
    calculatorText.textContent = "0"
}
const numButtons = document.querySelectorAll('.numButtons')
numButtons.forEach((numButton) => {
    numButton.addEventListener('click', () => numInputHandling(numButton.value)) 
})
function numInputHandling (value){
    if (operator.length == 0) {
        display.push(value)
        numOne.push(value)
        displayNew = display.join("")
        calculatorText.textContent = displayNew
    }
    if(operator.length >= 1) {
        display.push(value)
        numTwo.push(value)
        displayNew = display.join("")
        calculatorText.textContent = displayNew
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
        displayNew = display.join("")
        numOneWorkable = parseFloat(numOne.reduce((total, clickedNum) => {
            return total + clickedNum;
        }))
        i++
        calculatorText.textContent = displayNew
    }
    else if (value == "="){
        let numTwoWorkable = parseFloat(numTwo.reduce((total, clickedNum) => {
            return total + clickedNum;
        }))
        solve (numOneWorkable, operator [i-1], numTwoWorkable)
    }
    else if (value == "clear") {
        clear ()
    }
    else if(numTwo.length != 0) {
        let numTwoWorkable = parseFloat(numTwo.reduce((total, clickedNum) => {
            return total + clickedNum;
        }))
        operator.push(value)
        solve (numOneWorkable, operator [i-1], numTwoWorkable)
        i++
        display.push(value)
        displayNew = display.join("")
        calculatorText.textContent = displayNew
    }
    else{
        operator.push(value)
        i++
        display.push(value)
        displayNew = display.join("")
        calculatorText.textContent = displayNew
    }
    console.log(operator[i])
}