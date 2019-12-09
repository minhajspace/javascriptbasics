// In javaScript we have two Method to Define a Fucntion

//   (1)  Function Declaration
//   (2)  Function Expression

// function Declaration

// We can call a Fucntion that is Defined using the Function declaration +
// Before its Defined  .
// BUT WHY IS THAT

//  The reason for this is because when our JavaScript engine executes +
//  this code, it moves all the function declarations to the  +
//  top, so our code will look like this at run time.  +

// SO OUR CODE WILL LOOK LIKE THIS AT RUN TIME

// walk();
// function walk() {
//     console.log("walk");
// }

// walk();

// What is Hoisting ?

// hoisting the process to to moving function Decelaration to the top of the file +
// and this is done automatically by the javascript engine that is executing this code

//  In contrast we dont put semicolon in the end of the function it really doesnt matter by but convention we never do that

walk();

function walk() {
  console.log("walk");
}

// Function Expression

// At the end here we need to add a semicolon because in javascript
// when ever we declare a variable or constant we terminate this statment with semicolon

// Named Fuction Expression

let run = function run() {
  console.log("run");
};

run();

// Anonymus Function Expression

let runFast = function() {
  console.log("run fast");
};
runFast();

//  here runFast and move both refrence the same Anonymus function Expression
move = runFast;
move();
