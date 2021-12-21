let htmlWord = document.getElementById("word")
let htmlCard = document.getElementById("card")
let htmlTaboos = document.getElementById("taboos")
let htmlTaboo1 = document.getElementById("taboo1")
let htmlTaboo2 = document.getElementById("taboo2")
let htmlTaboo3 = document.getElementById("taboo3")
let htmlTaboo4 = document.getElementById("taboo4")
let htmlTaboo5 = document.getElementById("taboo5")
let htmlExtra = document.getElementById("explain")
let button = document.getElementById("new-word")

import data from './cards.js'
console.log(data);
let unusedNum = data.length;
console.log(unusedNum)

const formatCards = (json) => {
  let random = Math.floor(Math.random() * unusedNum);
  // if (json[random].used === false) { 
    let displayWord = json[random].word;
    let displayTaboo1 = json[random].taboos[0];
    let displayTaboo2 = json[random].taboos[1];
    let displayTaboo3 = json[random].taboos[2];
    let displayTaboo4 = json[random].taboos[3];
    let displayTaboo5 = json[random].taboos[4];

    htmlWord.innerHTML = `<td>${displayWord}</td>`;
    htmlTaboo1.innerHTML = `<td>${displayTaboo1}</td>`
    htmlTaboo2.innerHTML = `<td>${displayTaboo2}</td>`;
    htmlTaboo3.innerHTML = `<td>${displayTaboo3}</td>`;
    htmlTaboo4.innerHTML = `<td>${displayTaboo4}</td>`;
    htmlTaboo5.innerHTML = `<td>${displayTaboo5}</td>`;
    htmlExtra.innerHTML = '';

    // let i = 1;
    // for (let taboo in json[random].taboos) {
    //   let child = document.createElement('td')
    //   child.id = `taboo${i}`
    //   htmlTaboos.appendChild(child);
    //   document.getElementById(`taboo${i}`).innerHTML = taboo;
    //   i++;
    // }
    
    // json[random].used = true;
    unusedNum--;
    console.log(unusedNum)
    json.splice(random, 1)
    console.log(json)
  // } else {
  //   random = Math.floor(Math.random() * unusedNum)
  // }
}

const displayCards = (/*json*/) => {
    // let random = Math.floor(Math.random() * unusedNum);

    if (unusedNum > 0) {
      formatCards(data);
      // if (json[random].used === false) { 
      //   let displayWord = json[random].word;
      //   let displayTaboo1 = json[random].taboos[0];
      //   let displayTaboo2 = json[random].taboos[1];
      //   let displayTaboo3 = json[random].taboos[2];
      //   let displayTaboo4 = json[random].taboos[3];
      //   let displayTaboo5 = json[random].taboos[4];

      //   htmlWord.innerHTML = `<td>${displayWord}</td>`;
      //   htmlTaboo1.innerHTML = `<td>${displayTaboo1}</td>`
      //   htmlTaboo2.innerHTML = `<td>${displayTaboo2}</td>`;
      //   htmlTaboo3.innerHTML = `<td>${displayTaboo3}</td>`;
      //   htmlTaboo4.innerHTML = `<td>${displayTaboo4}</td>`;
      //   htmlTaboo5.innerHTML = `<td>${displayTaboo5}</td>`;

      //   // let i = 1;
      //   // for (let taboo in json[random].taboos) {
      //   //   let child = document.createElement('td')
      //   //   child.id = `taboo${i}`
      //   //   htmlTaboos.appendChild(child);
      //   //   document.getElementById(`taboo${i}`).innerHTML = taboo;
      //   //   i++;
      //   // }
        
      //   json[random].used = true;
      //   unusedNum--;
      //   console.log(unusedNum)
      // // } else {
      //   random = Math.floor(Math.random() * unusedNum)
      // }
    } else {
      htmlCard.innerHTML = `<p>Sorry, no more words. Game over!</p>`;
      console.log('no mo words man')
    }  
}

button.onclick = () => {
  displayCards(/*data*/);
}

// const makeJson = (file) => {
//   return JSON.stringify(file)
// }

// console.log(makeJson())


// const xhr = new XMLHttpRequest();
// xhr.responseType = 'json';
// xhr.onreadystatechange = () => {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       makeJson(xhr.response);
//     }
//   };
// xhr.open('GET', '/cards.json');
 
// xhr.send();


