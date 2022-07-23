//LEVEL 1
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
//1. Explain the difference between forEach, map, filter, and reduce.
// Foreach takes a callback function and run that callback function on each element of array individually, it's outptut is similar to that of the for Loop.
//filter executes the callback and check its return value. If the value is true, element remains in the resulting array but if the return value is false the element will be removed for the resulting array it returns a new array.
//Map takes a callback as well, and run it against every element on the array but what makes it unique is it generate a new array based on your existing array.
//Reduce reduces the array into one single value by summing them up and returns it upon completion.

//2. Define a callback function before you use it in forEach, map, filter or reduce.
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. 

//3. Use forEach to console.log each country in the countries array.
countries.forEach((country) => console.log({ country }))
//4. Use forEach to console.log each name in the names array.
names.forEach((name) => console.log({ name }))
//5. Use forEach to console.log each number in the numbers array.
numbers.forEach((number) => console.log(number))
//6. Use map to create a new array by changing each country to uppercase in the countries array.
let countryUppercase = countries.map((country) => country.toUpperCase())
console.log(countryUppercase)
//7. Use map to create an array of countries length from countries array.
let countryLength = countries.map((country) => country.length)
console.log(countryLength)
//8. Use map to create a new array by changing each number to square in the numbers array
let numberSquare = numbers.map((number) => number ** 2)
console.log(numberSquare)
//9. Use map to change to each name to uppercase in the names array
let nameUppercase = names.map((name) => name.toUpperCase())
console.log(nameUppercase)
//10. Use map to map the products array to its corresponding prices.
let correspondingPrices = products.map(({ product, price }) => {
    const obj = {};
    obj[product] = price
    return obj
})
console.log(correspondingPrices)

//11. Use filter to filter out countries containing land.
let countriesWithLand = countries.filter((country) => country.includes("land"))
console.log(countriesWithLand)
//12. Use filter to filter out countries having six character.
let countryWithSixCharacter = countries.filter((country) => country.length === 6)
console.log(countryWithSixCharacter)
//13. Use filter to filter out countries containing six letters and more in the country array.
let countryWithSixCharacterOrMore = countries.filter((country) => country.length >= 6)
console.log(countryWithSixCharacterOrMore)
//14. Use filter to filter out country start with 'E';
let countriesThatStartWithE = countries.filter((country) => country[0] == "E")
console.log(countriesThatStartWithE)
//15. Use filter to filter out only prices with values.
let pricesWithValue = products.filter(({ price }) => typeof price === "number")
console.log(pricesWithValue)
//16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = countries.map((country) => country.toLocaleLowerCase())
console.log(getStringLists)
//17. Use reduce to sum all the numbers in the numbers array.
let addNumbers = numbers.reduce((num, ber) => num + ber, 0)
console.log(addNumbers)
//18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let concatenateCountries = countries.reduce((acc, cur, i, arr) => {
    const lastindex = arr[arr.length - 1]
    acc += cur !== lastindex ? cur + ', ' : 'and ' + cur + ' are north European countries.'
    return acc
}, "")
console.log(concatenateCountries)

//19. Explain the difference between some and every

//every function mainly checks if some elements in the array are similar while some functions mainly checks if some of the elements are similar.

//20. Use some to check if some names' length greater than seven in names array
let ifNameLengthGreaterSeven = names.some((name) => name.length > 7)
//21. Use every to check if all the countries contain the word land
let ifCountriesContainsLand = countries.every((country) => country.includes("land"))
//22. Explain the difference between find and findIndex.

//find Return the first element which satisfies the condition while findIndex Returns the index of the element which satisfies the condition.

//23. Use find to find the first country containing only six letters in the countries array
let firstCountryContainingSixLetters = countries.find((country) => country.length === 6)
//24. Use findIndex to find the position of the first country containing only six letters in the countries array
let firstCountryIndexSixLetters = countries.findIndex((country) => country.length === 6)
//25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
let findIndexOfNorway = countries.findIndex((country) => country.toLowerCase() == "norway")
//26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
let findIndexOfRussia = countries.findIndex((country) => country.toLowerCase() == "russia")

//LEVEL 2

//1. Find the total price of products by chaining two or more array iterators(eg.arr.map(callback).filter(callback).reduce(callback)).
let totalPriceofProductsByChaining = products.map(({ price }) => price).reduce((acc, cur) => typeof cur !== "number" ? acc : acc + cur, 0)
console.log(totalPriceofProductsByChaining)
//2. Find the sum of price of products using only reduce reduce(callback)).
let sumPriceofPrice = products.reduce((acc, { product, price }) => {
    if (typeof price === "number") acc = acc + price
    return acc
}, 0)
console.log(sumPriceofPrice)
//3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island', 'stan')).
import countriees from './countries.js'
let categorizeCountries = countriees.filter((country) => country.includes('land', 'ia', 'island', 'stan'))
console.log(categorizeCountries)
//4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
//5. Declare a getFirstTenCountries function and return an array of ten countries.Use different functional programming to work on the countries.js array
let getFirstTenCountries = countriees.map((country) => country).slice(0, 10)
console.log(getFirstTenCountries)
//6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
let getLastTenCountries = countriees.map((country) => country).reverse().slice(0, 10).reverse()
console.log(getLastTenCountries)
//7. Find out which letter is used many times as initial for a country name from the countries array(eg.Finland, Fiji, France etc)
const mostInitials = countriees.reduce((acc, cur) => {
    let firstLetter = cur[0]
    if (acc[firstLetter]) acc[firstLetter] += 1
    else acc[firstLetter] = 1
    return acc
}, {})
let mostInitialLetter = Object.entries(mostInitials).sort((a, b) => b[1] - a[1])[0][0]
console.log([mostInitialLetter])

//LEVEL 3
import countryData from './countries_data.js'
let countryDataToUse = [...countryData]
// Name A to Z
// array?.sort((a, b) => (a.name > b.name ? 1 : 1))
// Name Z to A
// array?.sort((a, b) => (a.name > b.name ? -1 : 1))
//1. Use the countries information, in the data folder.Sort countries by name, by capital, by population
let nameSort = countryDataToUse.sort((a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
})
let capitalSort = countryDataToUse.sort((a, b) => {
    if (a.capital < b.capital) return -1
    if (b.capital > a.capital) return 1
    return 0
})
let populationSort = countryDataToUse.sort((a, b) => {
    if (a.population < b.population) return -1
    if (b.population > a.population) return 1
    return 0
})
console.log(nameSort[0], capitalSort[0], populationSort[0])
//2. *** Find the 10 most spoken languages:

// Your output should look like this
// console.log(mostSpokenLanguages(countries, 10))
// [
//     { country: 'English', count: 91 },
//     { country: 'French', count: 45 },
//     { country: 'Arabic', count: 25 },
//     { country: 'Spanish', count: 24 },
//     { country: 'Russian', count: 9 },
//     { country: 'Portuguese', count: 9 },
//     { country: 'Dutch', count: 8 },
//     { country: 'German', count: 7 },
//     { country: 'Chinese', count: 5 },
//     { country: 'Swahili', count: 4 }
// ]

// Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [
//     { country: 'English', count: 91 },
//     { country: 'French', count: 45 },
//     { country: 'Arabic', count: 25 },
// ]

let mostSpokenLanguages = (arr, num) => {
    let spokenLanguage = arr.map(({ languages }) => languages).flat().reduce((acc, cur) => {
        acc[cur] = acc[cur] + 1 || 1
        return acc
    }, {})
    spokenLanguage = Object.entries(spokenLanguage).map(lang => ({ country: lang[0], count: lang[1] })).sort((a, b) => b.count - a.count)
    return spokenLanguage.slice(0, num)
}
console.log(mostSpokenLanguages(countryData, 3))
//3. *** Use countries_data.js file create a function which create the ten most populated countries

// console.log(mostPopulatedCountries(countries, 10))
// [
//     { country: 'China', population: 1377422166 },
//     { country: 'India', population: 1295210000 },
//     { country: 'United States of America', population: 323947000 },
//     { country: 'Indonesia', population: 258705000 },
//     { country: 'Brazil', population: 206135893 },
//     { country: 'Pakistan', population: 194125062 },
//     { country: 'Nigeria', population: 186988000 },
//     { country: 'Bangladesh', population: 161006790 },
//     { country: 'Russian Federation', population: 146599183 },
//     { country: 'Japan', population: 126960000 }
// ]

// console.log(mostPopulatedCountries(countries, 3))
// [
//     { country: 'China', population: 1377422166 },
//     { country: 'India', population: 1295210000 },
//     { country: 'United States of America', population: 323947000 }
// ]
let mostPopulatedCountries = (arr, num) => {
    let mostPopulated = arr.sort((a, b) => b.population - a.population).map(({ name, population }) => ({ country: name, population })).slice(0, num)
    return mostPopulated
}
console.log(mostPopulatedCountries(countryData, 10))

//4. *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation).In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample.You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object.Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range()) // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ', statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ', statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ', statistics.var()) // 17.5
// console.log('Frequency Distribution: ', statistics.freqDist()) //#[(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// console.log(statistics.describe())
Count: 25
Sum: 744
Min: 24
Max: 38
Range: 14
Mean: 30
Median: 29
Mode: (26, 5)
Variance: 17.5
// Standard Deviation: 4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]