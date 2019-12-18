// queston no (1) What is === operator?

// let number = 13;
// let numberTwo = "13";

// if (number === numberTwo) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Question no (2)  What is the use of isNaN function?

// function sanitise(x) {
//   if (isNaN(x)) {
//     return NaN;
//   }
//   return x;
// }
// console.log(sanitise("20"));
// console.log(sanitise("not a number  "));

// Question no(3) Is it possible to break JavaScript Code into several lines?

// let paragraph = ` Hello how are you
//    I am From Lucknow and
//    i  just love javascript`;

// console.log(paragraph);

// we can use backslash or simple use es6 template literals

// question n0 (6) What are all the types of Pop up boxes available in JavaScript ?

// Alert
// Confirm and
// Prompt

// aleart

// window.alert("do not move ");

// confirm box

// window.confirm("are you sure ");

// Prompt

// window.prompt("please enter a number ");
//  Addtion Program using user input

// function fullName(firstName, lastName) {
//   firstName = window.prompt();
//   lastName = window.prompt();
//   console.log(firstName, lastName);
// }
// fullName();

// Question Number (6)
//  What are escape characters?

// console.log("I m a 'good' boy");
// console.log('I m a "good" boy');

// typeof

// function func(x) {
//   console.log(typeof x, arguments.length);
// }
// func("1");
// func(1);
// func(0);

// this keyword

// const test = {
//   age: 23,
//   UroojAge: 22
// };

// function MyAge(age) {
//   this.age = age;
//   console.log(this);
// }

// const myfriendAge = new MyAge(24);

// const example = {
//   name: "urooj",
//   tags: ["a", "b", "c", "d"],
//   showTags() {
//     this.tags.forEach(function(tags) {
//       console.log(this.name, tags);
//     }, this);
//   }
// };

// example.showTags();

const string = "hello how are you friend ";
console.log(string.charAt([0]));
const array = ["hello", "how are you "];
console.log(array.push("i am fine"));
console.log(typeof string);
