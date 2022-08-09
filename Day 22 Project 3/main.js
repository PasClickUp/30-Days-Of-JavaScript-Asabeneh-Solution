let body = document.body

let container = document.createElement('div')
container.style.display = 'grid'

let header = document.createElement('header')
let year = document.createElement('span')
let challenge = document.createElement('span')
let date = document.createElement('span')
date.style.marginTop = '0.5rem'

let secondContainer = document.createElement('div')
secondContainer.style.display = 'grid'

let lists = document.createElement('div')
let author = document.createElement('span')
let icons = document.createElement('div')
let aboutSection = document.createElement('span')

let img1 = document.createElement('img')
let img2 = document.createElement('img')
let img3 = document.createElement('img')

let aboutAuthor = document.createElement('p')

let img1link = document.createElement('a')
let img2link = document.createElement('a')
let img3link = document.createElement('a')

let authorContainer = document.createElement('div')

let subContainer = document.createElement('div')
let subContainer1 = document.createElement('div')
let subsecondContainer = document.createElement('div')

let titleHead = document.createElement('h3')
let skillHead = document.createElement('h3')
let qualificationHead = document.createElement('h3')

let skillSet = document.createElement('div')
let skillSetHead = document.createElement('h3')
let skillSetContainer = document.createElement('div')


img1.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/174/174857.png')
img2.setAttribute('src', 'https://image.similarpng.com/very-thumbnail/2020/06/Black-icon-Twitter-logo-transparent-PNG.png')
img3.setAttribute('src', 'https://cdn3.vectorstock.com/i/1000x1000/27/97/github-logo-icon-vector-25322797.jpg')

img1link.setAttribute('href', 'https://www.linkedin.com/in/abdussomad-pa-aranti-533731245')
img2link.setAttribute('href', 'https://twitter.com/Abdusso40966801?t=zogHpnBzXzj9fC67vmMXWg&s=08')
img3link.setAttribute('href', 'https://github.com/PasClickUp')


body.append(container)
body.append(secondContainer)

container.append(header)
container.append(year)
container.append(challenge)
container.append(date)

secondContainer.append(lists)
secondContainer.append(author)
secondContainer.append(icons)
// secondContainer.append(aboutSection)
secondContainer.append(aboutAuthor)
secondContainer.append(authorContainer)
secondContainer.append(skillSet)

img1link.append(img1)
img2link.append(img2)
img3link.append(img3)

icons.append(img1link, img2link, img3link)
authorContainer.append(subContainer, subContainer1, subsecondContainer)
subContainer.append(titleHead)
subContainer1.append(skillHead)
subsecondContainer.append(qualificationHead)

skillSet.append(skillSetHead)
skillSet.append(skillSetContainer)

let generateColor = () => {

    let str = '0123456789abcdef';

    let color = '';

    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        index = str[index]
        color += index
    }
    return '#' + color
}

let dateFunction = () => {

    let date = new Date()
    let month = date.toLocaleString('default', { month: 'long' })
    let day = date.getDate()
    let year = date.getFullYear()
    let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    10 > hours ? '0' + hours : hours;

    return ` ${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`

}
setInterval(() => {
    year.style.color = generateColor()
    date.style.background = generateColor()
    date.innerHTML = dateFunction()
}, 1000);

header.textContent = 'Abdussomad Abdulqodir Challenges in'
year.textContent = '2022'
challenge.textContent = '30DaysOfJavaScript Challenge'
author.textContent = 'Abdussomad Abdulqodir Pa-aranti'
aboutAuthor.textContent = 'I am an educator, developer, motivator and a Student of Knowledge. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'

titleHead.textContent = 'Titles'
skillHead.textContent = 'Skills'
qualificationHead.textContent = 'Qualifications'
skillSetHead.textContent = 'Keywords'
body.style.display = 'grid'
body.style.placeItems = 'center'
body.style.margin = 'auto'
body.style.padding = '0'
body.style.width = '100%'

let challenges = [
    {
        name: '30 Days Of Python',
        topics: [
            'Python',
            'Flask',
            'Numpy',
            'Pandas',
            'Statistics',
            'API',
            'MongoDB'
        ],
        days: 30,
        status: 'Done',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
    },
    {
        name: '30 Days Of JavaScript',
        topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
        days: 30,
        status: 'Ongoing',
        questions: 'Above 500',
        projects: 'About 30',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
    },
    {
        name: '30 Days Of HTML & CSS',
        topics: ['HTML & CSS', 'CSS', 'Flex', 'Grid', 'CSS Animation'],
        days: 30,
        status: 'Coming',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
    },
    {
        name: '30 Days Of React',
        topics: [
            'React',
            'React Router',
            'Redux',
            'Context API',
            'React Hooks',
            'MERN'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
    },
    {
        name: '30 Days Of ReactNative',
        topics: ['ReactNative', 'Redux'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
    },
    {
        name: '30 Days Of Fullstack',
        topics: ['Fullstack', 'React', 'Redux', 'MongoDB', 'Node', 'MERN'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
    },
    {
        name: '30 Days Of Data Analysis',
        topics: ['Data Analysis', 'Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
    },
    {
        name: '30 Days Of Machine Learning',
        topics: [
            'Machine Learning',
            'Python',
            'Numpy',
            'Pandas',
            'Scikit-learn',
            'Scipy',
            'Linear Algebra',
            'Statistics',
            'Visualization'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
    }
]

let skills = [
    '✅ Web Development',
    '✅ Data Analysis',
    '✅ Data Visualization',
    '✅ Programming',
    '✅ Databases',
    '✅ Developing API'
]

let titles = [
    '🌱 Educator',
    '💻 Programmer',
    '🌐 Developer',
    '🔥 Motivator',
    '📔 Content Creator'
]

let qualifications = [
    '📖 MSc. Computer Science Ongoing',
    '👮 BSc. Information and Communication Eng.',
    '👮 MSc. Food Technology',
    '👮 BSc.Food Technology'
]


let keywords = [
    'HTML',
    'HTML5',
    'CSS',
    'CSS3',
    'JS',
    'JavaScript',
    'ES6',
    'Promise',
    'async await',
    'Database',
    'React',
    'React Hooks',
    'Context API',
    'React Router',
    'Web Storage',
    'localStorage',
    'sessionStorage',
    'Redux',
    'Node',
    'MongoDB',
    'SQL',
    'API',
    'DOM',
    'data science',
    'MERN',
    'Python',
    'Flask',
    'Statistics',
    'Linear Algebra',
    'Numpy',
    'Pandas',
    'Scipy',
    'Scikit-learn',
    'Visualization',
    'D3.js'
]

for (let item of challenges) {

    let listContainer = document.createElement('div')
    let name = document.createElement('div')
    let skill = document.createElement('details')
    let status = document.createElement('div')

    name.textContent = item.name
    status.innerText = item.status

    item.topics.forEach((item, index) => {
        let summary = document.createElement('summary')
        summary.innerText = item
        skill.append(summary)
    })

    listContainer.append(name, skill, status)
    lists.append(listContainer)


    listContainer.style.display = 'flex'
    listContainer.style.justifyContent = 'space-between'
    // listContainer.style.alignItems = 'center'
    listContainer.style.background = 'red'
    listContainer.style.padding = '20px'
    listContainer.style.marginBottom = '5px'


    if (item.status.includes('Done')) {

        name.style.color = 'royalblue';
        name.style.textDecoration = 'underline';
        name.style.textDecorationColor = 'blue';
        listContainer.style.background = 'green'

    } else if (item.status.includes('Ongoing')) {

        name.style.color = 'royalblue';
        name.style.textDecoration = 'underline';
        name.style.textDecorationColor = 'blue';
        listContainer.style.background = 'yellow'

    }
}

for (let title of titles) {

    let titleList = document.createElement('div')
    titleList.append(title)
    subContainer.append(titleList)
}

for (let skill of skills) {

    let skillList = document.createElement('div')
    skillList.append(skill)
    subContainer1.append(skillList)
}

for (let quality of qualifications) {

    let qualityList = document.createElement('div')
    qualityList.append(quality)
    subsecondContainer.append(qualityList)
}

for (let keys of keywords) {
    let key = document.createElement('div')
    key.append('# ' + keys)
    skillSetContainer.append(key)

    key.style.marginRight = '15px'
    key.style.background = generateColor()
    key.style.padding = '6px 10px 6px 6px'
    key.style.marginTop = '6px'
    key.style.borderRadius = '1rem'

    skillSetContainer.style.margin = '2rem 0 0 0'
    skillSetContainer.style.display = 'flex'
    skillSetContainer.style.flexWrap = 'wrap'
}

body.style.fontFamily = 'ubuntu'
body.style.boxSizing = 'border-box'

container.style.textAlign = 'center'

secondContainer.style.margin = '0 auto'
secondContainer.style.width = '60%'
secondContainer.style.fontSize = '1em'

// header.style.display = 'inline'
header.style.fontSize = '22px'

// year.style.display = 'inline'
year.style.fontSize = '64px'
year.style.marginLeft = '4px'

challenge.style.fontSize = '22px'
challenge.style.fontWeight = 100
challenge.style.textDecoration = 'underline'

date.style.padding = '5px 20px'
date.style.display = 'inline'

lists.style.margin = '1rem 0'

author.style.margin = '0 0 0.3em 0'
author.style.textAlign = 'center'

img1.style.height = '35px'
img2.style.height = '35px'
img3.style.height = '35px'

img1.style.borderRadius = '50%'
img2.style.borderRadius = '50%'
img3.style.borderRadius = '50%'

img1.style.marginRight = '0.5em'
img2.style.marginRight = '0.5em'
img3.style.marginRight = '0.5em'

icons.style.display = 'flex'
icons.style.justifyContent = 'center'

aboutAuthor.style.textAlign = 'center'

authorContainer.style.display = 'flex'
authorContainer.style.justifyContent = 'space-between'

titleHead.style.marginBottom = '7px'
skillHead.style.marginBottom = '7px'
qualificationHead.style.marginBottom = '7px'

skillSetHead.style.margin = '2rem 0 0.2rem 0'

skillSetContainer.style.margin = 0
skillSetContainer.style.padding = '0 10px'