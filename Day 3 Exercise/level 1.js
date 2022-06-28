//1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Baaqi"
let lastName = "Abdulqodir"
let country = "Nigeria"
let city = "ilorin"
let age = 7
let isMarried = false
let year = 2022
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

//2. Check if type of '10' is equal to 10
console.log(typeof "10" == 10)
//3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10)
//4. Boolean value is either true or false.
//i. Write three JavaScript statement which provide truthy value.
let a = 1000 === parseFloat("1000")
let iAmMarried = true
let c = "I love My Wife."

//ii. Write three JavaScript statement which provide falsy value.
let d = 1000 === "1000"
let iAmNotMarried = false
let e = ""
//5. Figure out the result of the following comparison expression first without using console.log().After you decide the result confirm it using console.log()

//i. 4 > 3
//ii. 4 >= 3
//iii. 4 < 3
//iv. 4 <= 3
//v. 4 == 4
//vi. 4 === 4
//vii. 4 != 4
//viii. 4 !== 4
//ix. 4 != '4'
//x. 4 == '4'
//xi. 4 === '4'
//xii. Find the length of python and jargon and make a falsy comparison statement.

//i. true, because 4 is greater than 3
//ii. true, because 4 is greater and not equal to 3
//iii. false, because 4 is not lesser than 3
//iv. false, because 3 is less and not equal to 4
//v. true, because 4 is equal to 4
//vi. true, because 4 is equivalent to 4
//vii. false, because 4 is equal to 4
//viii. false
//ix. false
//x. true
//xi. false
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

let p = "python"
let j = "jargon"
console.log(p.length)
console.log(j.length)
console.log(p.length !== j.length)

//6. Figure out the result of the following expressions first without using console.log().After you decide the result confirm it by using console.log()

//i. 4 > 3 && 10 < 12 true
//ii. 4 > 3 && 10 > 12 false
//iii. 4 > 3 || 10 < 12 true
//iv. 4 > 3 || 10 > 12 true
//v. !(4 > 3) false
//vi. !(4 < 3) true
//vii. !(false) true
//viii. !(4 > 3 && 10 < 12) false
//ix. !(4 > 3 && 10 > 12) true
//x. !(4 === '4') true
//xi. There is no 'on' in both dragon and python. false
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(!(p.match(/on/gi)))
console.log(!(j.match(/on/gi)))

//7. Use the Date object to do the following activities
//i. What is the year today ?
//ii. What is the month today as a number ?
//iii. What is the date today ?
//iv. What is the day today as a number ?
//v.  What is the hours now ?
//vi. What is the minutes now ?
//vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.

let now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())