
let arr = []
console.log(arr)
let fruits = ['grape', 'guava', 'apple', 'pineapple', 'orange', 'banana', 'pawpaw']
console.log(fruits)
console.log(fruits.length)
console.log(fruits[0])
console.log(fruits[3])
console.log(fruits[6])
var mixedDataTypes = [10, 'rice', ['bread', 'butter'], "grace", 'javaScript', 19, 'love']
console.log(mixedDataTypes.length)
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])
console.log(" ")
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])
console.log(" ")
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())
console.log('Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.'
)
console.log(itCompanies)
let company = "Code Village"
if (itCompanies.indexOf(company) === -1) {
    console.log("company is not found")
} else {
    console.log(company)
}

for (let i = 0; i < itCompanies.length; i = i + 1) {
    if (itCompanies[i].split('o').length - 1 >= 2) {
        console.log(itCompanies[i])
    }
}

console.log(itCompanies.sort())
console.log(itCompanies.reverse())
console.log(itCompanies.slice(0, 3))
console.log(itCompanies.splice(4))
console.log(itCompanies.slice(3, 4))
console.log(itCompanies.shift())
console.log(itCompanies.splice(1, 1))
console.log(itCompanies.pop())
console.log(itCompanies.shift())
console.log(itCompanies)

import countries from './countries.js'
console.log(countries)

import web_techs from './web_techs.js'
console.log(web_techs)

// import { vitamins } from './web_techs.js'
// console.log(vitamins)

let text = 'I love teaching and empowering people. I teach HTML CSS JS React Python'
console.log(Array(text))
let word = text.split(" ")
console.log(word)
console.log(word.length)
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart.unshift("Meat"))
console.log(shoppingCart.push("Sugar"))
console.log(shoppingCart.splice(4, 1))
shoppingCart[3] = "Green Tea"
console.log(shoppingCart)
console.log(countries.includes("Ethiopia"))
console.log(countries[4].toUpperCase())
console.log(web_techs.includes("Sass"))
console.log(web_techs.push("Sass"))
console.log(web_techs)
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullstack = frontEnd.concat(backEnd)
console.log(fullstack)
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sortedAges = ages.sort((a, b) => a - b) //ascending, for descending order, formula = ages.sort((a,b) => b-a)
const max = sortedAges[ages.length - 1]
const min = sortedAges[0]
const median = [sortedAges[(ages.length / 2) - 1]/*, sortedAges[ages.length / 2]*/] //odd: (length-1)/2, even: (length/2-1), length/2
const average = sortedAges.reduce((a, b) => a + b, 0) / sortedAges.length;
const range = max - min
console.log({ sortedAges, max, min, median, average, range })

import countriees from './countriees.js'
console.log(countriees.slice(0, 10))
console.log(countriees[(countriees.length - 1) / 2])

//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.