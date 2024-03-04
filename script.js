const nums = []
const inputs = []
const operators = []
const numButtonsContainer = document.getElementById('numButtons')
const operatorButtonsContainer = document.getElementById('operators')
const display = []
let displayJoin = display.join(' ')
const textDisplay = document.createElement('h2')
textDisplay.textContent = displayJoin
const calculator = document.getElementById('calculator')
calculator.appendChild(textDisplay)
for (i = 7; i <= 9; i++) {
    const button = document.createElement('button')
    button.textContent = i
    button.className = "numButtonsOne"
    button.value = i
    numButtonsContainer.appendChild(button)
    button.addEventListener('click', function () {
    inputs.push(button.value)
        })
    }
for (j = 4; j <= 6; j++) {
    const button = document.createElement('button')
    button.textContent = j
    button.className = "numButtonsTwo"
    button.value = j
    numButtonsContainer.appendChild(button)
    button.addEventListener('click', function () {
    inputs.push(button.value)
         })
    }
for (k = 1; k <= 3; k++) {
    const button = document.createElement('button')
    button.textContent = k
    button.className = "numButtonsThree"
    button.value = k
    numButtonsContainer.appendChild(button)
    button.addEventListener('click', function () {
    inputs.push(button.value)
    display.push(button.value)
        })
    }
const zero = document.createElement('button')
zero.textContent = 0
zero.className = "numButtonsFour"
zero.value = 0
numButtonsContainer.appendChild(zero)
zero.addEventListener('click', function () { inputs.push(zero.value)
})
const additionButton = document.getElementById('addition')
additionButton.addEventListener('click', () => moveOperator(additionButton.value))
const subtractionButton = document.getElementById('subtraction')
subtractionButton.addEventListener('click', moveOperator(subtractionButton.value))
const divisionButton = document.getElementById('division')
divisionButton.addEventListener('click', moveOperator(divisionButton.value))
const multiplicationButton = document.getElementById('multiplication')
multiplicationButton.addEventListener('click', moveOperator(multiplicationButton.value))
const equalsButton = document.getElementById('equals')
equalsButton.addEventListener('click', solve())
function moveOperator (value){
    nums = inputs.join("")
    operators.push(value)
    display.push(value)
}
//this should allow for a separate function that actual preforms the operator that was stored, might also add the number into a separate totals section or maybe the total should replace the num value not sure yet
function solve (currentOperator){
    if (currentOperator = "+")
        addition()
    else if (currentOperator = "-")
        subtraction ()
    else if (currentOperator = "/")
        division ()
    else
        multiplication()
}
function addition(a,b){
    console.log(a+b)
    return a+b;
}
function subtraction (){
    return a-b;
}
function division (){
    return a/b;
}
function multiplication(){
    return a*b;
}