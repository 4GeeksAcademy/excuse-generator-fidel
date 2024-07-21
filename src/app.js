/* eslint-disable */
import "bootstrap";
import "./style.css";

const paragraph = document.getElementById("excuse");
const button = document.getElementById("excuseButton");

let who = [
  "The dog",
  "My grandma",
  "The mailman",
  "My bird",
  "A man",
  "Someone",
  "My mother in law"
];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "my car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

const excuses = [who, action, what, when];

/* 
function excuseGenerator(arrayOfExcuses) {
  let excuse = "";
  for (let i = 0; i < arrayOfExcuses.length; i++) {
    let randomIndex = Math.floor(Math.random() * arrayOfExcuses[i].length);
    excuse = excuse + " " + arrayOfExcuses[i][randomIndex];
  }
  paragraph.textContent = excuse;
  return paragraph;
}
*/

function excuseGenerator(arrayOfExcuses) {
  let excuse = "";
  arrayOfExcuses.forEach(array => {
    let randomIndex = Math.floor(Math.random() * array.length);
    excuse += " " + array[randomIndex];
  });
  paragraph.textContent = excuse;
  return excuse;
}

excuseGenerator(excuses);

button.addEventListener("click", function() {
  excuseGenerator(excuses);
});

window.onload = function() {};
