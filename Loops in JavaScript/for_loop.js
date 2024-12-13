//!for loop
const prompt = require('prompt-sync')()
for(let i =1 ; i<=10;i++){
     console.log(i)
} 
console.log("problem")

// print all the even number 
for (let i = 1 ; i<=50; i++){
     i%2==0?console.log(i):null;
}
// alternet method
console.log("Alternet method ")
for (let i =1;i<=30;i++){
     if (i%2!=0){
          continue;
     }
     console.log(i);
}

//sum of num
console.log("The sum of natural num")
let num = parseInt(prompt("Enter the number:"));
let sum =0;
for(let i =1; i <=num ; i++){
     sum +=i;
}
console.log(`The sum is ${sum}`)

//factorial 
console.log("Factorial of a number ");
let facto = 1;
for ( let i =num;i>=1;i--){
 facto *=i;
}
console.log(`The Factorial of a number is ${facto}`);