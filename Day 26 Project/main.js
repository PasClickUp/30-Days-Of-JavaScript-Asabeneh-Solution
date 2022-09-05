import countries from './countries.js'
let input = document.querySelector('input')
let button = document.querySelectorAll('button')
let span = document.querySelectorAll('span')
let main = document.querySelector('main')
let mapImage = 'url("./images/map_image.jpg")'
let eachCountry
let country = countries.map((n) => {
    eachCountry = document.createElement('div')
    eachCountry.style.display = 'grid'
    eachCountry.textContent = n
    eachCountry.style.padding = '1rem'
    eachCountry.style.width = '5rem'
    eachCountry.style.backgroundImage = 'url("./images/map_image.jpg")'
    eachCountry.style.backgroundSize = "cover"
    // eachCountry.style.backgroundBlendMode = 'darken'
    eachCountry.style.height = '4rem'
    eachCountry.style.textTransform = 'Uppercase'
    eachCountry.style.textAlign = 'center'
    eachCountry.style.alignContent = 'center'
    // eachCountry.style.color = 'white'
    eachCountry.style.fontWeight = '1000'
    main.append(eachCountry)

})
main.style.display = 'grid'
main.style.placeItems = 'center'
main.style.gridTemplateColumns = 'repeat(6, 0.12fr)'
main.style.justifyContent = 'center'
main.style.marginTop = '4rem'