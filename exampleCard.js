let htmlWord = document.getElementById("word")
let htmlTaboos = document.getElementById("taboos")
let htmlTaboo1 = document.getElementById("taboo1")
let htmlTaboo2 = document.getElementById("taboo2")
let htmlTaboo3 = document.getElementById("taboo3")
let htmlTaboo4 = document.getElementById("taboo4")
let htmlTaboo5 = document.getElementById("taboo5")
let htmlExtra = document.getElementById("explain")


const disaplayExample = () => {
    htmlWord.innerHTML = `<td>Villan <br>(this is the clue word - your goal is to explain the word to the guesser without using this word or any form of the 5 below words)</td>`;
    htmlTaboo1.innerHTML = `<td>hero</td>`
    htmlTaboo2.innerHTML = `<td>evil</td>`;
    htmlTaboo3.innerHTML = `<td>book</td>`;
    htmlTaboo4.innerHTML = `<td>movie</td>`;
    htmlTaboo5.innerHTML = `<td>bad guy</td>`;
    htmlExtra.innerHTML = `<td><br>You will have 60 seconds (start and stop the timer with buttons below) to explain as many words as you can to the guesser.<br> 
    If the guesser gets one right, hit 'generate new word' and update the score for your team.<br>
    For more in-depth rules, click the title at the top of this page.`
}

document.addEventListener("DOMContentLoaded", function() {
    disaplayExample();
  });