let input = document.querySelector('input')
let selector = document.querySelector('select')
let button = document.querySelector('button')
let imageContainer = document.querySelector('.initialPlanet')
let output = document.querySelector('.information')
let textEl = document.querySelector('.text')

const planetsGravity = [
    {
        planet: 'moon',
        gravity: 1.6,
    },
    {
        planet: 'mercury',
        gravity: 3.7,
    },
    {
        planet: 'venus',
        gravity: 8.87,
    },
    {
        planet: 'earth',
        gravity: 9.8,
    },
    {
        planet: 'mars',
        gravity: 3.7,
    },
    {
        planet: 'jupiter',
        gravity: 25,
    },
    {
        planet: 'saturn',
        gravity: 10.44,
    },
    {
        planet: 'uranus',
        gravity: 8.87,
    },
    {
        planet: 'neptune',
        gravity: 11.15,
    },
    {
        planet: 'pluto',
        gravity: 0.58,
    },
]

let galaxies = planetsGravity.reduce((acc, cur) => {
    acc[cur.planet] = cur.gravity
    return acc
}, {})

selector.innerHTML += planetsGravity.map(planets => `
<option value = '${planets.planet}'>${planets.planet.toUpperCase()}</option>`)

let value;
let mass;
selector.addEventListener('change', (e) => {
    value = e.target.value
})

input.addEventListener('change', (e) => {
    mass = e.target.value
})

function result() {
    document.querySelector('img')
        .setAttribute('src', `./images/${value}.png`)
    planetsGravity.map((p) => {
        if (p.planet == value) {
            textEl.textContent = `The weight of the object on ${value} is ${mass * p.gravity}`
        }
    })

}
button.addEventListener('click', e => {
    if (!mass) {
        textEl.textContent = "mass is required"
        document.querySelector('img')
            .setAttribute('src', `./ images / ${" "}.png`)
        return
    }
    if (!value) {
        textEl.textContent = "planet is required"
        document.querySelector('img')
            .setAttribute('src', `./ images / ${""}.png`)
        return

    }
    result()

})