const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
// Level 1
//1. Read the countries API using fetch and print the name of country, capital, languages, population and area.

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {

        console.log(data.map(({ name, capital, languages, population, area }) => ({ name, capital, languages, population, area })))
    })
    .catch(error => console.error(error))


// Level 2
//1. Print out all the cat names in to catNames variable.
let catNames = await fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        return data.map(({ name }) => name.toUpperCase())
    })
    .catch(error => console.error(error))
console.log(catNames)
// Level 3
//1. Read the cats api and find the average weight of cat in metric unit.
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        const avgMetric = data.map(({ weight: { metric } }) => {
            let avgMetric = metric.split((" "))
            avgMetric = (Number(avgMetric[0]) + Number(avgMetric[2])) / 2
            return avgMetric
        }
        )
        console.log({ avg: avgMetric })
    })
    .catch(error => console.error(error))
//2. Read the countries api and find out the 10 largest countries
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        let toSort = data.map(({ name, population }) => ({ name, population }))
        console.log(Object.entries(toSort).sort((a, b) => b[1].population - a[1].population).slice(0, 10).map((val) => val[1]))
    })
//3. Read the countries api and count total number of languages in the world used as officials.

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        const lang = (data.map(({ languages }) => languages)).flat().map(({ name }) => name)
        console.log(lang.reduce((a, b) => {
            if (a.indexOf(b) === -1) {
                a.push(b)
            }
            return a
        }, []).length)
    })