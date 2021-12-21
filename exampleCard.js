let htmlWord = document.getElementById("word")
let htmlTaboos = document.getElementById("taboos")
let htmlTaboo1 = document.getElementById("taboo1")
let htmlTaboo2 = document.getElementById("taboo2")
let htmlTaboo3 = document.getElementById("taboo3")
let htmlTaboo4 = document.getElementById("taboo4")
let htmlTaboo5 = document.getElementById("taboo5")
let htmlExtra = document.getElementById("explain")


const disaplayExample = () => {
    htmlWord.innerHTML = `<td>Villan (this is the clue word - your goal is to explain the word to the guesser (you also can't use this word))</td>`;
    htmlTaboo1.innerHTML = `<td>hero (these 5 words are the taboo words - you cannot use these or any form of these in your explanaition)</td>`
    htmlTaboo2.innerHTML = `<td>evil</td>`;
    htmlTaboo3.innerHTML = `<td>book</td>`;
    htmlTaboo4.innerHTML = `<td>movie</td>`;
    htmlTaboo5.innerHTML = `<td>bad guy</td>`;
    htmlExtra.innerHTML = `<td>You will have 60 seconds  `

}