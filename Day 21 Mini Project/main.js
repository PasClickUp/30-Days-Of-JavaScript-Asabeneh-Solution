//DOM: Mini project 1
//1. Develop the following application, use the following HTML elements to get started with.You will get the same code on starter folder.Apply all the styles and functionality using JavaScript only.
//a. The year color is changing every 1 second
//b. The date and time background color is changing every on seconds
//c. Completed challenge has background green
//d. Ongoing challenge has background yellow
//e. Coming challenges have background red
let lists = document.querySelectorAll('li')

let all = document.querySelector('div')
let text = document.querySelector('ul')
let underline = document.querySelector('h2')
let span = document.querySelector('span')
let date = document.querySelector('h3')

underline.style.textDecoration = 'underline'
underline.style.fontSize = '22px'
text.style.justifyItems = 'center'
all.style.textAlign = 'center'
all.style.maxWidth = '50%'
all.style.padding = '0'
all.style.margin = 'auto'
span.style.fontSize = '70px'
date.style.marginLeft = '14rem'
date.style.marginRight = '14rem'
date.style.fontSize = '18px'
date.style.padding = '0.5rem'

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let currentDate = () => {
    let now = new Date()
    let month = months[now.getMonth()]
    let date = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
    let year = now.getFullYear()
    let hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours()
    let minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
    let seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()
    return `${month} ${date}, ${year} ${hour}:${minute}:${seconds}`
}


let generateColor = () => {
    let Alphanumeric = '0123456789abcdef'
    let emptyStr = ''
    let index
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * Alphanumeric.length)
        index = Alphanumeric[index]
        emptyStr = emptyStr + index
    }
    return '#' + emptyStr
}

setInterval(() => {
    span.style.color = generateColor()
    date.innerHTML = currentDate()
    date.style.backgroundColor = generateColor()
}, 1000)

lists.forEach((list, i) => {
    list.style.padding = '1rem'
    list.style.marginTop = '4px'
    list.style.paddingRight = '19rem'
    if (i > 1) {
        list.style.backgroundColor = '#ff3d49'
    }
})
lists[0].setAttribute('id', 'completed')
lists[0].style.backgroundColor = '#00cf72'
lists[1].style.backgroundColor = '#fce818'
