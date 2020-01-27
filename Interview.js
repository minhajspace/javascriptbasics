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

// example using  outer function parameters and inner function parameters 


// function outerfunction(firstName) {
//     inner = (lastName) => {
//         return console.log(`My name is  ${firstName} ${lastName}`)
//     }
//     inner("khan")
// }
// outerfunction("Minhaj")




// example  

// Adding global variable 
// adding inner function parameters 

// let global = 20;

// function outer(para1) {
//     let n = 1;
//     function inner(para2) {
//         let m = 5;
//         let result = n + m
//         return (` ${para}  ${result} ${para2 * global}`)
//     }
//     console.log(inner(10))
// }
// outer("Sum of the two number is  ")


// what is bind ? 

// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.


// function outerfunction(firstName) {
//     inner = (lastName) => {
//         return console.log(`My name is  ${firstName} ${lastName}`)                         
//     }
//     inner("khan")
// }
// outerfunction("Minhaj")

//  Call method ? 

//  With the use of call and Apply we can change the contax of this to a given function  
// There is only one difference between call and apply in apply we pass the argument of the function in array this is the only difference . 
// const car = {
//     brand: "Toyota",
//     getCarDetail: function (color, year, cost) {
//         return console.log(`the color of the car is ${color} and the year of perchase ${year} and cost of the car is ${cost} brand of the car is ${this.brand}`)
//     }
// }

// car.getCarDetail("red", 2020, 20000)

// const car2 = {
//     brand: "mahidra"
// }

// car.getCarDetail.call(car2, "yellow", 2018, 16000)

// // Apply 



// const car3 = {
//     brand: "MG Hacta"
// }

// car.getCarDetail.apply(car3, ["green", 2016, 40000])



// what is This keyword  

// answer  this keyword refrence the object which is executing the current function 
// when we are dealing with regular function this refrence the global object ; 

// function cars() {
//     console.log(this)
// }


// when we are creating a function using new keyword the this is set this new function  ; 

// function fullName(name, lastName) {
//     this.name = name;
//     this.lastName = lastName
// }
// const fullName2 = new fullName("minhaj", "ahmad")

// this in condition this keyword set to this net function 


// // when A function is part of a object then this refrence the object itselft  
// // example  

// const myName = {
//     name: "Minhaj",
//     getName() {
//         return this.name
//     }

// }

// in this case this keyword refrence the object it self 


