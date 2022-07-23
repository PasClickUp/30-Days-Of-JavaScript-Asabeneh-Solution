import countries from "./countries.js";
import countriesData from './countries object.js'
//LEVEL 1
//1. Display the countries array as a table
console.table(countries)
//2. Display the countries object as a table
console.table(countriesData)
//3. Use console.group() to group logs
console.group("Countries")
console.log(countries)
console.groupEnd()
console.group("Countries Data")
console.log(countriesData)
console.groupEnd()
//LEVEL 2
//1. 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10)
//2. Write a warning message using console.warn()
console.warn("Be warned!")
//3. Write an error message using console.error()
console.error("You can not eat your cake, and have it.")
//LEVEL 3
//1. Check the speed difference among the following loops: while, for, for of, forEach
console.time("While loop")
let i = 0
while (i < countries.length - 1) {
    i++
    console.log(countries[i])
}
console.timeEnd("While loop")
console.time("for loop")
for (let i = 0; i < countries.length - 1; i++) {
    console.log(countries[i])
}
console.timeEnd("for loop")
console.time("for of loop")
for (let country of countries) {
    console.log(country)
}
console.timeEnd("for of loop")
console.time("forEach loop")
countries.forEach((country) => { console.log(country) })
console.timeEnd("forEach loop")