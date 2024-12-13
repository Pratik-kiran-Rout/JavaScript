//! problems on LOOP and Functions (read pre_nonpre_variable.js file)
const prompt = require("prompt-sync")()
const obj ={
     pratik:80,
     nitya:95,
     prabhu:85,
     kshitish:95,
     debi:89
}
console.log(obj)

// !   print only keys  ( it is a array so it can be acess by index number )
for(let i=0 ; i< (Object.keys(obj).length);i++){ // index starts from 0
      console.log(Object.keys(obj)[i]);
}

// !   print only valus  
for(let j=0 ; j< (Object.keys(obj).length);j++){ // .keys or .values both can be use for the length
      console.log(Object.values(obj)[j]);
}

//! for both print 
for(let i=0 ; i< (Object.keys(obj).length);i++){ // just like array ex:- array[1]
     console.log(`The values of the key ${Object.keys(obj)[i]} is = ${Object.values(obj)[i]}`);
}

//! by using the for-in
for (i in obj){
     console.log(`The key value of the ${i} is ${obj[i]}`);
}
//! try agian and 
const required = 25 
console.log("The required number is 25");
let x = parseInt(prompt("Enter the requied number :"));
while(x!=required){
  x=parseInt(prompt("Enter again ! :"))
}
if(x==required){
     console.log("Done !")
}
// ! find the mean of 5 number 
const mean=(a,b,c,d,e)=>(a+b+c+d+e)/5;
let a = parseInt(prompt("Enter a "))
let b = parseInt(prompt("Enter b "))
let c = parseInt(prompt("Enter c "))
let d = parseInt(prompt("Enter d "))
let e = parseInt(prompt("Enter e "))
console.log(`The mean of the numbers is ${mean(a,b,c,d,e)}`)