// const address = {
//   street: "new hadier ganj ",
//   city: "Lucknow",
//   zipcode: 226003
// };

// function showAddress(address) {
//   for (let key in address) console.log(key, address[key]);
//   for (let key of Object.entries(address)) console.log(key);
// }
// showAddress(address);

// function factoryfunction(street, city, zipcode) {
//   return {
//     street,
//     city,
//     zipcode
//   };
// }

// function ConstFucntion(street, city, zipcode) {
//   this.street = street;
//   this.city = city;
//   this.zipcode = zipcode;
// }

// const newfunction = new ConstFucntion("newHaiderganj", " city", "226003");

//  Constructor Properties

// factory function

// function createObject(radius) {
//   return {
//     radius,
//     draw: function() {
//       console.log("draw");
//     }
//   };
// }
// const newfunction = createObject(1);
// console.log(newfunction);
// // constructor function
// function ObjectCreate(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log("draw");
//   };
// }

// const another = new ObjectCreate(1);
// console.log(another);

// every functions Objects in JavaScript

// function ConsturtorFunction(radius) {
//   this.radius = radius;
//   this.greeting = function() {
//     console.log("good afternoon");
//   };
// }

// const NewCircel = new ConsturtorFunction(1);
// ConsturtorFunction.call({}, 5);

// how primitive and Refrence type behave differently

// let x1 = { value: 10 };
// let y1 = x1;
// x1.value = 20;

// let number = 10;

// function increased(number) {
//   number++;
// }
// increased(number);
// console.log(number);
//         enumerating
// const circel = {
//   radius: 1,
//   draw: function() {
//     console.log("draw");
//   }
// };

// for (let key in circel) console.log(key);

// for (let key of Object.keys(circel)) console.log(key);

// for (let entey of Object.entries(circel)) console.log(entey);

// "radius" in circel;
// console.log("yes");

// Cloning an object
// Old method

const circel = {
  radius: 1,
  draw() {
    console.log("draw");
  }
};
// const another = {};
// for (let key in circel) another[key] = circel[key];
// console.log(another);

// using Object.assign
// const another = Object.assign({}, circel);
// console.log(another);
// using spread operator
const another = { ...circel };
console.log(another);
