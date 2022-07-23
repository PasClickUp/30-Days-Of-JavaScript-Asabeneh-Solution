class practising {
    constructor(firstName, wife, number, job) {
        console.log(this)
        this.firstName = firstName
        this.wife = wife
        this.number = number
        this.job = job
        this.skills = []
    }

    get forNameJob() {
        let nameJob = `${this.firstName}'s job is ${this.job} `
        return nameJob
    }
    get getSkills() {
        return this.skills
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
}

let mySelf = new practising("Abdussomad", "Zainab", 1, "Software Developer")
let myFriend = new practising("Baasit", "Maryam", "2", "Business")
my
myFriend.setSkill = "freelancing"
// mySelf.
console.log(mySelf, myFriend.forNameJob, myFriend.skills)

