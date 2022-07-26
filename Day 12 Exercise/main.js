//LEVEL 1
//1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
let textA = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`
let patternA = /\d+/g
let toMatchA = textA.match(patternA)
let totalAnnualIncome = toMatchA.reduce((acc, cur, i, arr) => acc +=
    i === 0 || i === arr.length - 1 ? +cur * 12 : +cur, 0)
console.log(totalAnnualIncome)
//2. The position of some particles on the horizontal x - axis - 12, -4, -3 and - 1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.Extract these numbers and find the distance between the two furthest particles.
// points = ['-12', '-4', '-3', '-1', '0', '4', '8']
// sortedPoints = [-4, -3, -1, -1, 0, 2, 4, 8]
// distance = 12
let textB = `The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.`
let patternB = /-\d+|\d+/g
let toMatchB = textB.match(patternB)
let distance = toMatchB.reduce((a, b) => a += b > 0 ? +b : 0, 0)
console.log(distance)
//1. Write a pattern which identify if a string is a valid JavaScript variable

// is_valid_variable('first_name') // True
// is_valid_variable('first-name') // False
// is_valid_variable('1first_name') // False
// is_valid_variable('firstname') // True
//LEVEL 2
//1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string ?

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`


let tenMostFrequentWords = (arr, num) => {
    let patternC = /\w+/g
    let frequentWords = arr.match(patternC)
    let frequentWordsNumbers = frequentWords.reduce((a, b) => {
        a[b] = a[b] + 1 || 1

        return a
    }, {})
    let toTestReduce = Object.entries(frequentWordsNumbers).sort((a, b) => b[1] - a[1]).map((val) => ({ word: val[0], count: val[1] })
    ).slice(0, num)
    return toTestReduce
}
console.log(tenMostFrequentWords(paragraph))
// [
//     { word: 'love', count: 6 },
//     { word: 'you', count: 5 },
//     { word: 'can', count: 3 },
//     { word: 'what', count: 2 },
//     { word: 'teaching', count: 2 },
//     { word: 'not', count: 2 },
//     { word: 'else', count: 2 },
//     { word: 'do', count: 2 },
//     { word: 'I', count: 2 },
//     { word: 'which', count: 1 },
//     { word: 'to', count: 1 },
//     { word: 'the', count: 1 },
//     { word: 'something', count: 1 },
//     { word: 'if', count: 1 },
//     { word: 'give', count: 1 },
//     { word: 'develop', count: 1 },
//     { word: 'capabilities', count: 1 },
//     { word: 'application', count: 1 },
//     { word: 'an', count: 1 },
//     { word: 'all', count: 1 },
//     { word: 'Python', count: 1 },
//     { word: 'If', count: 1 }]
console.log(tenMostFrequentWords(paragraph, 10))
// [{ word: 'love', count: 6 },
// { word: 'you', count: 5 },
// { word: 'can', count: 3 },
// { word: 'what', count: 2 },
// { word: 'teaching', count: 2 },
// { word: 'not', count: 2 },
// { word: 'else', count: 2 },
// { word: 'do', count: 2 },
// { word: 'I', count: 2 },
//     { word: 'which', count: 1 }
// ]
//LEVEL 3
//1. Writ a function which cleans text.Clean the following text.After cleaning, count three most frequent words in the string.
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
let cleanText = (arr) => {
    let result = arr.replace(/%|@|$|&|;|#|!|\$/g, "")
    return result
}
console.log(cleanText(sentence))
//  I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
//
//2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

let mostFrequentWords = (arr) => {
    let patternE = /\w+/g
    let frequentWordsB = arr.match(patternE).reduce((a, b) => {
        a[b] = a[b] + 1 || 1
        return a
    }, {})
    let threeFrequent = Object.entries(frequentWordsB).sort((a, b) => b[1] - a[1]).map((word) => ({ word: word[0], count: word[1] })).slice(0, 3)
    return threeFrequent
}
console.log(mostFrequentWords(sentence))

