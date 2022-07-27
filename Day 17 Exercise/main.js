//LEVEL 1
//1. Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem("first name", "fulaan")
localStorage.setItem("last name", "fulaan")
localStorage.setItem("age", 24)
localStorage.setItem("country", "Nigeria")
localStorage.setItem("city", "Ilorin")
console.log(localStorage)
//LEVEL 2
//1. Create a student object.The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
let student = {
    firstName: "fulaan",
    lastName: "fulaan",
    age: 24,
    skills: ["HTML", "CSS", "javaScript"],
    country: "Nigeria"
}
let stringifiedStudent = JSON.stringify(student, undefined, 4)
localStorage.setItem("student", stringifiedStudent)
//LEVEL 3
//1. Create an object called personAccount.It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods.Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
let personAccount = {
    firstname: "fulaan",
    lastname: "fulaan",
    incomes: [],
    expenses: [],
    totalIncome() {
        return this.incomes.reduce((a, b) => a + b, 0)
    },
    totalExpense() {
        return this.expenses.reduce((a, b) => a + b, 0)
    },
    accountInfo() {
        return `This account belongs to ${this.firstname} ${this.lastname}, His current total monthly income is ${this.totalIncome()} and His extimated total expenses is ${this.totalExpense()} while his current account balance is ${this.accountBalance()}`
    },
    addIncome(income) {
        this.incomes.push(income)
    },
    addExpense(expense) {
        this.expenses.push(expense)
    },
    accountBalance() {
        return `${this.totalIncome() - this.totalExpense()}`
    }
}
personAccount.addIncome(5000)
personAccount.addIncome(10000)
personAccount.addIncome(150000)
personAccount.addExpense(10000)
personAccount.addExpense(50000)
personAccount.addExpense(5000)
