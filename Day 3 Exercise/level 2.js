var triangleBase = prompt("Enter base of the Triangle")
var triangleHeight = prompt("Enter height of the Triangle")
const areaOfTriangle = 0.5 * triangleBase * triangleHeight
alert("The area of the triangle is " + areaOfTriangle)
console.log({ triangleBase })
console.log({ triangleHeight })
console.log({ areaOfTriangle })

var triangleSideA = prompt("Enter side a")
var triangleSideB = prompt("Enter side b")
var triangleSideC = prompt("Enter side c")
const perimeterOfTriangle = (+triangleSideA + +triangleSideB + +triangleSideC)
alert("The perimeter of the Triangle is" + perimeterOfTriangle)
console.log({ triangleSideA })
console.log({ triangleSideB })
console.log({ triangleSideC })

var lengthOfRectangle = prompt("Enter your Rectangle length")
var widthOfRectangle = prompt("Enter your Rectangle width")
const areaOfRectangle = lengthOfRectangle * widthOfRectangle
const perimeterOfRectangle = 2 * (+lengthOfRectangle + +widthOfRectangle)
alert("The area of Rectangle " + areaOfRectangle)
alert("The perimeter of Rectangle " + perimeterOfRectangle)
console.log({ lengthOfRectangle })
console.log({ widthOfRectangle })
console.log({ areaOfRectangle })
console.log({ perimeterOfRectangle })

var radius = prompt("Type in your Radius")
const pi = 3.4
const areaOfCircle = pi * radius * radius
const circumferenceOfCircle = 2 * pi * radius
alert("The area of the Circle is " + areaOfCircle)
alert("The circumference of the Circle is " + circumferenceOfCircle)
console.log({ radius })
console.log({ pi })
console.log({ areaOfCircle })
console.log({ circumferenceOfCircle })

var hours = prompt("Enter hours")
var ratePerHour = prompt("Enter rate per hour")
var pay = hours * ratePerHour
alert("Your weekly earning is " + pay)
console.log(hours)
console.log(ratePerHour)
console.log(pay)

console.log("Abdussomad".length)
let nameLong = "long"
console.log(nameLong)
let firstNamee = 'Abdussomad'
let lastNamee = 'Abdulqodir'
console.log(`My firstname ${firstNamee}, has the same length with our family name, ${lastNamee}`)
let myAge = 250
let yourAge = 25
let older = 250 - 25
console.log(`I am ${older} years older than you.`)

var yearOld = prompt("How old are you?")
if (yearOld >= 18) {
    alert("You are " + yearOld + ". You are old enough to drive")

} else {
    alert("You are" + yearOld + ". You will be allowed to drive after" + (+18 - yearOld) + "years.")
}

var yearsLived = prompt("Enter number of years you lived.")
var secLived = new Date().getSeconds()
alert("You lived" + secLived + "seconds.")

var createYear = new Date().getFullYear()
var createMonth = new Date().getMonth()
var createDate = new Date().getDate()
var createHour = new Date().getHours()
var createMinute = new Date().getMinutes()

console.log(`${createYear}-${createMonth}-${createDate} ${createHour}:${createMinute}`)
console.log(`${createDate}-${createMonth}-${createYear} ${createHour}:${createMinute}`)
console.log(`${createDate}/${createMonth}/${createYear} ${createHour}:${createMinute}`)