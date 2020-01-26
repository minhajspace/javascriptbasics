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

(function Sum(num, num2) {
    return num + num2
})(20, 30)           // answer will be 50 