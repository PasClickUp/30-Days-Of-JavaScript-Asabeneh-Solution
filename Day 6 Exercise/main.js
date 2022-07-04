const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Iceland',
    'Ireland',
    'Japan',
    'Kenya'
]

import countriexes from './countries.js'
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//LEVEL 1

//1. Iterate 0 to 10 using for loop, do the same using while and do while loop
let increasing = 0;
for (increasing = 0; increasing <= 10; increasing++) {
    console.log({ increasing })
}

increasing = 0
while (increasing <= 10) {
    console.log({ increasing })
    increasing++
}
increasing = 0
do {
    console.log({ increasing })
    increasing++
} while (increasing <= 10);
//2. Iterate 10 to 0 using for loop, do the same using while and do while loop
let decreaing = 10
for (decreaing = 10; decreaing >= 0; decreaing--) {
    console.log({ decreaing })
}
decreaing = 10;
while (decreaing >= 0) {
    console.log({ decreaing })
    decreaing--
}
decreaing = 10;
do {
    console.log({ decreaing })
    decreaing--
} while (decreaing >= 0);

//3. Iterate 0 to n using for loop
let n = 7
for (let i = 0; i <= n; i++) {
    console.log({ i })
}

//4. Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######


for (let ash = 1; ash <= 7; ash++) {
    console.log('#'.repeat(ash))
}
//5. Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for (let index = 0; index <= 10; index++) {
    console.log(`${index} * ${index} = ${index * index}`)
}

//6. Using loop print the following pattern

//  i    i ^ 2   i ^ 3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000

for (let dex = 1; dex <= 10; dex++) {
    console.log(`${dex}   ${dex ** 2}   ${dex ** 3}`)
}

//7. Use for loop to iterate from 0 to 100 and print only even numbers

for (let even = 0; even <= 100; even++) {
    if (even % 2 == 0)
        console.log({ even })
}

//8. Use for loop to iterate from 0 to 100 and print only odd numbers

for (let odd = 0; odd <= 100; odd++) {
    if (odd % 2 !== 0)
        console.log({ odd })
}
//9. Use for loop to iterate from 0 to 100 and print only prime numbers

function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}

for (let i = 0; i < 100; i++) {
    if (isPrime(i)) {
        console.log(i)
    }
}

//10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// The sum of all numbers from 0 to 100 is 5050.

let sum = 0
for (let num = 0; num <= 100; num++) {
    sum = sum + num
}
console.log({ sum })

//11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

let evenSum = 0
for (let even = 0; even <= 100; even++) {
    if (even % 2 == 0)
        evenSum = evenSum + even
}
let oddSum = 0
for (let odd = 0; odd <= 100; odd++) {
    if (odd % 2 !== 0)
        oddSum = oddSum + odd
}

console.log(`The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}.`)

//12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.Print sum of evens and sum of odds as array

// [2550, 2500]

let arr = []
console.log(arr.push(`${evenSum}, ${oddSum}`))
console.log(arr)

//13. Develop a small script which generate array of 5 random numbers.

let emptyArrayB = Array()
for (let i = 3; i < 8; i++) {
    emptyArrayB.push(Math.floor(Math.random() * 15))
}
console.log(emptyArrayB)
//14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

//15. Develop a small script which generate a six characters random id:

// 5j2khz

let smallRandomId = "abcdefghijklmnopqrstuvwxyz0123456789"
let str = ""
for (let i = 1; i < 7; i++) {
    let random = Math.floor(Math.random() * smallRandomId.length)
    str += (smallRandomId[random])
}

console.log(str)

// LEVEL 2

//1. Develop a small script which generate any number of characters random id:

// fe3jo1gl124g
// xkqci4utda1lmbelpkm03rba

let longRandomId = "abcdefghijklmnopqrstuvwxyz0123456789"
let longRandomStringA = ""
let longRandomStringB = ""
for (let i = 0; i < 12; i++) {
    let longRandomIdA = Math.floor(Math.random() * longRandomId.length)
    longRandomStringA += (longRandomId[longRandomIdA])
}

for (let i = 0; i < 24; i++) {
    let longRandomStringB = Math.floor(Math.random() * longRandomId.length)
    longRandomStringB += (longRandomId[longRandomId])
}
console.log(longRandomStringA, longRandomStringB)


//2. Write a script which generates a random hexadecimal number.

// '#ee33df'
let ashStart = "e3df"
let hexa = "#"
for (let i = 0; i < 6; i++) {
    let ashTag = Math.floor(Math.random() * ashStart.length)
    hexa += (ashStart[ashTag])
}
console.log(`'${hexa}'`)
//3. Write a script which generates a random rgb color number.
//     rgb(240, 180, 80)

console.log(`rgb(${Math.floor(Math.random() * 241)}, ${Math.floor(Math.random() * 241)}, ${Math.floor(Math.random() * 241)})`)
//4. Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
console.log(countries.map((country) => country.toUpperCase()))

//5. Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
console.log(countries.map((country) => country.length))
//6. Use the countries array to create the following array of arrays:

// [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
// ]
let countrix = countries.map((country) => [country, country.slice(0, 3).toUpperCase(), country.length])
console.log(countrix)

//7. In above countries array, check if there is a country or countries containing the word 'land'.If there are countries containing 'land', print it as array.If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland', 'Ireland', 'Iceland']
console.log(countries.filter((country) => country.includes("land")))

//8. In above countries array, check if there is a country or countries end with a substring 'ia'.If there are countries end with, print it as array.If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// ['Albania', 'Bolivia', 'Ethiopia']
console.log(countries.filter((country) => country.endsWith("ia")))

//9. Using the above countries array, find the country containing the biggest number of characters.
//     Ethiopia

let longestCountry = countries[0]
for (let l = 0; l < countries.length; l++) {
    countries[l].length > longestCountry.length ? longestCountry = countries[l] : longestCountry;
}
console.log(longestCountry)

//10. Using the above countries array, find the country containing only 5 characters.
// ['Japan', 'Kenya']

console.log(countries.filter((country) => country.length === 5))
//11. Find the longest word in the webTechs array
let longestWeb = webTechs[0]
for (let w = 0; w < webTechs.length; w++) {
    webTechs[w].length > webTechs.length ? longestWeb = webTechs[w] : longestWeb;
}
console.log(longestWeb)
//12. Use the webTechs array to create the following array of arrays:

// [["HTML", 4], ["CSS", 3], ["JavaScript", 10], ["React", 5], ["Redux", 5], ["Node", 4], ["MongoDB", 7]]

console.log(webTechs.map((webTech) => [webTech, webTech.length]))
//13. An application created using MongoDB, Express, React and Node is called a MERN stack app.Create the acronym MERN by using the array mernStack
console.log(mernStack.map((stack) => stack.slice(0, 1).split("").join()))
//14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (let i = 0; i < webTechs.length; i++) {
    console.log(webTechs[i])
}
//15. This is a fruit array, ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruitArray = ['banana', 'orange', 'mango', 'lemon']
console.log(fruitArray.reverse())
//16. Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
// HTML
// CSS
// JS
// REACT
// NODE
// EXPRESS
// MONGODB
// for (let Stack = 0; Stack < fullStack.length; Stack++) {
//     console.log(fullStack[Stack])
// }

// LEVEL 3

//1. Copy countries array(Avoid mutation)
let anotherCountries = [...countries]
//2. Arrays are mutable.Create a copy of array which does not modify the original.Sort the copied array and store in a variable sortedCountries
let sortedCountries = anotherCountries.sort()

//3. Sort the webTechs array and mernStack array
let sortedWebtechs = webTechs.sort()
let sortedmernStacks = mernStack.sort()
console.log(sortedCountries, sortedWebtechs, sortedmernStacks)
//4. Extract all the countries contain the word 'land' from the countries array and print it as array
let countriesWithLand = countriexes.filter((country) => country.includes("land"))
console.log(countriesWithLand)
//5. Find the country containing the hightest number of characters in the countries array
let sortedCountrixes = countriexes.sort((a, b) => b.length - a.length)
let longestCountrixes = sortedCountrixes[0]
console.log(longestCountrixes)
//6. Extract all the countries contain the word 'land' from the countries array and print it as array
//7. Extract all the countries containing only four characters from the countries array and print it as array
console.log(countriexes.filter((country) => country.length === 4))
//8. Extract all the countries containing two or more words from the countries array and print it as array

//9. Reverse the countries array and capitalize each country and stored it as an array
let reverseCountriexes = countriexes.reverse()
// let countriexesUpperCase = reverseCountriexes.filter((country) => country.toUpperCase())
console.log(reverseCountriexes.filter((country) => country.toUpperCase()))