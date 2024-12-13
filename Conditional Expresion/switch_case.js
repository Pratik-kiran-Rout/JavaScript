//!Calculator 
const prompt = require("prompt-sync")()
console.log("Enter your choise between 1-5");
console.log("1 for Addition ");
console.log("2 for substraction ");
console.log("3 for multiplication ");
console.log("4 for division ");
console.log("5 for  modulus ");

const choise = parseInt(prompt("Enter your choise :"));
const n1 = parseFloat(prompt("Enter the first number "));
const n2 = parseFloat(prompt("Enter the second number "));

switch(choise){
     case 1:
          console.log(`The addn is n1+n2 = ${n1+n2}`)
          break;
     case 2:
          console.log(`The sub is n1-n2 = ${n1-n2}`)
          break;
     case 3:
          console.log(`The mul is n1*n2 = ${n1*n2}`)
          break;
     case 4:
          if(n2!=0)
          console.log(`The div is n1/n2 = ${n1/n2}`);
          else{
               console.log("Denominator can't be Zero !")
          }
          break;
     case 5:
          console.log(`The mod is n1%n2 = ${n1%n2}`)
          break;
     default:
          console.log(`The choise ${choise} is Invalid and Enter the valid choise`);
}


