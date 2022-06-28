for (i = 0; i <= 10; i++) {
    console.log({ i })
}

let index = 0;
while (index <= 10) {
    console.log({ index })
    index++
}

let num = 0;
do {
    console.log({ num })
    num++
} while (num <= 10);

for (i = 10; i >= 0; i--) {
    console.log({ i })
}

index = 10;
while (index >= 0) {
    console.log({ index })
    index--
}

num = 10;
do {
    console.log({ num })
    num--
} while (num >= 0);

for (ash = 1; ash <= 7; ash++) {
    console.log('#'.repeat(ash))
}

for (index = 0; index <= 10; index++) {
    console.log(`${index} * ${index} = ${index * index}`)
}

for (index = i; index <= 10; index++) {
    console.log(`${index}   ${index ** 2}   ${index ** 3}`)
}

for (even = 0; even <= 100; even++) {
    if (even % 2 == 0)
        console.log({ even })
}

for (odd = 0; odd <= 100; odd++) {
    if (odd % 2 !== 0)
        console.log({ odd })
}

// for (prime = 0; prime <= 100; prime++) {
//     if ( prime )
//         console.log({ prime })
// }

let sum = 0
for (num = 0; num <= 100; num++) {
    sum = sum + num
}
console.log({ sum })

let evenSum = 0
for (even = 0; even <= 100; even++) {
    if (even % 2 == 0)
        evenSum = evenSum + even
}
console.log({ evenSum })

let oddSum = 0
for (odd = 0; odd <= 100; odd++) {
    if (odd % 2 !== 0)
        oddSum = oddSum + odd
}
console.log({ oddSum })

let arr = Array()
console.log(arr.push(`${evenSum}, ${oddSum}`))
console.log(arr)
arr = []
for (i = 1; i < 6; i++) {
    arr.push(Math.floor(Math.random() * 5))
}
console.log(arr)

//13. Develop a small script which generate array of 5 random numbers.

