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
    if (true) {
        return "woof woof"
    }
}

//4. Get name, legs, color, age and bark value from the dog object

let theDog = Object.assign({}, dog)
console.log(theDog)
let theDogValues = Object.values(theDog)
console.log(theDogValues)

//5. Set new properties the dog object: breed, getDogInfo

theDog.breed = "German";
theDog.getDogInfo = function () {
    let country = "Nigeria";
    let owner = "aboki"
    let statement = `${this.name} is a dog in ${country}, owned by an ${owner}. It barks ${this.bark()}.`
    return statement
}
