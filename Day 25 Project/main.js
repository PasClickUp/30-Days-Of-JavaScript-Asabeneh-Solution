import countriesData from "./countries_data.js"

let button = document.querySelectorAll('button')
let graphWrapper = document.querySelector('.graph-wrapper')
let graphTitle = document.querySelector('.graph-title')
let paragraph = document.querySelectorAll('p')

paragraph.forEach(p => {
    if (p.classList.contains('subtitle')) {
        p.textContent = 'Currently, we have '
    }

    if (p.classList.contains('feedback')) {
        p.textContent = `${countriesData.length} countries.`
    }
})

// let tenMostSpokenLanguages = Object.entries(countriesData.flatMap(({ languages }) =>
//     languages
// ).reduce((acc, cur) => {
//     acc[cur] = acc[cur] + 1 || 1
//     return acc
// }, {})).sort((a, b) => b[1] - a[1]).slice(0, 10)

// let worldPopulation = countriesData.map(({ population }) => population).reduce((acc, cur) => {
//     return acc + cur
// }, 0)

// let worldDetails = {
//     name: 'world', population: worldPopulation
// }
// countriesData.push(worldDetails)
// console.log(
//     countriesData
// )

