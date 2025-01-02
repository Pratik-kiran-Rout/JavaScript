//! Array methods in Java-script
let arr = [ 23 , 22 , 33 , 44 , 55 , 66 ]
console.log(arr)

//? .toString() 
let str = arr.toString()
console.log(str)
console.log(typeof str)

//? .join() 
let c = arr.join("-")
console.log(c, typeof c)

//? .pop() - it will return the pop() element and it dont create the new array 
let x = arr.pop()
console.log(arr,x,typeof x)

//? .push() it will return the new array length 
arr.push(99)
console.log(`The new array is ${arr}`, typeof arr)

//? .shift() it will remove the first element from the array and return 
arr.shift()
console.log(arr)

//? .unshift() add new element at the biggning of the array and return the new array length 
arr.unshift(1000)
console.log(arr)

//! here delete is a operator & but the length is not changed 
//! At the deleted position it will shows the " empty item "
//delete array[0]... etc 
delete arr[0]
console.log(arr , arr.length)

//?   .concat() exam : arr1.concat(arr2)  
// it will return the new array And does't change the existing array 
let arr2 = [1000,1001,1002,1003,1004,1005]
let arr3 = [2000,2001,2002,2003,2004,2005]
let newarr = arr.concat(arr2,arr3)
console.log(newarr)
console.log(arr)
                            
                         //! IMP ONE SORT()
//? sort method : and it will modify the original array 
//! imp it it will sort by : alphabatical order not in the number order 

let arr4 = [33,283,385,28,1,48,33]
console.log(arr4)
arr4.sort()
console.log(arr4) 

//! compare function ascending
// for ascending order = A-B
const compare = (a , b) => {
     return a-b 
}
let arr5 = [33,283,385,28,1,48,33];
arr5.sort(compare);
console.log(arr5)

//! compare function for decending 
// for decending order = B-A
const compare2 = (a , b) => {
     return b-a
}
let arr6 = [33,283,385,28,1,48,33];
arr6.sort(compare2);
console.log(arr6)

//! .reverse() it will reverse the array 
arr6.reverse()
console.log(arr6)
