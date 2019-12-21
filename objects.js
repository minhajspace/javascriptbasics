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

//Factory function

function masterfunction(radius, x, y) {
  return {
    radius,
    isApproved: true,
    loaction: {
      x,
      y
    },
    welcome() {
      console.log("welcome to object oriented programming");
    }
  };
}

// // const circel = masterfunction(1, 2, 3);
// // console.log(circel);

// // const circel2 = masterfunction(1, 5, 6);
// // console.log(circel2);
// //                            Constructor function

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

// // const circel = new ConstructorFunction(1, 4, 5);

// // const circel2 = circel(1, 2, 3);

// // // Dynamic Nature of Objects

// // const circel1 = new ConstructorFunction(1, 3, 5);
// // console.log(circel1);

// // circel1.gretting = function() {
// //   console.log("hello everyone");
// // };

// // function newObject(radius) {
// //   return {
// //     radius
// //   };
// // }

// // const newObject1 = newObject(2);
// // console.log(newObject1);
// // newObject1.newradius = 2;
// // newObject1.greeting = function() {
// //   console.log("good evening ");
// // };
// // delete newObject1.newradius;
// // console.log(newObject1);

// // function Circel(radius) {
// //   this.radius = radius;
// //   this.draw = function() {
// //     console.log("draw");
// //   };
// // }

// // const Circel = {
// //   radius: "radius",
// //   greeting() {
// //     console.log("good evening ");
// //   }
// // };

// // for (let key in Circel) console.log(key, Circel[key]);
// // for (let key of Object.keys(Circel)) console.log(key);
// // for (let key of Object.entries(Circel)) console.log(key);
// // if ("radius" in Circel) console.log("yes");

// // cloaning Object

// // using Object.assgn method

// // const newObject = Object.assign(
// //   {
// //     color: "red"
// //   },
// //   Circel
// // );

// // const newObject = {
// //   color: "red",
// //   greeting() {
// //     console.log("good night");
// //   },

// //   ...Circel
// // };
// // console.log(newObject);
// //const newfunction = new ConstFucntion("newHaiderganj", " city", "226003");

// //  Constructor Properties

// // factory function

// // function createObject(radius) {
// //   return {
// //     radius,
// //     draw: function() {
// //       console.log("draw");
// //     }
// //   };
// // }
// // const newfunction = createObject(1);
// // console.log(newfunction);
// // // constructor function
// // function ObjectCreate(radius) {
// //   this.radius = radius;
// //   this.draw = function() {
// //     console.log("draw");
// //   };
// // }

// // const another = new ObjectCreate(1);
// // console.log(another);

// // every functions Objects in JavaScript

// // function ConsturtorFunction(radius) {
// //   this.radius = radius;
// //   this.greeting = function() {
// //     console.log("good afternoon");
// //   };
// // }

// // const NewCircel = new ConsturtorFunction(1);
// // ConsturtorFunction.call({}, 5);

// // how primitive and Refrence type behave differently

// // let x1 = { value: 10 };
// // let y1 = x1;
// // x1.value = 20;

// // let number = 10;

// // function increased(number) {
// //   number++;
// // }
// // increased(number);
// // console.log(number);
// //         enumerating
// // const circel = {
// //   radius: 1,
// //   draw: function() {
// //     console.log("draw");
// //   }
// // };

// // for (let key in circel) console.log(key);

// // for (let key of Object.keys(circel)) console.log(key);

// // for (let entey of Object.entries(circel)) console.log(entey);

// // "radius" in circel;
// // console.log("yes");

// // Cloning an object
// // Old method

// // const circel = {
// //   radius: 1,
// //   draw() {
// //     console.log("draw");
// //   }
// // };
// // const another = {};
// // for (let key in circel) another[key] = circel[key];
// // console.log(another);

// // using Object.assign
// // const another = Object.assign({}, circel);
// // console.log(another);
// // using spread operator
// // const another = { ...circel };
// // console.log(another);

// // string

// //Primitive type

// // let message = " hello ";

// // console.log(message);

// // //Object type string

// // let another = new String("h1");
// // console.log(another);

// //   String Built in Method
// // message = "   hi hello  how are you  ?    ";
// // console.log(message.length);
// // console.log(message[0]);
// // console.log(message[2]);
// // console.log(message.startsWith("h"));
// // console.log(message.includes("hi"));
// // console.log(message.endsWith("r"));
// // console.log(message.indexOf("how"));
// // console.log(message.toUpperCase());
// // console.log(message.toLowerCase());
// // console.log(message.trim());
// // console.log(message.trimLeft());
// // console.log(message.trimRight());

// // console.log(message.replace("hello", "everyone"));

// //     template Literals
