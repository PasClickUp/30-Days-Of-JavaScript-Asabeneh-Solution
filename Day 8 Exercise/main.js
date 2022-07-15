//LEVEL 1

//1. Create an empty object called dog
let dog = {};
//2. Print the the dog object on the console
console.log(dog)
//3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "bingo";
dog.legs = 4;
dog.color = "brown";
dog.age = 3;
dog.bark = function () {
    return "woof woof"
}
//4. Get name, legs, color, age and bark value from the dog object
console.log([dog.name, dog.legs, dog.color, dog.age, dog.bark()])
//5. Set new properties the dog object: breed, getDogInfo
dog.breed = "German";
dog.getDogInfo = function () {
    let country = "Nigeria";
    let owner = "aboki"
    let statement = `${this.name} is a dog in ${country}, owned by an ${owner}. It barks ${this.bark()}.`
    return statement
}

//LEVEL 2

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

// 1. Find the person who has many skills in the users object.
let personWithManySkills
let max = 0
for (let user in users) {
    if (users[user].skills.length > max) {
        max = users[user].skills.length
        personWithManySkills = user
    }
}
console.log({ personWithManySkills })
// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
let newAr = []
for (let user in users) {
    if (users[user].isLoggedIn === true) {
        newAr.push(user)
    }
}
let numOfUsersOnline = newAr.length
let newA = []
for (let user in users) {
    if (users[user].points >= 50) {
        newA.push(user)
    }
}
let numOfUsersWithPointsUpToFifty = newA.length
console.log({ numOfUsersOnline, numOfUsersWithPointsUpToFifty })

// 3. Find people who are MERN stack developer from the users object
let aarray = []
for (let user in users) {
    if (users[user].skills[0].includes("MERN")) {
        aarray.push(user)
    }
}
// 4. Set your name in the users object without modifying the original users object

// 5. Get all keys or properties of users object

// 6. Get all the values of users object

// 7. Use the countries object to print a country name, capital, populations and languages.