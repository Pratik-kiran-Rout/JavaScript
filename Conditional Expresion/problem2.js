const prompt = require('prompt-sync')()
const num = parseFloat(prompt("enter the number "))
if (num%2 == 0 && num % 3==0){
     console.log("it can be divisible by both 2 and 3 ")
}
else(
     console.log("it can't be divisible by both number ")
)

//! Ternery operator 
console.log("Ternery operator ")
console.log(num%2==0 && num%3==0 ? "num is div by both " :"num is not div by both ")