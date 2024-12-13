//Q1
let name = "hello"
let x=25
console.log(name + x) // concadinate
//Q2
console.log(typeof name)
console.log(typeof (name + x))
//Q3
let a = {
     name:"harry",
     section:"I",
     roll_no:2307072
} 
console.log(a)
a["grade"]="a+"
console.log(a)
// we can also modify it 
a['name']='pratik'
a[name]='pratike' // it will different bec name is already a variable so it will slow key as the value in the name variable 
console.log(a)
//a{} it will show the result 

//Q5 word meaning dic
const dict={
     "Adept":" Highly skilled",
     "Ambiguous":"unclear",
     "Eloquent" :"Fluent ",
     "Benevolent":"Well-meaning ",
     "Meticulous":"very careful"
};
console.log(dict)
console.log(dict["Adept"])
// also we can write 
console.log(dict.Adept)