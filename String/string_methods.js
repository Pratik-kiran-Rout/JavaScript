//! String methods and properties 
const name ="pratik"
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase()) 

//! String slicing 
console.log(name.slice(2,4)) // only " at " bec a = 2 and i =4 but it will show upto 3 (n-1)
console.log(name.slice(1))

//! .replace("old","new")
console.log(name.replace("pra","kri"))

//! .concat()
// ? name1.concat(name2,"name3",....) = use for string concadination
// as same as "pratik" + "kiran" + "rout"
const name2=" kiran"
console.log(name.concat(name2," rout"))

//! .trim() it remove the white spaces 
const friend = "          minna           "
console.log(friend)
console.log(friend.trim())

//! use a loop to prient the name 
const Name = "pratik kiran rout"
for(let i = 0 ; i<Name.length;i++){
     console.log(Name[i]);
}
// same as the above loop 
console.log("\nfor of \n")
for(i of Name){
     console.log(i)
}
// but it will display the index number 
console.log("\nfor in \n")
for(i in Name){
     console.log(i)
}
