// Step 1: Grab and HTML element
const plusBtn = document.querySelector('#plus-btn')
const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.querySelector('#reset-btn')
const counter = document.querySelector('#counter')

const themeBtns = document.querySelectorAll('.theme-buttons')

// Step 2: Write the function
let count = 0

const increase = () => {
    count++
    counter.textContent = count
    console.log(count)
}

const decrease = () => {
    count--
    counter.textContent = count
    console.log(count)
}

const reset = (event) => {
    count = 0
    counter.textContent = count
    console.log(count)
}

const selectTheme = (event) =>{
    console.log(event.target.textContent)
    document.querySelector('body').className = event.target.textContent
    document.querySelector('main').className = event.target.textContent
}
// Step 3: Combines step 1 and 2 using an Event Listener
plusBtn.addEventListener('click', increase)

minusBtn.addEventListener('click', decrease)

resetBtn.addEventListener('click', reset)

for (let i = 0; i < themeBtns.length; i++) {
    themeBtns[i].addEventListener('click', selectTheme)
    // console.log(themeBtns[i].textContent)
}