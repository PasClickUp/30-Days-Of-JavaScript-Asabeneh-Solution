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
    let momth = "July"
    if (month === "March" || month === "April" || momth === "May") {
        return "Spring"
    } else if (month === "June" || month === "July" || month === "August") {
        return "Summer"
    } else if (month === "September" || month === "October" || month === "November") {
        return "Autum"
    } else if (month === "December" || month === "January" || month === "February") {
        return "Winter"
    } else {
        return "Not a month"
    }
}

console.log(checkSeason("January"))

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

console.log(`${Math.floor(Math.random() * 250)}.${Math.floor(Math.random() * 250)}.${Math.floor(Math.random() * 250)}.${Math.floor(Math.random() * 250)}`)
// 16. Write a function which generates a randomMacAddress
//A valid MAC address must satisfy the following conditions: It must contain 12 hexadecimal digits. One way to represent them is to form six pairs of the characters separated with a hyphen (-) or colon(:). For example, 01-23-45-67-89-AB is a valid MAC address.
let twoAlphabets = () => {
    let alpha = "ABCDEF"
    let emptyStr = ""
    for (let a = 0; a < 2; a++) {
        emptyStr += alpha.charAt(Math.floor(Math.random() * alpha.length))
    }
    return emptyStr
}
console.log()
console.log(`${Math.floor(Math.random() * 90)}-${Math.floor(Math.random() * 90)}-${Math.floor(Math.random() * 90)}-${Math.floor(Math.random() * 90)}-${Math.floor(Math.random() * 90)}-${twoAlphabets()}`)

// 17. Declare a function name randomHexaNumberGenerator.When this function is called it generates a random hexadecimal number.The function return the hexadecimal number.
//     console.log(randomHexaNumberGenerator());
// '#ee33df'

// 18. Declare a function name userIdGenerator.When this function is called it generates seven character id.The function return the id.

//     console.log(userIdGenerator());
// 41XTDbE
