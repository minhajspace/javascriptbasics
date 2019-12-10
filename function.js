// // In javaScript we have two Method to Define a Fucntion

// //   (1)  Function Declaration
// //   (2)  Function Expression

// // function Declaration

// // We can call a Fucntion that is Defined using the Function declaration +
// // Before its Defined  .
// // BUT WHY IS THAT

// //  The reason for this is because when our JavaScript engine executes +
// //  this code, it moves all the function declarations to the  +
// //  top, so our code will look like this at run time.  +

// // SO OUR CODE WILL LOOK LIKE THIS AT RUN TIME

// // function walk() {
// //     console.log("walk");
// // }

// // walk();

// // What is Hoisting ?

// // hoisting the process to to moving function Decelaration to the top of the file +
// // and this is done automatically by the javascript engine that is executing this code

// //  In contrast we dont put semicolon in the end of the function it really doesnt matter by but convention we never do that

// walk();

// function walk() {
//   console.log("walk");
// }

// // Function Expression

// // At the end here we need to add a semicolon because in javascript
// // when ever we declare a variable or constant we terminate this statment with semicolon

// // Named Fuction Expression

// let run = function run() {
//   console.log("run");
// };

// run();

// // Anonymus Function Expression

// let runFast = function() {
//   console.log("run fast");
// };
// runFast();

// //  here runFast and move both refrence the same Anonymus function Expression
// move = runFast;
// move();

// Arguments

// function sum() {
//   sum = 0;
//   for (let element of arguments) sum += element;
//   return sum;
// }
// console.log(sum(12, 2, 2, 3, 32, 6, 1));

//    Rest operator

// let sum = (...argument) => {
//   return argument.reduce((a, b) => a + b);
// };

// console.log(sum(5, 20, 40, 40));

//  Default Parameters

// Before Es6  we are using || logical operator let me show you how

// imagine we are writing a function to calculate intrest rate

// function intrestRate(principal, rate, years) {
//   rate = rate || 3.5;
//   years = years || 5;
//   return ((principal * rate) / 100) * years;
// }
// console.log(intrestRate(1000));

// Now After ES6
// function intrestRate(Principal, rate = 3.5, years = 5) {
//   return ((Principal * rate) / 100) * years;
// }
// console.log(intrestRate(10000));

// using Function Expression and Arrow function

// const intrestRate = (Principal, rate = 3.5, years) => {
//   return ((Principal * rate) / 100) * years;
// };

// console.log(intrestRate(10000, 5));

// condition  setting default parameters afther all parameters should have default parameters

// Getters and Setters

// Before ES6

// let person = {
//   firstName: "Minhaj ",
//   lastName: "Ahmad khan",
//   fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   }
// };
// console.log(person.fullName());

// Now using getter
//  we use getter to access properties of the object
let person = {
  firstName: "Minhaj",
  middelName: "Ahmad",
  lastName: "khan",
  get fullName() {
    return `${person.firstName} ${person.middelName} ${person.lastName}`;
  }
};

console.log(person.fullName);
