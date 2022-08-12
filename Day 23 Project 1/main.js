let body = document.body

let header = document.createElement('span')
let title = document.createElement('span')
let author = document.createElement('span')
let blurError = document.createElement('p')
let Generator = document.createElement('div')
let input = document.createElement('input')
let button = document.createElement('button')
let numbers = document.createElement('div')
body.style.display = 'grid'
body.style.placeItems = 'center'

body.append(header, title, author, Generator, blurError, Generator, input, button, numbers)
Generator.append(input, button)

header.textContent = 'Number Generator'
title.textContent = '30DaysOfJavaScript:DOM Day 3'
author.textContent = 'Author: Abdussomad Abdulqodir'

input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'Generate more numbers')
button.textContent = 'Generate numbers'

const isPrime = (n) => {

    if (n < 2) {
        return false
    };

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }

    return true
}
const numberGen = (num) => {
    for (let i = 0; i < num; i++) {
        theNumbers = document.createElement('div')

        isPrime(i) ? theNumbers.style.background = 'red' : i % 2 === 0 ? theNumbers.style.background = 'green' : theNumbers.style.background = 'yellow'
        theNumbers.textContent = i
        theNumbers.style.fontSize = '50px'
        theNumbers.style.fontSize = '50px'
        theNumbers.style.textAlign = 'center'
        theNumbers.style.height = '60px'
        theNumbers.style.lineHeight = '60px'
        theNumbers.style.margin = '0.15rem'
        theNumbers.style.color = 'white'
        theNumbers.style.width = '7rem'
        numbers.append(theNumbers)

    }
}

numbers.style.display = 'grid'
numbers.style.gridTemplateColumns = 'repeat(6,1fr)'

header.style.color = '#00ca79'
header.style.fontSize = '35px'
header.style.fontWeight = '600'

title.style.fontSize = '25px'
author.style.fontSize = '20px'

input.style.width = '35rem'
input.style.height = '2rem'
input.style.border = '3px solid #00ca79'
input.style.outline = 'none'

button.style.width = '15rem'
button.style.height = '2.5rem'
button.style.marginLeft = '1rem'
button.style.background = '#00ca79'
button.style.color = 'white'
button.style.fontSize = '20px'
button.style.fontWeight = '600'
button.style.border = 'none'
button.addEventListener('click', () => {
    input.value == '' ? blurError.textContent = 'Enter number in the input field to generate numbers' : Number(input.value) != input.value ? blurError.textContent = 'input value must be a number' : blurError.textContent = " "
    numberGen(input.value)

    blurError.style.color = 'red'

})
