// function masterCirclet() {}
// circel = {
//   radius: 1,
//   loaction: {
//     x: 1,
//     y: 1
//   },
//   inVisuble: true,
//   welcome: function() {
//     return console.log("welcome to object oriented programming");
//   }
// };

// Factory function

// function masterfunction(radius, x, y) {
//   return {
//     radius,
//     isApproved: true,
//     loaction: {
//       x,
//       y
//     },
//     welcome() {
//       console.log("welcome to object oriented programming");
//     }
//   };
// }

// const circel = masterfunction(1, 2, 3);
// console.log(circel);

// const circel2 = masterfunction(1, 5, 6);
// console.log(circel2);
//                            Constructor function

// function ConstructorFunction(radius, x, y) {
//   this.radius = radius;
//   (this.location = {
//     x: x,
//     y: y
//   }),
//     (this.isApproved = true);
//   this.draw = function() {
//     console.log("draw");
//   };
// }

// const circel = new ConstructorFunction(1, 4, 5);

// const circel2 = circel(1, 2, 3);

// // Dynamic Nature of Objects

// const circel1 = new ConstructorFunction(1, 3, 5);
// console.log(circel1);

// circel1.gretting = function() {
//   console.log("hello everyone");
// };

// function newObject(radius) {
//   return {
//     radius
//   };
// }

// const newObject1 = newObject(2);
// console.log(newObject1);
// newObject1.newradius = 2;
// newObject1.greeting = function() {
//   console.log("good evening ");
// };
// delete newObject1.newradius;
// console.log(newObject1);

// function Circel(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log("draw");
//   };
// }

const Circel = {
  radius: "radius",
  greeting() {
    console.log("good evening ");
  }
};

// for (let key in Circel) console.log(key, Circel[key]);
// for (let key of Object.keys(Circel)) console.log(key);
// for (let key of Object.entries(Circel)) console.log(key);
// if ("radius" in Circel) console.log("yes");

// cloaning Object

// using Object.assgn method

// const newObject = Object.assign(
//   {
//     color: "red"
//   },
//   Circel
// );

const newObject = {
  color: "red",
  greeting() {
    console.log("good night");
  },

  ...Circel
};
console.log(newObject);
