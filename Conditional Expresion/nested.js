const prompt = require('prompt-sync')()
let age = parseInt(prompt("Enter your age "));
if(age>=18){
     console.log("This is the valid age ");
     if(age<30){
          console.log("you are also a edult");
     }
     else{
          console.log(`You are old guy bro age ${age}!`)
     }
}
else{
     console.log("This is not a valid age ");
}