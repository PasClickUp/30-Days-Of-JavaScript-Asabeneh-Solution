//1. Declare a function fullName and it print out your full name.
function fullNameA() {
    let firstName = "Abdussomad"
    let surNmae = "Abdulqodir"
    let lastName = "Pa-aranti"
    console.log(`${firstName} ${surNmae} ${lastName}`)
}
console.log(fullNameA())

//2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullNameB(firstName, lastName) {
    firstName = "Abdussomad"
    lastName = "Abdulqodir"
    return `${firstName} ${lastName}`
}

console.log(fullNameB())

//3. Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(numA, numB) {
    sum = numA + numB
    return sum
}

console.log("Add numbers: ", addNumbers(3, 7))

//4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
    area = length * width + "cm"
    return area
}
console.log("Area or Rectangle: ", areaOfRectangle(3, 7))

//5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
    perimeter = 2 * (length + width) + "cm"
    return perimeter
}
console.log("Perimeter: ", perimeterOfRectangle(3, 7))

//6.A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, width, height) {
    volume = length * width * height + "cm"
    return volume
}
console.log("Volume: ", volumeOfRectPrism(3, 7, 5))

//7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(r, PI = 3.14) {
    areaOfCircle = PI * r * r
    return areaOfCircle
}
console.log("Area of Circle: ", Math.round(areaOfCircle(3)))

//8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r, PI = 3.14) {
    circumference = 2 * PI * r
    return circumference
}
console.log("Circumference: ", Math.round(circumOfCircle(4)))

//9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
    density = mass / volume
    return density
}
console.log("Density: ", density(30, 15))

//10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speedOfObject(distance, time) {
    speed = (distance / time) + "m/s"
    return speed
}
console.log("Speed: ", speedOfObject(50, 10))

//11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weightOfObject(mass, gravity) {
    weight = mass * gravity + "N"
    return weight
}
console.log("Object Weight: ", weightOfObject(20, 5))

//12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit
function converDegreeFtoDegreeC(oC) {
    oF = ((oC * 9 / 5) + 32) + " oF"
    return oF
}

console.log("Converting from celcius to fahrenheight: ", converDegreeFtoDegreeC(20))

//13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function CalculateBMI(weight, height) {
    let BMI = weight / height * height
    if (BMI < 18.5) {
        console.log("Underweight")
    } else if (BMI > 18.5 && BMI < 24.9) {
        console.log("Normal weight")
    } else if (BMI > 25 && BMI < 29.9) {
        console.log("Overweight")
    } else if (BMI > 30) {
        console.log("Obese")
    }
}

CalculateBMI(27, 25)
//14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
// let month = prompt("Enter Month")
function checkSeason(month) {
    if (month === "march" || month === "april" || month === "may") {
        return "Spring"
    } else if (month === "june" || month === "july" || month === "august") {
        return "Summer"
    } else if (month === "september" || month === "october" || month === "november") {
        return "Autum"
    } else if (month === "december" || month === "january" || month === "february") {
        return "Winter"
    } else {
        return "Not a month"
    }
}

console.log(checkSeason("JaNUaRy".toLowerCase()))

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

function findMax(a, b, c) {
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    } else if (c > a && c > b) {
        return c
    } else {
        return "all numbers are equal"
    }
}

console.log(findMax(1, 1, 1.1))

//LEVEL 2

// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

//     console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
// 3. Declare a function name printArray.It takes array as a parameter and it prints out each value of the array.
function printArray(array) {
    for (let a = 0; a < array.length; a++) {
        console.log(array[a])
    }
}

printArray(["HTML", "CSS", "javaScript", "React", "Redux"])

// 4. Write a function name showDateTime which shows time in this format: 08 / 01 / 2020 04: 08 using the Date object.
//     showDateTime()
// 08 / 01 / 2020 04: 08
function showDateTime() {
    let now = new Date()
    let day = now.getDate()
    let month = now.getMonth() + 1
    let year = now.getFullYear()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    console.log(`${day} / ${month} / ${year} ${hours}: ${minutes}`)
}
showDateTime()
// 5. Declare a function name swapValues.This function swaps value of x to y.

//     swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
// 6. Declare a function name reverseArray.It takes array as a parameter and it returns the reverse of the array(don't use method).

// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']
function reverseArray(array) {
    let emptyarr = []
    for (let b = array.length - 1; b >= 0; b--) {
        emptyarr.push(array[b])
    }
    console.log(emptyarr)
}
reverseArray(['A', 'B', 'C'])
// 7. Declare a function name capitalizeArray.It takes array as a parameter and it returns the - capitalizedarray.
let meal = ["rice", "beans", "poundo yam", "bread"]
let capitalizeMeal = meal.map((food) => food.toUpperCase())
console.log(capitalizeMeal)
// 8. Declare a function name addItem.It takes an item parameter and it returns an array after adding the item
let addItem = (item) => {
    let meal = ["rice", "beans", "poundo yam", "bread"]
    meal.push(item)
    return meal
}
console.log(addItem("butter"))
// 9. Declare a function name removeItem.It takes an index parameter and it returns an array after removing an item
let removeItem = (index) => {
    let meal = ["rice", "beans", "poundo yam", "bread", "butter", "Cornflakes"]
    meal.splice(index, 1)
    return meal
}
console.log(removeItem(4))
// 10. Declare a function name sumOfNumbers.It takes a number parameter and it adds all the numbers in that range.
let sumOfNumbers = (number) => {
    let sum = 0
    for (let n = 0; n < number; n++) {
        sum = sum + n
    }
    return sum
}
console.log(sumOfNumbers(10))

// 11. Declare a function name sumOfOdds.It takes a number parameter and it adds all the odd numbers in that - range.
let sumOfOdds = (number) => {
    let sum = 0
    for (let n = 0; n < number; n++) {
        if (n % 2 !== 0) {
            sum = sum + n
        }
    }
    return sum
}
console.log(sumOfOdds(10))
// 12. Declare a function name sumOfEven.It takes a number parameter and it adds all the even numbers in that - range.
let sumOfEven = (number) => {
    let sum = 0
    for (let n = 0; n < number; n++) {
        if (n % 2 === 0) {
            sum = sum + n
        }
    }
    return sum
}
console.log(sumOfEven(10))
// 13. Declare a function name evensAndOdds.It takes a positive integer as parameter and it counts number of evens and odds in the number.
//     evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
let evensAndOdds = (number) => {
    let even = 0
    let odd = 0
    for (let n = 0; n <= number; n++) {
        if (n % 2 === 0) {
            even++
        } else {
            odd++
        }
    }
    return `The number of odds are ${odd}. \nThe number of evens are ${even}.`
}
console.log(evensAndOdds(100))
// 14. Write a function which takes any number of arguments and return the sum of the arguments

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
let sumArguments = (...args) => {
    let sum = 0
    for (let s = 0; s < args.length; s++) {
        sum = sum + args[s]
    }
    return sum
}
console.log(sumArguments(1, 3, 5, 10, 11))
// 15. Write a function which generates a randomUserIp.
//IP addresses are expressed as a set of four numbers — an example address might be 192.158. 1.38. Each number in the set can range from 0 to 255.
let randomUserIp = () => {
    return `${Math.floor(Math.random() * 250)}.${Math.floor(Math.random() * 250)}.${Math.floor(Math.random() * 250)}.${Math.floor(Math.random() * 250)}`
}

console.log(randomUserIp())
// 16. Write a function which generates a randomMacAddress
//A valid MAC address must satisfy the following conditions: It must contain 12 hexadecimal digits. One way to represent them is to form six pairs of the characters separated with a hyphen (-) or colon(:). For example, 01-23-45-67-89-AB is a valid MAC address.
let randomMacAddress = () => {
    let alpha = "ABCDEF"
    let emptyStr = ""
    for (let a = 0; a < 2; a++) {
        emptyStr += alpha.charAt(Math.floor(Math.random() * alpha.length))
    }
    return `${Math.floor(Math.random() * 90)}-${Math.floor(Math.random() * 90)}-${Math.floor(Math.random() * 90)}-${Math.floor(Math.random() * 90)}-${Math.floor(Math.random() * 90)}-${emptyStr}`
}
console.log(randomMacAddress())
// 17. Declare a function name randomHexaNumberGenerator.When this function is called it generates a random hexadecimal number.The function return the hexadecimal number.
//     console.log(randomHexaNumberGenerator());
// '#ee33df'
let randomHexaNumberGenerator = () => {
    let hexaStr = "#"
    let alphanum = "e3df"
    for (let n = 0; n < 6; n++) {
        hexaStr += alphanum.charAt(Math.floor(Math.random() * alphanum.length))
    }
    return hexaStr
}
console.log(randomHexaNumberGenerator())
// 18. Declare a function name userIdGenerator.When this function is called it generates seven character id.The function return the id.

//     console.log(userIdGenerator());
// 41XTDbE

let userIdGenerator = () => {
    let userId = "4159ABDXPFE"
    let userStr = ""
    for (let u = 0; u < 7; u++) {
        userStr += userId.charAt(Math.floor(Math.random() * userId.length))
    }
    return userStr
}
console.log(userIdGenerator())

// LEVEL 3

// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser.It doesn’t take any parameter but it takes two inputs using prompt().One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

//     userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
let userIdGeneratedByUser = () => {
    let alphanumerics = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let ids = []
    let numOfId = Number(prompt("How many ids do you want to generate?"))
    let noOfCharacters = Number(prompt("in how many characters?"))
    for (let i = 0; i < numOfId; i++) {
        id[i] = ""
        for (let j = 0; j < noOfCharacters; j++) {
            id[i] += alphanumerics.charAt(Math.floor(Math.random() * alphanumerics.length))
        }
    }
    console.log(ids)
    ids.forEach(function (ide) {
        console.log(ide)
    })
}
// userIdGeneratedByUser()
// 2. Write a function name rgbColorGenerator and it generates rgb colors.
//     rgbColorGenerator()
// rgb(125, 244, 255)
let rgbColorGenerator = () => {
    console.log(`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`)
}
rgbColorGenerator()
// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
let arrayOfHexaColors = () => {
    let emptyarr = []
    let ashStr = "#"
    let hexaStr = "abcdef0123456789"
    for (let h = 0; h < 6; h++) {
        ashStr += hexaStr[(Math.floor(Math.random() * hexaStr.length))]
    }
    emptyarr.push(ashStr)
    console.log(emptyarr)
}
arrayOfHexaColors()
// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
let arrayOfRgbColors = () => {
    let emptyarr = []
    let rgb = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    emptyarr.push(rgb)
    console.log(emptyarr)
}
arrayOfRgbColors()
// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
let convertHexaToRgb = (hex) => {
    let red = hex.slice(1, 3)
    let green = hex.slice(3, 5)
    let blue = hex.slice(5)
    return `rgb("+parseInt(${red, 16})+","+parseInt(${green, 16})+","+parseInt(${blue, 16})+")`
}
// console.log(convertHexaToRgb("#ff2200"))
// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

// 7. Write a function generateColors which can generate any number of hexa or rgb colors.
//     console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(array) {
    let result = array.sort()
    return result
}
console.log(shuffleArray(["rice", "bread", "and", "beans"]))
// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(number) {
    let product = 1
    for (let n = 1; n <= number; n++) {
        product = product * n
    }
    console.log(product)
}
factorial(5)
// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
let isEmpty = (parameter) => {
    if (parameter === undefined || parameter === null || parameter.length <= 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}
isEmpty("bread")
// 11. Call your function sum, it takes any number of arguments and it returns the sum.

let sumArgument = (number) => {
    let toSum = 0
    for (let m = 0; m < number; m++) {
        toSum = toSum + m
    }
    console.log(toSum)
}
sumArgument(5)

// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items.Check if all the array items are number types.If not give return reasonable feedback.
let sumOfArrayItems = (array) => {
    let total = 0
    for (let a = 0; a < array.length; a++) {
        if (typeof array[a] === "number") {
            total += array[a]
        }
    }
    return total
}
console.log(sumOfArrayItems([1, "rice", 3, 2, 7, 4]))
// 13. Write a function called average, it takes an array parameter and returns the average of the items.Check if all the array items are number types.If not give return reasonable feedback.
let average = (array) => {
    let sum = 0
    let numArr = []
    let result = 0
    // for (let r = 0; r < array.length; r++) {
    //     if (typeof array[r] === "number") {
    //         sum = sum + array[r] / array.length
    //         // result = sum / array[r].length
    //     }
    // }
    array.forEach((item) => {
        if (typeof item === 'number') {
            numArr.push(item)
            sum = sum + item
        }
    })
    result = sum / numArr.length
    console.log(numArr.length, sum)
    return result
}
console.log(average([1, 3, 5, 5, "bread", 5]))
// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array.If the array length is less than five it return 'item not found'.

//console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']);
// ['Avocado', 'Tomato', 'Potato', 'Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']);
// ['Google', 'Facebook', 'Apple', 'Amazon', 'MICROSOFT', 'IBM']
// console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']);
// 'Not Found'
let modifyArray = (array) => {
    if (array.length < 5) {
        console.log("item not found");
        return
    }

    let newArray = array.map((item, itemIndex) => {
        if (itemIndex == 4) {
            return item.toUpperCase()
        }
        return item
    })
    console.log(newArray)

}

modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'potato'])
// 15. Write a function called isPrime, which checks if a number is prime number.
let isPrime = (num) => {
    if (num < 2) return `not prime number`
    for (let i = 2; i < num; i++)
        if (num % i === 0) {
            return `not prime number`
        }
    return `prime number`
}
console.log(isPrime(9))
// 16. Write a functions which checks if all items are unique in the array.
let uniqueItems = (array) => {
    if (array.every(b => b == array[0])) {
        console.log(true)
    } else {
        console.log(false)
    }
}
uniqueItems(["bread", "butter", 1]) //false
uniqueItems([1, 1, 1]) //true
uniqueItems([1, 2, 1, 3, 4]) //false
// 17. Write a function which checks if all the items of the array are the same data type.
let checkSameDataTypes = (array) => {
    if (array.every((a) => typeof a === typeof array[0])) {
        console.log(true)
    } else {
        console.log(false)
    }
}
checkSameDataTypes([1, 3, 4, 5]) //true
checkSameDataTypes([1, 3, 5, 6, "butter"]) //false
checkSameDataTypes(["live", "worship", "enjoy", "leave"])//true
// 18. JavaScript variable name does not support special characters or symbols except $ or _.Write a function isValidVariable which check if a variable is valid or invalid variable.

// 19. Write a function which returns array of seven random numbers in a range of 0 - 9. All the numbers must be unique.

//     sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
let sevenRandomNumbers = () => {
    let emptyarr = []
    for (let index = 0; index < 7; index++) {
        emptyarr.push(Math.floor(Math.random() * 9))
    }
    console.log((emptyarr))
}
sevenRandomNumbers()
// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array. 

let reverseCountries = (array) => {
    array.reverse()
    console.log(array)
}
reverseCountries(["Nigeria", "Saudi-Arabia", "Dubai", "Qatar", "Palestine", "Gaza"])