import countriesData from "./countries_data.js"

let body = document.body
let populationButton = body.querySelector('.population')
let languagesButton = body.querySelector('.languages')
let tenMostSpokenLanguages = Object.entries(countriesData.flatMap(({ languages }) =>
    languages
).reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1
    return acc
}, {})).sort((a, b) => b[1] - a[1]).slice(0, 10)

let worldPopulation = countriesData.map(({ population }) => population).reduce((acc, cur) => {
    return acc + cur
}, 0)

let worldDetails = {
    name: 'world', population: worldPopulation
}
countriesData.push(worldDetails)
console.log(
    countriesData
)