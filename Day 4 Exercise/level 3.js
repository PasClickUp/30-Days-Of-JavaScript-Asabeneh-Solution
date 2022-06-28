var monthDays = "February"
if (monthDays === "September" || monthDays === "April" || monthDays === "June" || monthDays === "November") {
    console.log(monthDays + "  has 30 days.")
} else if (monthDays === "February") {
    console.log(monthDays + " has 28 days in a leap year.")
} else {
    console.log(monthDays + " has 31 days.")
}