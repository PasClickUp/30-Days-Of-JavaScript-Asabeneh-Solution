const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// LEVEL 1
// 1.create an empty set
let emptySet = new Set()
// 2.Create a set containing 0 to 10 using loop
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numberSet = new Set(numbers)
for (let num of numberSet) {
    console.log(num)
}
// 3.Remove an element from a set
let removeTen = numberSet.delete(10)
// 4.Clear a set
numberSet.clear()
// 5.Create a set of 5 string elements from array
let stringArray = ["rice", "beans", "bread", "butter", "semovita", "rice"]
let stringArraySet = new Set(stringArray)
// 6.Create a map of countries and number of characters of a country
let mapCountries = countries.map((country) => [country, country.length])
let A = new Set(a)
let B = new Set(b)
// LEVEL 2
// 1.Find a union b
let C = [...a, ...b]
let aunionb = new Set(C)
// 2.Find a intersection b
let D = a.filter((n) => B.has(n))
// 3.Find a with b

// LEVEL 3
// 1.How many languages are there in the countries object file.

// 2.*** Use the countries data to find the 10 most spoken languages:

// Your output should look like this
// console.log(mostSpokenLanguages(countries, 10))
// [
//     { English: 91 },
//     { French: 45 },
//     { Arabic: 25 },
//     { Spanish: 24 },
//     { Russian: 9 },
//     { Portuguese: 9 },
//     { Dutch: 8 },
//     { German: 7 },
//     { Chinese: 5 },
//     { Swahili: 4 },
//     { Serbian: 4 }
// ]

// Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [
//     { English: 91 },
//     { French: 45 },
//     { Arabic: 25 }
// ]
