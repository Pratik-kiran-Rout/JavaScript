// vote 
const prompt = require('prompt-sync')()
const age = parseInt(prompt("Enter Your Age "))
if(age<0){
     console.log("Invalid age !");
}
else if (age<9){
console.log("You can't vote blc you are a child");
}
else if (age>9 && age <18){
console.log("You can't vote");
}
else{
     console.log("You can vote :)");
}