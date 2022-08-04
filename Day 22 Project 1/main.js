//Create a div container on HTML document and create 0 to 100 numbers dynamically and append to the container div.

//Even numbers background is green
//Odd numbers background is yellow
//Prime numbers background is red

let body = document.body

body.style.fontFamily = 'roboto'
body.style.display = 'grid'
body.style.placeItems = 'center'

let header = document.createElement('header')
let challenge = document.createElement('span')
let author = document.createElement('span')
let numberDiv = document.createElement('div')

body.append(header)
body.append(challenge)
body.append(author)
body.append(numberDiv)

header.textContent = 'Number Generator'
challenge.textContent = '30DaysOfJavaScript:DOM Day 2'
author.textContent = 'Author: Abdussomad Abdulqodir'

header.style.fontSize = '32px'
header.style.fontWeight = '900'
challenge.style.fontSize = '22px'
challenge.style.textDecoration = 'underline'
author.style.fontSize = '20px'
author.style.textDecoration = 'underline'

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

for (let i = 0; i <= 101; i++) {
    noList = document.createElement('div')

    isPrime(i) ? noList.style.background = 'red' : i % 2 === 0 ? noList.style.background = 'green' : noList.style.background = 'yellow'

    noList.textContent = i
    noList.style.fontSize = '50px'
    noList.style.textAlign = 'center'
    noList.style.height = '80px'
    noList.style.lineHeight = '80px'
    noList.style.margin = '0.15rem'
    noList.style.color = 'white'
    numberDiv.append(noList)
}

noList.style.paddingRight = '1rem'
noList.style.paddingLeft = '1rem'

numberDiv.style.display = 'grid'
numberDiv.style.gridTemplateColumns = 'repeat(6,1fr)'
numberDiv.style.fontWeight = '900'
numberDiv.style.marginTop = '1.5rem'
