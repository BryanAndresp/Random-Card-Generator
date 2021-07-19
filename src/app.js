/* eslint-disable */

import "./style.css";
let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suit = ["&hearts;", "&spades;", "&clubs;", "&diams;"];

window.onload = () => {
  //write your code here
  let randomSuit = suit[Math.floor(Math.random() * suit.length)];
  let top = document.getElementById("top");
  let bottom = document.getElementById("bottom");
  top.innerHTML = randomSuit;
  document.getElementById("number").innerHTML = generateRandomNumber();
  bottom.innerHTML = randomSuit;

  if (randomSuit == "&hearts;" || randomSuit == "&diams") {
    top.style.color = "red";
    bottom.style.color = "red";
  } else {
    top.style.color = "black";
    bottom.style.color = "black";
  }
};

function generateRandomNumber() {
  let randomNum = number[Math.floor(Math.random() * number.length)];
  return randomNum;
}
