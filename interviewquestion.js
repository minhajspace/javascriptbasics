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

// const string = "hello how are you friend ";
// console.log(string.charAt([0]));
// const array = ["hello", "how are you "];
// console.log(array.push("i am fine"));
// console.log(typeof string);

// difference between undifined , undeclare and null  ;

// console.log(x);
// // here x in undeclared
// let x;
// console.log(x);
// // x is undefined
// x = null;
// console.log(x);
// // here x is null

// const height = window.outerWidth;
// console.log(height);

// const a = parseInt("250");
// console.log(typeof a);

// strict mode

// "use strict";

// a = 10;
// // b = 30;
// // console.log(a + b);

// function sum(b) {
//   "use strict";
//   console.log(a);
//   return console.log(b);
// }
// sum(20);

// empty an array

//const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// number = [];

// number.length = 0;

// number.splice(0, number.length);

// while (number.length) {
//   number.pop();
// }
// console.log(number);

// let Employee = {
//   company: "xyz"
// };

// let Employee1 = Employee;

// delete Employee.company;
// console.log(Employee1);
// console.log(Employee);

// var Employee = {
//   company: "xyz"
// };
// var Emp1 = Object.create(Employee);
// delete Emp1.company;
// console.log(Emp1.company);

// way to create an object  in js

// Object Constructor

let object = new Object();
object.name = "minhaj";
console.log(object);

// Object.create

let newObject = Object.create(object);
console.log(newObject);

// Object literal syntax
let literalObject = {
  name: "Minhaj ahmad khan"
};
console.log(literalObject);

// Function constructor

function person(name, age) {
  let object = {};
  (object.name = name), (object.age = age);
  return object;
}
const funObject = new person(null, null);
console.log(funObject);

// Function constructor with prototype

function PersonNew() {
  PersonNew.prototype.name = "Vishal ananad";
  PersonNew.prototype.age = 23;
}
let newPerson = new PersonNew();
console.log(newPerson);
