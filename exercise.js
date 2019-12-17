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

// Array exercise

// const result = arrayfrom(2, 6);
// //console.log(result);

// function arrayfrom(min, max) {
//   const buffer = [];
//   for (i = min; max >= i; i++) buffer.push(i);
//   return buffer;
// }

// // // Search Element
// let arrayfind = [2, 4, 5, 8, 2, 1, 3, 6, 23, 4];

// function arraySearch(array, searchElement) {
//   for (let Element of array) if (Element === searchElement) return true;
//   return false;
// }

// const result1 = arraySearch(arrayfind, 10);
// //console.log(result1);

// copy array

// function newArray(array, remove) {
//   newArray = [];
//   for (let element of array)
//     if (!remove.includes(element)) newArray.push(element);
//   return newArray;
// }

// const arrayone = newArray(arrayfind, [2, 4]);
// console.log(arrayone);

// simple prime number Program

// function testPrime(number) {
//   if (number % 2 === 1) {
//     console.log(`number is a prime number `);
//     if (number === 2) {
//       console.log(`number is a prime number`);
//     }
//   } else {
//     console.log(`number is not a prime number `);
//   }
// }

// testPrime(2);

// primeNumber

// function testPrime(number) {
//   if (number % 2 == 0) {
//     console.log(`number is prime number `);
//   } else {
//     console.log(`number is not prime number `);
//   }
// }
// testPrime(3);

// //   Fabaacci Series

// for (let i = 1; i <= 10; i++) console.log("*");

// var fibonacci_series = function(n) {
//   if (n === 1) {
//     return [0, 1];
//   } else {
//     var s = fibonacci_series(n - 1);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
//   }
// };

// console.log(fibonacci_series(8));

// Patter Printing

// for (i = 1; i <= 10; i++) console.log("*");
// for (j = 1; j <= i; j++) console.log("<br>");

// const studentRecord = {
//   name: "Minhaj ahmad khan",
//   age: 23,
//   City: "Minhaj ahmad khan",
//   State: "UP"
// };

// const record = studentRecord;
// console.log(record);
// console.log;

//  What is === operator?

// let number = 13;
// let numberTwo = "13";

// if (number === numberTwo) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//  What is the use of isNaN function?

function sanitise(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}
console.log(sanitise("20"));
console.log(sanitise("not a number  "));
