let body = document.body

let youPressed = document.createElement('span')
let code = document.createElement('span')
let youPressedCode = document.createElement('div')
let codeDisplay = document.createElement('div')

body.append(youPressedCode, codeDisplay)
youPressedCode.append(youPressed, code)

youPressed.textContent = 'Press any Keyboard Key'
youPressedCode.style.boxShadow = '2px 2px 2px 3px rgba(0, 0, 0, 0.2)'
youPressedCode.style.marginTop = '4rem'
youPressedCode.style.padding = '1rem 6rem'

body.style.display = 'grid'
body.style.placeItems = 'center'
body.style.fontSize = '60px'
body.style.fontWeight = '700'


body.addEventListener('keydown', (e) => {
    let { key, keyCode } = e

    youPressed.textContent = 'You Pressed '
    code.textContent = key
    codeDisplay.textContent = keyCode
    code.style.color = 'green'
    code.style.textShadow = '1px 1px 3px #000000'
    codeDisplay.style.color = 'green'
    codeDisplay.style.fontSize = '150px'
    codeDisplay.style.boxShadow = '2px 2px 2px 3px rgba(0, 0, 0, 0.2)'
    codeDisplay.style.marginTop = '2rem'
    codeDisplay.style.padding = '4rem 3rem'
    codeDisplay.style.borderRadius = '10px'
})

youPressed.style.textShadow = '4px 4px 5px #d7d5d5'