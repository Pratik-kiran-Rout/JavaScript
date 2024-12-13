//input defalut as the string 
const prompt = require("prompt-sync")() // Import the package
let age = prompt("Enter your age: ");    // it is use to take the input from the user 
console.log(age);
console.log(typeof age)

// now converting the string to the number 
let age1 = prompt("Enter your age 1 ")
age1=Number.parseInt(age1)
console.log(age1)
console.log(typeof age1)

// 

// practice
// iNPUT 
// const prompt = require("prompt-sync")()
// let x =parseFloat(prompt("Enter yoyr Age "));
// console.log(x)
// console.log(typeof x)
// console.log("Alternate")
// let age = prompt("Enter your age :")
// age=Number.parseInt(x)
// console.log(typeof x)


