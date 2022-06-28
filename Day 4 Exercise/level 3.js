// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
// Write a program which tells the number of days in a month, now consider leap year.



let monthDays = prompt("Enter a month");
if (monthDays === "September" || monthDays === "April" || monthDays === "June" || monthDays === "November") {
    alert(`${monthDays} has 30 days.`)
} else if (monthDays === "February") {
    alert(`${monthDays} has 28 days in a leap year.`)
} else if (monthDays === "January" || monthDays === "March" || monthDays === "May" || monthDays === "July" || monthDays === "August" || monthDays === "October" || monthDays === "December") {
    alert(`${monthDays} has 30 days.`)
}