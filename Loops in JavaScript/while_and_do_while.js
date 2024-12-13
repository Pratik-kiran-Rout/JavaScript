//  while and do while program 

//!  while (Entry level )
const prompt = require("prompt-sync")()
const num = parseInt(prompt("Enter the number"));
let i = 1,facto=1;
while(i<=num){
 facto *=i;
 i++;
}
console.log(`The factorial of a number ${num} is ${facto}`);

//! Do while 
const num2 = parseInt(prompt("Enter the second number"));
let j=1,facto2=1;
do{
facto2*=j;
j++;
}while(j<num); // Exit level so we use < only
console.log(`The factorial of a number ${num2} is ${facto2}`);

//! Key differance is 
let condition = false;

// while loop
while (condition) {
    console.log("This will not run because the condition is false.");
}

// do...while loop
do {
    console.log("This will run at least once even if the condition is false.");
} while (condition);
