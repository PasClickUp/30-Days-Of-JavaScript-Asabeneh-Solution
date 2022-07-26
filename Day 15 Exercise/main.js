//LEVEL 1
//1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    get nameLeg() {
        return `${this.name} has ${this.legs} legs`
    }
}
//2. Create a Dog and Cat child class from the Animal Class.
let Dog = new Animal("Kalbun", 3, "brown", 4)
let Cat = new Animal("Hurairatun", 2, "white", 4)
//LEVEL 2
//1. Override the method you create in Animal class
class child extends Animal {
    constructor(name, age, color, legs, hands, gender) {
        this.gender = gender
        this.hands = hands
    }
    get nameLeg() {
        return `${this.name} has ${this.legs} legs`
    }
}
let Monkey = new Animal("Qirdun", 5, "brown", 2, 2, "male")
//LEVEL 3
//1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
// ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range() // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ', statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ', statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ', statistics.var()) // 17.5
// console.log('Frequency Distribution: ', statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// // you output should look like this
// console.log(statistics.describe())
// Count: 25
// Sum: 744
// Min: 24
// Max: 38
// Range: 14
// Mean: 30
// Median: 29
// Mode: (26, 5)
// Variance: 17.5
// Standard Deviation: 4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
//2. Create a class called PersonAccount.It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods.Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
        this.incomes = []
        this.expenses = []
    }
    addIncome(income) {
        return this.incomes.push(income)
    }
    addExpense(expense) {
        return this.expenses.push(expense)
    }
    get totalIncome() {
        return this.incomes.reduce((a, b) => a + b, 0)
    }
    get totalExpense() {
        return this.expenses.reduce((a, b) => a + b, 0)
    }
    get accountBalance() {
        return `${this.totalIncome - this.totalExpense}`
    }
    get accountInfo() {
        let fullName = `${this.firstname} ${this.lastname}`
        let info = `${fullName} average monthly income is ${this.totalIncome}, His current account balance is ${this.accountBalance}`
        return info
    }
}
let someone = new PersonAccount("Fulaan", "Fulaan")
someone.addIncome(1000)
someone.addIncome(4000)
someone.addIncome(15000)
someone.addExpense(1000)
someone.addExpense(8000)
console.log(someone)