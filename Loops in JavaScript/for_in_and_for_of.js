// The use of Loop in and loop of 

//!   LOOP IN 
let obj = {
     1:"pratik",
     2:"Kshitish",
     3:"Debi",
     4:"Manoj",
     5:"prabhu",
     6:"nitya"
}
for ( i in obj) {
  console.log(i);
  console.log(`The value of the key ${i} is ${obj[i]}`)
}
//!    LOOP OF 
// ? mainly used in String and Array 

let name ="Pratik"
for ( i of name ){
     console.log(i)
}