//1. Declare a function fullName and it print out your full name.
function fullNameA() {
    let firstName = "Abdussomad"
    let surNmae = "Abdulqodir"
    let lastName = "Pa-aranti"
    let space = " "
    console.log(firstName + space + surNmae + space + lastName)
}
console.log(fullNameA())

//2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullNameB(firstName, lastName) {
    firstName = "Abdussomad"
    space = " "
    lastName = "Abdulqodir"
    return firstName + space + lastName
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
    degreeFahrenheit = ((oC * (9 / 5)) + 32) + " oF"
    return degreeFahrenheit
}

console.log("Converting from celcius to fahrenheight: ", converDegreeFtoDegreeC(20))

/*
Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more
*/

function BMI(weight, height) {
    bmi = weight / (height * height)
    if (bmi < 18.5) {
        return "Underweight"
    } else if (bmi === 18.5 < 24.9) {
        return "Normal weight"
    } else if (bmi === 25 < 29.9) {
        return "Overweight"
    } else {
        return "Obese"
    }
}

console.log("BMI: ", BMI(77, 0.8))

//14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
    // month = ""
    if (month = "March" || "April" || "May") {
        return "Spring"
    } else if (month = "June" || "July" || "August") {
        return "Summer"
    } else if (month = "September" || "October" || "November") {
        return "Autum"
    } else if (month = "December" || "January" || "February") {
        return "Winter"
    } else {
        return "Not a month"
    }
}

console.log(checkSeason("December"))

/*
15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
*/