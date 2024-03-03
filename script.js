const nums = []
const inputs = []
const operators = []
const numButtonsContainer = document.getElementById('numButtons')
const operatorButtonsContainer = document.getElementById('operators')
let z = 0
const calculator = document.getElementById('calculator')
//this event listener is intended on displaying the numbers and operators before the user clicks on the equals operator
calculator.addEventListener('click', )
for (i = 7; i <= 9; i++) {
    const button = document.createElement('button')
    button.textContent = i
    button.className = "numButtonsOne"
    button.value = i
    numButtonsContainer.appendChild(button)
    button.addEventListener('click', function () {
        inputs.push(button.value)
        z++
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
        z++
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
        z++
        })
    }
const zero = document.createElement('button')
zero.textContent = 0
zero.className = "numButtonsFour"
zero.value = 0
numButtonsContainer.appendChild(zero)
zero.addEventListener('click', function () {
    inputs.push(zero.value)
    z++
})
const additionButton = document.getElementById('addition')
additionButton.addEventListener('click', moveOperator(additionButton.value))
const subtractionButton = document.getElementById('subraction')
subtractionButton.addEventListener('click', moveOperator(subtractionButton.value))
const divisionButton = document.getElementById('division')
divisionButton.addEventListener('click', moveOperator(divisionButton.value))
const multiplicationButton = document.getElementById('multiplication')
multiplicationButton.addEventListener('click', moveOperator(multiplicationButton.value))
const equalsButton = document.getElementById('equals')
equalsButton.addEventListener('click', solve())
//find a way to have the program check to see if the operators array is empty and if 0 has or has not been selected before allowing them to enter another operator
function moveOperator (value){
    operators.push(value)
}
//this should allow for a separate function that actual preforms the operator that was stored, might also add the number into a separate totals section or maybe the total should replace the num value not sure yet
function solve (){

}