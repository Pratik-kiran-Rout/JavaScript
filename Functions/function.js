// ! Normal function 
const prompt = require("prompt-sync")()

function avg(a,b){
     return (a+b)/2;
}
const a=parseInt(prompt("Enter the 1st number "))
const b=parseInt(prompt("Enter the 2nd number "))
console.log(`The average of the number is ${avg(a,b)}`);

//! Arror function

const facto=(num)=>{
     if(num==0 || num==1){
          return 1;
     }
     return num *= facto(num-1)
}
const x = parseInt(prompt("Enter the number for factorial"));
console.log(`The factorial of a number ${x} is ${facto(x)}`)

//! Arrow operator having inbuilt return type 
// !Especially for one-liners or inline functions.
const avgg=(a,b)=>(a+b)/2;
console.log(`The avg of the number 20 and 30 is ${avgg(20,30)}`)