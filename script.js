const nums = []
const inputs = []
const numButtonsContainer = document.getElementById('numButtons')
for (i = 0; i <= 9; i++) {
    const button = document.createElement('button')
    button.textContent = i
    button.className = "numButtons"
    numButtonsContainer.appendChild(button)
    button.addEventListener('click', i => {
        inputs.push(i)
        })
    }
