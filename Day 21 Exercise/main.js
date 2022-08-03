// Level 1
//1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

//2. Get each of the the paragraph using document.querySelector('#id') and by their id
document.querySelector('#first-paragraph')
document.querySelector('#second-paragraph')
document.querySelector('#third-paragraph')
document.querySelector('#fourth-paragraph')
//3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
pNodeList = document.querySelectorAll('p')
//4. Loop through the nodeList and get the text content of each paragraph
pNodeList.forEach(title => console.log(title));
//5. Set a text content to paragraph the fourth paragraph, Fourth Paragraph
pNodeList[3].textContent = '30DaysOfFullStack Challenge Coming'
//6. Set id and class attribute for all the paragraphs using different attribute setting methods
pNodeList[0].setAttribute('class', 'a-paragraph')
pNodeList[1].setAttribute('class', 'b-paragraph')
pNodeList[2].setAttribute('class', 'c-paragraph')
pNodeList[3].setAttribute('class', 'd-paragraph')
// Level 2
//1. Change stye of each paragraph using JavaScript(eg.color, background, border, font - size, font - family)
//2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
//3. Set text content, id and class to each paragraph
pNodeList.forEach((each, i) => {
    each.style.backgroundColor = 'black'
    each.style.border = 'thick solid #0000FF'
    each.style.fontSize = '35px'
    each.style.fontFamily = 'roboto'
    if (i % 2 === 0) {
        each.style.color = 'green'
    } else {
        each.style.color = 'red'
    }
})