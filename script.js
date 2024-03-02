const nums = []
const inputs = []
const numButtonsContainer = document.getElementById('numButtons')
const operatorButtonsContainer = document.getElementById('operators')
for (i = 0; i <= 9; i++) {
    const button = document.createElement('button')
    button.textContent = i
    button.className = "numButtons"
    numButtonsContainer.appendChild(button)
    button.addEventListener('click', i => {
        inputs.push(i)
        })
    }
const additionButton = document.createElement('button')
additionButton.className = "operatorButtons"
additionButton.id = "additionButton"
operatorButtonsContainer.appendChild(additionButton)
additionButton.addEventListener('click', addition())
function addition(){

}
const subtractionButton = document.createElement('button')
subtractionButton.className = "operatorButtons"
subtractionButton.id = "subtractionButton"
operatorButtonsContainer.appendChild(subtractionButton)
subtractionButton.addEventListener('click', subtraction())
function subtraction (){

}
const divisionButton = document.createElement('button')
divisionButton.className = "operatorButtons"
divisionButton.id = "divisionButton"
operatorButtonsContainer.appendChild(divisionButton)
divisionButton.addEventListener('click', division())
function division (){

}
const multiplicationButton = document.createElement('button')
multiplicationButton.className = 'operatorButtons'
multiplicationButton.id = "multiplicationButton"
operatorButtonsContainer.appendChild(multiplicationButton)
multiplicationButton.addEventListener('click', multiplication())
function multiplication (){

}