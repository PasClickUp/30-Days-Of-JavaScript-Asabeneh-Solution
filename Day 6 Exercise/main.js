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
for (i = 0; i <= n; i++) {
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


for (ash = 1; ash <= 7; ash++) {
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

for (index = 0; index <= 10; index++) {
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

for (dex = 1; dex <= 10; dex++) {
    console.log(`${dex}   ${dex ** 2}   ${dex ** 3}`)
}

//7. Use for loop to iterate from 0 to 100 and print only even numbers

for (even = 0; even <= 100; even++) {
    if (even % 2 == 0)
        console.log({ even })
}

//8. Use for loop to iterate from 0 to 100 and print only odd numbers

for (odd = 0; odd <= 100; odd++) {
    if (odd % 2 !== 0)
        console.log({ odd })
}
//9. Use for loop to iterate from 0 to 100 and print only prime numbers

for (let prime = 2; prime <= 100; prime++) {
    if (prime % 2 === 0) {
        console.log({ prime })
    }
}

//10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// The sum of all numbers from 0 to 100 is 5050.

let sum = 0
for (num = 0; num <= 100; num++) {
    sum = sum + num
}
console.log({ sum })

//11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

let evenSum = 0
for (even = 0; even <= 100; even++) {
    if (even % 2 == 0)
        evenSum = evenSum + even
}
let oddSum = 0
for (odd = 0; odd <= 100; odd++) {
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
for (i = 3; i < 8; i++) {
    emptyArrayB.push(Math.floor(Math.random() * 15))
}
console.log(emptyArrayB)
//14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

//15. Develop a small script which generate a six characters random id:

// 5j2khz

let smallRandomId = "abcdefghijklmnopqrstuvwxyz0123456789"
let str = ""
for (i = 1; i < 7; i++) {
    let random = Math.floor(Math.random() * smallRandomId.length)
    str += (smallRandomId[random])
}

console.log(str)