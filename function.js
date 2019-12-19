// // // In javaScript we have two Method to Define a Fucntion

// // //   (1)  Function Declaration
// // //   (2)  Function Expression

// // // function Declaration

// // // We can call a Fucntion that is Defined using the Function declaration +
// // // Before its Defined  .
// // // BUT WHY IS THAT

// // //  The reason for this is because when our JavaScript engine executes +
// // //  this code, it moves all the function declarations to the  +
// // //  top, so our code will look like this at run time.  +

// // // SO OUR CODE WILL LOOK LIKE THIS AT RUN TIME

// // // function walk() {
// // //     console.log("walk");
// // // }

// // // walk();

// // // What is Hoisting ?

// // // hoisting the process to to moving function Decelaration to the top of the file +
// // // and this is done automatically by the javascript engine that is executing this code

// // //  In contrast we dont put semicolon in the end of the function it really doesnt matter by but convention we never do that

// // walk();

// // function walk() {
// //   console.log("walk");
// // }

// // // Function Expression

// // // At the end here we need to add a semicolon because in javascript
// // // when ever we declare a variable or constant we terminate this statment with semicolon

// // // Named Fuction Expression

// // let run = function run() {
// //   console.log("run");
// // };

// // run();

// // // Anonymus Function Expression

// // let runFast = function() {
// //   console.log("run fast");
// // };
// // runFast();

// // //  here runFast and move both refrence the same Anonymus function Expression
// // move = runFast;
// // move();

// // Arguments

// // function sum() {
// //   sum = 0;
// //   for (let element of arguments) sum += element;
// //   return sum;
// // }
// // console.log(sum(12, 2, 2, 3, 32, 6, 1));

// //    Rest operator

// // let sum = (...argument) => {
// //   return argument.reduce((a, b) => a + b);
// // };

// // console.log(sum(5, 20, 40, 40));

// //  Default Parameters

// // Before Es6  we are using || logical operator let me show you how

// // imagine we are writing a function to calculate intrest rate

// // function intrestRate(principal, rate, years) {
// //   rate = rate || 3.5;
// //   years = years || 5;
// //   return ((principal * rate) / 100) * years;
// // }
// // console.log(intrestRate(1000));

// // Now After ES6
// // function intrestRate(Principal, rate = 3.5, years = 5) {
// //   return ((Principal * rate) / 100) * years;
// // }
// // console.log(intrestRate(10000));

// // using Function Expression and Arrow function

// // const intrestRate = (Principal, rate = 3.5, years) => {
// //   return ((Principal * rate) / 100) * years;
// // };

// // console.log(intrestRate(10000, 5));

// // condition  setting default parameters afther all parameters should have default parameters

// // Getters and Setters

// // Before ES6

// // let person = {
// //   firstName: "Minhaj ",
// //   lastName: "Ahmad khan",
// //   fullName() {
// //     return `${person.firstName} ${person.lastName}`;
// //   }
// // };
// // console.log(person.fullName());

// // Now using getter
// //  we use getter to access properties of the object
// // we use setter to change  or mutate the current object
// // let person = {
// //   firstName: "Minhaj",
// //   middelName: "Ahmad",
// //   lastName: "khan",
// //   get fullName() {
// //     return `${person.firstName} ${person.middelName} ${person.lastName}`;
// //   },
// //   set fullName(value) {
// //     if (typeof value !== "string") throw new Error("value is not a string ");
// //     const parts = value.split(" ");
// //     if (parts.length !== 3)
// //       throw new Error("First Name Middel Name and Last Name ");
// //     this.firstName = parts[0];
// //     this.middelName = parts[1];
// //     this.lastName = parts[2];
// //   }
// // };
// // try {
// //   person.fullName = "Minhaj";
// // } catch (e) {
// //   alert(e);
// // }
// // console.log(person.fullName);
// //                         Local and Global score

// // Block score  we can use this variable with in the box only ;

// // {
// //   const name = "minhaj ahmad khan ";
// //   console.log(name);
// // }

// // const name = "Urooj ahmad ";
// // here name are two different  dariable with different scope
// // fist name has block variable .
// // second name has global scope .

// // example

// // function start() {
// //   const run = "hi";
// //   if (true) {
// //     const another = "bye";
// //     console.log(another);
// //   }
// // }
// // start();

// // we have the same concept in our loop

// // here i has also only block scope

// // function hello() {
// //   console.log("hello");
// //   for (let i = 0; i < 10; i++) {
// //     if (i % 2 == 1) console.log(i);
// //   }
// //   console.log(i);
// // }

// // hello();

// //

// // const color = "red";
// // function greeting() {
// //   const color = "green";
// //   console.log(color);
// //   const message = "good morning ";
// //   console.log(message);
// // }
// // function greetingevening() {
// //   const message = "good evening ";
// //   console.log(message);
// // }

// // greeting();
// // local varible over ride to global variable in function block

// // this.key word

// //  method --> object
// //   function ==> global(window , global )

// // const video = {
// //   title: "a",
// //   tags: ["a", "b", "c"],
// //   showTags() {
// //     this.tags.forEach(tag => {
// //       console.log(tag);
// //     });
// //   },
// //   play() {
// //     console.log(this);
// //   }
// // };
// // video.play();
// // because play is a method is video object thats this refrence video object

// // video.stop = function() {
// //   console.log(this);
// // };

// // video.stop();
// // here once again this refrence to video because video.stop is method of video object

// // that's the example of first rule now we are going to see next rule

// function run() {
//   console.log("run buddy");
//   console.log(this);
// }

// run();

// function home(input) {
//   this.input = input;
//   console.log(this);
// }

// const home2 = new home("hello");

// // this key refrence it self because  when we create a function using constructor function to point to this object. so in line 233 we add the property to this new object so let's recap
// //  when  dealing with a regular function ,this by defaut refrences the global object , but if you call  a function  , using the new operator , which in this case for constructor function , this will refrence a new example object

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     this.tags.forEach(function(tag) {
//       console.log(this.title, tag);
//     }, this);
//   }
//   // play() {
//   //   console.log(this);
//   // }
// };
// video.showTags();

// // but what is if we need title on every tags
// // why it undifined  ?
// // Answer because here we are in a for each function thats why its target regulor function
// // this is not the method of video object its just regulor function

// // how can we solve this we have few solution for that
// // thisArg

// first class Function

// const fun = () => {
//   console.log("this is a first calss function");
// };

// console.log("minhaj", fun);

// // first order Function

// const firstOrder = () => {
//   console.log(
//     "i am a first order function that doenst accept other function as an argument and doenst return function as an return value "
//   );
// };
// firstOrder();

//  call bind and apply

// call

function playVideo(a, b) {
  console.log(this);
  console.log(a, b);
}
playVideo.call({ name: "urooj" }, 20, 30);
playVideo.apply({ name: "minhaj" }, [20, 30]);
