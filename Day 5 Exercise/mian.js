//LEVEL 1
//1. Declare an empty array;
let arr = []
//2. Declare an array with more than 5 number of elements
let fruits = ['grape', 'guava', 'apple', 'pineapple', 'orange', 'banana', 'pawpaw']
//3. Find the length of your array
console.log(fruits.length)
//4. Get the first item, the middle item and the last item of the array
console.log(fruits[0], fruits[3], fruits[6])
//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array.The array size should be greater than 5
let mixedDataTypes = [10, 'rice', ['bread', 'butter'], "grace", 'javaScript', { Name: "Abdussomad" }, 'love']
console.log(mixedDataTypes.length)
//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
var itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//7. Print the array using console.log()
console.log(itCompanies)
//8. Print the number of companies in the array
console.log(itCompanies.length)
//9. Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[3], itCompanies[6])
//10. Print out each company
console.log(" ")
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])
//11. Change each company name to uppercase one by one and print them out
console.log(" ")
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())
//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies`)
//13. Check if a certain company exists in the itCompanies array.If it exist return the company else return a company is not found
let company = "Twitter"
if (itCompanies.indexOf(company) === -1) {
    console.log("company is not found")
} else {
    console.log(company)
}
//14. Filter out companies which have more than one 'o' without the filter method
for (let i = 0; i < itCompanies.length; i = i + 1) {
    if (itCompanies[i].split('o').length - 1 >= 2) {
        console.log(itCompanies[i])
    }
}
//15. Sort the array using sort() method
console.log(itCompanies.sort())
//16. Reverse the array using reverse() method
console.log(itCompanies.reverse())
//17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))
//18. Slice out the last 3 companies from the array
console.log(itCompanies.splice(4))
//19. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, 4))
//20. Remove the first IT company from the array
console.log(itCompanies.shift())
//21. Remove the middle IT company or companies from the array
console.log(itCompanies.splice(1, 1))
//22. Remove the last IT company from the array
console.log(itCompanies.pop())
//23. Remove all IT companies
console.log(itCompanies.shift())

//LEVEL 2

//1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file.Access both file in main.js file
import countries from './countries.js'
console.log(countries)

import web_techs from './web_techs.js'
console.log(web_techs)

//2. First remove all the punctuations and change the string to array and count the number of words in the array

// let text =
//     'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

// 13

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace(/[.,]/g, "")
console.log(Array(text))
let word = text.split(" ")
console.log(word)
console.log(word.length)


//3. In the following shopping cart add, remove, edit items

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//- add 'Meat' in the beginning of your shopping cart if it has not been already added
//- add Sugar at the end of you shopping cart if it has not been already added
//- remove 'Honey' if you are allergic to honey
//- modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart.unshift("Meat"))
console.log(shoppingCart.push("Sugar"))
console.log(shoppingCart.splice(4, 1))
shoppingCart[3] = "Green Tea"
console.log(shoppingCart)

//4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.If it does not exist add to the countries list.
console.log(countries.includes("Ethiopia"))
console.log(countries.indexOf("Ethiopia"))
console.log(countries[4].toUpperCase())

//5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.If it does not exist add Sass to the array and print the array.
console.log(web_techs.includes("Sass"))
console.log(web_techs.push("Sass"))
console.log(web_techs)

//6. Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']

// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullstack = frontEnd.concat(backEnd)
console.log(fullstack)

//LEVEL 3

//1. The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//- Sort the array and find the min and max age
//- Find the median age(one middle item or two middle items divided by two)
//- Find the average age(all items divided by number of items)
//- Find the range of the ages(max minus min)
//- Compare the value of(min - average) and(max - average), use abs() method 1.Slice the first ten countries from the countries array
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sortedAges = ages.sort((a, b) => a - b) //ascending, for descending order, formula = ages.sort((a,b) => b-a)
const max = sortedAges[ages.length - 1]
const min = sortedAges[0]
const median = [sortedAges[(ages.length / 2) - 1], sortedAges[ages.length / 2]] // odd - (length-1)/2 even - (length/2 - 1), length/2, odd: (length-1)/2, even: (length/2-1), length/2
const average = sortedAges.reduce((a, b) => a + b, 0) / sortedAges.length;
const range = max - min
console.log({ sortedAges, max, min, median, average, range })
import countriees from './countriees.js'
console.log(countriees.slice(0, 10))
//2. Find the middle country(ies) in the countries array
console.log(countriees[(countriees.length - 1) / 2])
//3. Divide the countries array into two equal arrays if it is even.If countries array is not even, one more country for the first half.
let theMiddleCountry = countriees[(countriees.length - 1) / 2]
console.log(countriees.indexOf(theMiddleCountry))
console.log(countriees.splice(0, 96))

// import { vitamins } from './web_techs.js'
// console.log(vitamins)
