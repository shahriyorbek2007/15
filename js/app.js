const colorOne = document.getElementById('color-one')
const colorTwo = document.getElementById('color-two')
const body = document.querySelector('body')
const title = document.querySelector('h2')
const range = document.getElementById('range')

function Gradient(){
    body.style.background = `linear-gradient(${range.value}deg, ${colorOne.value}, ${colorTwo.value})`
    title.textContent = `${body.style.background}`
}

const input = document.querySelectorAll('input')
input.forEach((input) =>{
    input.addEventListener('input', Gradient)
})