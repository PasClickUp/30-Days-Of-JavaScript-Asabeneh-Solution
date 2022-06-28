//1. Get user input using prompt(“Enter your age:”).If user is 18 or older, give feedback: 'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.

// Enter your age: 15
// You are left with 3 years to drive.

let user = prompt("Enter your age:")
if (user >= 18) {
    alert("You are old enough to drive.")
} else {
    alert(`You are left with ${18 - user} years to drive.`)
}


//2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older(me or you).Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.

let myAge = 25
let userAge = prompt("Enter your age: ")
if (userAge > myAge) {
    alert(`You are ${userAge - myAge} older than me.`)
} else if (userAge === myAge) {
    alert(`We are agemates.`)
} else if (userAge < myAge) {
    alert(`I am ${myAge - userAge} years Older than you.`)
}


//3. If a is greater than b return 'a is greater than b' else 'a is less than b'.Try to implement it in two ways

// using if else
// ternary operator.
// let a = 4
// let b = 3
// 4 is greater than 3

let a = 4
let b = 3
if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${b} is less than ${a}`)
}

console.log(a > b) ? (`${a} is greater than ${b}`) : (`${b} is less than ${a}`)


//4. Even numbers are divisible by 2 and the remainder is zero.How do you check, if a number is even or not using JavaScript ?

// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.

let num = 9
if (num % 2 == 0) {
    console.log(`${num} is an even number`)
} else {
    console.log(`${num} is an odd number`)
}