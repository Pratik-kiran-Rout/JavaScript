//! 1  Find out the length 
let str = "har\"" //? ans is 4 bec " \" " is one character 
console.log(str.length)

                    //! imp 

//! 2. .includes("") ,.startsWith("") ,.endsWith("") 
//!   /\d+/.test(string)  it is used to check for weather the number is present in the string or not 

const func =(string,start,end)=>{
     console.log(`The include prsatik ? present or not  `,string.includes("pratik"))
     console.log(`Is the string starts with  `,string.startsWith(start))
     console.log(`is the string ends with  `, string.endsWith(end))
     console.log(`is the string contain any kind of the number inside the string`,/\d+/.test(string))
}
const string = "Hello i'm pratik And roll number is 2307072 an i love javascript"
const end ="javascript"
const start = "Hello"
func(string,start,end) 

//! 3. convert to the lowwer case 
console.log("\nProblem 3\n")
const Name = " pratik "
console.log(Name.toUpperCase())
console.log(Name.toLowerCase())
console.log(Name)

//! 4.  Extract Amount from the string (just simple one just use the slice function )
console.log("\nProblem 4\n")
const str1 = "Plese give me 1000"
const amount = parseInt(str1.slice("Plese give me ".length)) // or you just simply provide the number 15 
console.log(amount)
console.log(typeof amount)

//! 5.change the string 
console.log("\nProblem 5\n")
const friend = "depeeka"
friend[4]=c;
console.log(friend) // but as per the rule the string are immutable 
// you can't change the string by just using the index number 