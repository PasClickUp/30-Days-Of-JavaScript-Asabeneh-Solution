//1. Write a code which can give grades to students according to theirs scores:
// 80 - 100, A
// 70 - 89, B
// 60 - 69, C
// 50 - 59, D
// 0 - 49, F

let score = 100
if (score >= 80 && score <= 100) {
    console.log("A")
} else if (score >= 70 && score <= 89) {
    console.log("B")
} else if (score >= 60 && score <= 79) {
    console.log("C")
} else if (score >= 50 && score <= 59) {
    console.log("D")
} else {
    console.log("F")
}

//2. Check if the season is Autumn, Winter, Spring or Summer.If the user input is:
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let month = "July";
if (month === "September" || month === "October" || month === "November") {
    console.log("the season is Autumn.")
} else if (month === "December" || month === "January" || month === "February") {
    console.log("the season is Winter.")
} else if (month === "March" || month === "April" || month === "May") {
    console.log("the season is Spring.")
} else if (month === "June" || month === "July" || month === "August") {
    console.log("the season is Summer.")
}


//3. Check if a day is weekend day or a working day.Your script will take day as an input.
//     What is the day  today ? Saturday
//     Saturday is a weekend.

//     What is the day today ? saturDaY
//     Saturday is a weekend.

//     What is the day today ? Friday
//     Friday is a working day.

//     What is the day today ? FrIDAy
//     Friday is a working day.

let day = prompt("What is the day today?")
if (day === "Saturday" || day === "Sunday") {
    alert(`${day} is a weekend.`)
} else {
    alert(`${day} is a working day.`)
}