// nn bb ss u premitive in js 
let a = null ;
let b = 29;
let c = true ;// it can be also false 
let d = BigInt(550)+BigInt(500);
let e = "pratik"
let f = Symbol("It is a nice symbol")
let g = undefined
console.log(a , b ,c ,d , e , f ,g)
console.log(typeof f)
console.log(typeof d)
 
// Object in java script  --- key :value ---
let student = {
     "name":"pratik",
     "Roll-no": 2307072,
     "Branch":"CS-IT",
      4:"A+"
};
                                    //!    IMP
console.log(student["Branch"]) 
//! Object.values()
const value = Object.values(student); // its a array 
console.log(`The value: ${value}`)
console.log(`The value: ${Object.values(student)[1]}`) //! here 1 is array index arr[1] just like that one 
console.log(`The length: ${Object.values(student).length}`) //! .length

//! Object.keys()
const keys = Object.keys(student);
console.log(`The keys: ${keys}`)

//! Object.entries()
const entries = Object.entries(student);
console.log(`The entries: ${entries}`)
