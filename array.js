// // here are going to see 3 method of array function
// // .push
// // .splice
// // .unshift
// // .splice
// const number = [1, 3, 6, 7, 1];

// console.log(number);
// number.push(8, 9);
// console.log(number);
// number.unshift(3, 4);
// console.log(number);
// number.splice(3, 0, "a", "b");
// console.log(number);

// // finding element in  Primitive Type Array

// console.log(number.indexOf(1));
// console.log(number.indexOf(4, 1));
// console.log(number.lastIndexOf("c"));
// // for finding the element exist in array or not

// console.log(number.indexOf(2) !== -1);

// // for the same work we have one more more method which more elegent

// console.log(number.includes(1, 1));

// // Now Finding Element in Refrence type Array

// const courses = [
//   { id: 1, name: "Btech" },
//   { id: 2, name: "Bsc" },
//   { id: 3, name: "Ba" },
//   { id: 4, name: "Bca " }
// ];

// const result1 = courses.find(function(result1) {
//   return result1.name === "Btech";
// });
// console.log(result1);

// const arrayNumber = [20, 25, 40, 36, 78];

// const result = arrayNumber.find(function(result) {
//   return result > 20 && result <= 40;
// });
// console.log(result);

// const number2 = [
//   { id: 1, value: "a" },
//   { id: 2, value: "b" }
// ];

// const anotherResult = number2.find(anotherResult => {
//   return anotherResult.value === "a";
// });
// console.log(anotherResult);

//                       arrow function

const newnumber = [1, 5, 6, 8, 12];

const result = newnumber.find(result => {
  return result > 5;
});
console.log(result);

//                    Removing element from array
//  method remove element form the end of the array
// .pop()

let remove = newnumber.pop();
console.log(remove);
console.log(newnumber);

//  now removing element from the bigning for the
// .shift()

remove = newnumber.shift();
console.log(remove);
console.log(newnumber);

// now removing element from the middel of the array
// .splice () ;

remove = newnumber.splice(1, 2);
console.log(remove);
console.log(newnumber);
