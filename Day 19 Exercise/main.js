//Level 1
//1. Create a closure which has one inner function


function printName() {
    let name = "Abdussomad"
    function fullName() {
        let surName = "Abdulqodir"
        let lastname = "Pa-aranti"
        let fullName = `${name} ${surName} ${lastname}`
        return fullName
    }
    return fullName()
}
console.log(printName())
//Level 2
//1. Create a closure which has three inner functions
function children() {
    let familyName = "Pa-aranti"
    function firstChild() {
        let name = "Abdussomad"
        return `${name} ${familyName}`
    }
    function secondChild() {
        let name = "Abdurrahmaan"
        return `${name} ${familyName}`
    }
    function thirdChild() {
        let name = "Mubaarak"
        return `${name} ${familyName}`
    }
    return {
        firstChild: firstChild(),
        secondChild: secondChild(),
        thirdChild: thirdChild()
    }
}
console.log(children().firstChild)
console.log(children().secondChild)
console.log(children().thirdChild)
//Level 3
//1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables.It has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance inner functions.Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
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
