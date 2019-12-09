// In javaScript we have two Method to Define a Fucntion

//   (1)  Function Declaration
//   (2)  Function Expression

// function Declaration

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
