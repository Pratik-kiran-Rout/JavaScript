//! Array declaration
let marks = [23,44,55,77,88,"pratik", false, null ,95,85]
console.log(marks)
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[5])
console.log(marks[100]) // it shows undefied 

// ? length of an array 
console.log(`The length of the array is ${marks.length}`)

// ? it is mutable 
marks[10]=34
console.log(marks)

//? it can be cahnge 
marks[0]=99
console.log(marks)
// is is a object type 
console.log(typeof marks)

// print all the values by using the for loop 
for (let i =0 ; i<marks.length;i++){
     console.log(marks[i])
}
