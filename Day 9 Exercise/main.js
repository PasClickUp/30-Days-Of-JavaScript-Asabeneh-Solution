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
let pricesAndValue = products.filter((score) => score)
console.log(pricesAndValue)
//16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = countries.map((country) => country.toLocaleLowerCase())
console.log(getStringLists)
//17. Use reduce to sum all the numbers in the numbers array.
let addNumbers = numbers.reduce((num, ber) => num + ber, 0)
console.log(addNumbers)
//18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let concatenateCountries = countries.reduce((acc, cur) => `Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries.`)
console.log(concatenateCountries)
//19. Explain the difference between some and every
    
//20. Use some to check if some names' length greater than seven in names array
//21. Use every to check if all the countries contain the word land
//22. Explain the difference between find and findIndex.
//23. Use find to find the first country containing only six letters in the countries array
//24. Use findIndex to find the position of the first country containing only six letters in the countries array
//25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
//26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.