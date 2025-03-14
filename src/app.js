import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function generador(){
  let whoExcusa = Math.floor (Math.random()* who.length)
  let actionExcusa = Math.floor (Math.random()* action.length)
  let whatExcusa = Math.floor (Math.random()* what.length)
  let whenExcusa = Math.floor (Math.random()* when.length)
 return who[whoExcusa] + " " + action[actionExcusa] + " " + what[whatExcusa] + " " + when[whenExcusa]
}
  let excuseElement = document.getElementById('excuse');
    excuseElement.innerHTML = generador();

  console.log("Hello Rigo from the console!");
};

