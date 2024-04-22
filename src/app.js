/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").textContent = generateExcuse();
  });
};

let generateExcuse = () => {
  let who = ["My brother", "A random person", "The mailman", "My friend"];
  let action = ["ate", "peed", "stole", "broke"];
  let what = ["my hat", "my phone", "my icecream", "my lunch"];
  let when = [
    "before the class",
    "when I was sleeping",
    "yesterday",
    "this afternoon"
  ];

  let whoIndx = Math.floor(Math.random() * who.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);

  return (
    who[whoIndx] +
    " " +
    action[actionIndx] +
    " " +
    what[whatIndx] +
    " " +
    when[whenIndx]
  );
};
