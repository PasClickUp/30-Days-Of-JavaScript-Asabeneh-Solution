// Use the countries array to display all the countries.See the design

import countries from "../Day 13 Exercise/countries.js"

let body = document.body

let header = document.createElement('header')
let number = document.createElement('span')
let challenge = document.createElement('span')
let author = document.createElement('span')
let countriesDiv = document.createElement('div')

body.append(header)
body.append(number)
body.append(challenge)
body.append(author)
body.append(countriesDiv)

body.style.display = 'grid'
body.style.fontFamily = 'roboto'
body.style.placeItems = 'center'

header.textContent = 'WORLD COUNTRIES LIST'
header.style.letterSpacing = '0.4rem'
header.style.fontSize = '35px'
header.style.fontWeight = '600'

number.textContent = 'Total Number of countries: 193'
number.style.fontWeight = '500'

challenge.textContent = '30DaysOfJavaScript:DOM-Day-2'
challenge.style.fontWeight = '300'
challenge.style.fontSize = '13px'

author.textContent = 'Author: Abdussomad Abdulqodir'
author.style.fontWeight = '300'
author.style.fontSize = '12px'

for (let i = 0; i < countries.length; i++) {
    let forCountry = document.createElement('div')
    forCountry.textContent = countries[i].toUpperCase()
    forCountry.style.fontSize = '15px'
    forCountry.style.fontSize = '10px'
    forCountry.style.fontWeight = '500'
    forCountry.style.height = '80px'
    forCountry.style.lineHeight = '80px'
    forCountry.style.placeItems = 'center'
    forCountry.style.border = '1px solid black'
    countriesDiv.append(forCountry)
}

countriesDiv.style.display = 'grid'
countriesDiv.style.gridTemplateColumns = 'repeat(6,1fr)'
countriesDiv.style.width = '70%'
countriesDiv.style.marginTop = '2rem'