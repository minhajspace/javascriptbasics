// (1)  what is function currying  ?

// Ans A function Currying is simply a sequece of function in which function is in the sequece which can takes or multiple paramters  

// Example of Currying 

// function addThreeDigit(num) {
//     return function (num2) {
//         return function (num3, num4) {
//             return num + num2 + num3 + num4
//         }
//     }
// }

// console.log(addThreeDigit((20)(30)(50, 10)))

// // still this is curring function 

// // without curring option 

// function sum(num, num1, num2) {
//     result = num + num1 + num2
//     return result;
// }
// console.log(sum(20, 30, 20))



// What is IIFY and why they use ? 

// IIFY stand for Immediately invoked Function Expression its simply a function that excuted right after its created 

// example  

// (function Sum(num, num2) {
//     return num + num2
// })(20, 30)           // answer will be 50 


// what is clouser   

// Answer   A Clouser is An inner Function that has Access to the scope of outher function  
//  A Clouser have access  to variable in 3 seprate scope 
// 1  its own scope 
//   2  Outer function scope 
//  3   Global variable scope  

// A clouser have Also access to 
//  (1) Its own parameters  
//  (2)  Outer Function 

// example    

function outer(para1) {
    let n = 1;
    function inner() {
        let m = 5;
        let result = n + m
        return (para1 + (n + m))
    }
    console.log(inner())
}
outer("Sum of the two number is  ")