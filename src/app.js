/* eslint-disable */
import "bootstrap";
import "./style.css";

let paragraph = document.getElementById("excuse");

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

const excuses = [who, action, what, when];
let excuse = "";

function excuseGenerator(arrayOfExcuses) {
  for (let i = 0; i < arrayOfExcuses.length; i++) {
    let randomIndex = Math.floor(Math.random() * arrayOfExcuses[i].length);
    excuse = excuse + " " + arrayOfExcuses[i][randomIndex];
  }
  paragraph.textContent = excuse;
  return paragraph;
}
excuseGenerator(excuses);

window.onload = function() {};
