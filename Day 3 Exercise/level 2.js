//1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle(area = 0.5 x b x h).

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

var triangleBase = prompt("Enter base of the Triangle")
var triangleHeight = prompt("Enter height of the Triangle")
const areaOfTriangle = 0.5 * triangleBase * triangleHeight
alert("The area of the triangle is " + areaOfTriangle)


//2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle(perimeter = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

var triangleSideA = prompt("Enter side a")
var triangleSideB = prompt("Enter side b")
var triangleSideC = prompt("Enter side c")
const perimeterOfTriangle = (+triangleSideA + +triangleSideB + +triangleSideC)
alert("The perimeter of the Triangle is " + perimeterOfTriangle)


//3. Get length and width using prompt and calculate an area of rectangle(area = length x width and the perimeter of rectangle(perimeter = 2 x(length + width))

var lengthOfRectangle = prompt("Enter your Rectangle length")
var widthOfRectangle = prompt("Enter your Rectangle width")
const areaOfRectangle = lengthOfRectangle * widthOfRectangle
const perimeterOfRectangle = 2 * (+lengthOfRectangle + +widthOfRectangle)
alert("The area of Rectangle " + areaOfRectangle)
alert("The perimeter of Rectangle " + perimeterOfRectangle)

//4. Get radius using prompt and calculate the area of a circle(area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let radius = prompt("Enter your radius")
let pi = 3.14
const areaOfCircle = pi * radius * radius
const circumferenceOfCircle = 2 * pi * radius
alert("The area of the Circle " + Math.round(areaOfCircle))
alert("The circumference of the circle is " + Math.round(circumferenceOfCircle))

//5. Calculate the slope, x - intercept and y - intercept of y = 2x - 2

//6. Slope is m = (y2 - y1) / (x2 - x1).Find the slope between point(2, 2) and point(6, 10)

//7. Compare the slope of above two questions.

//8. Calculate the value of y(y = x2 + 6x + 9).Try to use different x values and figure out at what x value y is 0.

//9. Write a script that prompt a user to enter hours and rate per hour.Calculate pay of the person ?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
let hours = prompt("Enter hours")
let ratePerHour = prompt("Enter rate per hour")
let pay = hours * ratePerHour
alert("Your weekly earning is " + pay)


//10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let myName = "Abdussomad"
if (myName.length > 7) {
    console.log("Your name is long.")
} else {
    console.log("Your name is short.")
}

//11. Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh

let myFirstName = 'Abdussomad'
let familyName = 'Pa-aranti'
if (myFirstName.length > familyName.length) {
    console.log(`Your first name, ${myFirstName} is longer than your family name, ${familyName}`)
} else {
    console.log(`Your family name, ${familyName} is longer than your first name, ${myFirstName}`)
}


//12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
let myAge = 250
let yourAge = 25
if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you.`)
} else {
    console.log(`You are ${yourAge - myAge} years older than me.`)
}

//13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

let userYear = prompt("Enter birth year:")
let userAge = now.getFullYear() - userYear
if (userAge >= 18) {
    alert(`You are ${userAge}. You are old enough to drive`)
} else {
    alert(`You are ${userAge}. You will be allowed to drive after ${18 - userAge} years.`)
}
let agfh = "ekfdjl"
//14. Write a script that prompt the user to enter number of years.Calculate the number of seconds a person can live.Assume some one lives just hundred years
// Enter number of years you live: 100
// You lived 3153600000 seconds.
let enterYears = prompt("Enter number of years you live:")
let secondsLived = enterYears * 31536000
alert(`You lived ${secondsLived} seconds.`)

//15. Create a human readable time format using the Date time object

// YYYY - MM - DD HH: mm
// DD - MM - YYYY HH: mm
// DD / MM / YYYY HH: mm

let createYear = new Date().getFullYear()
let createMonth = new Date().getMonth()
let createDate = new Date().getDate()
let createHour = new Date().getHours()
let createMinute = new Date().getMinutes()

console.log(`${createYear}-${createMonth}-${createDate} ${createHour}:${createMinute}`)
console.log(`${createDate}-${createMonth}-${createYear} ${createHour}:${createMinute}`)
console.log(`${createDate}/${createMonth}/${createYear} ${createHour}:${createMinute}`)