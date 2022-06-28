let score = 79
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

let month = "August"
if (month === "September" || month === "October" || month === "November") {
    console.log("the season is Autumn")
} else if (month === "December" || month === "January" || month === "February") {
    console.log("the season is Winter")
} else if (month === "March" || month === "April" || month === "May") {
    console.log("the season is spring")
} else {
    console.log("the season is summer")
}

let day = prompt("What is the day today?")
console.log({ day })
if (day === "Saturday" || day === "Sunday") {
    console.log(day + " is a weekend.")
} else {
    console.log(day + " is a working day.")
}
