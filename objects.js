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

function ConstructorFunction(radius, x, y) {
  this.radius = radius;
  (this.location = {
    x: x,
    y: y
  }),
    (this.isApproved = true);
  this.draw = function() {
    console.log("draw");
  };
}

const circel = new ConstructorFunction(1, 4, 5);
console.log(circel);
