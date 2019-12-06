// here are going to see 3 method of array function
// .push
// .splice
// .unshift
// .splice
const number = [1, 6, 7, 1];

console.log(number);
number.push(8, 9);
console.log(number);
number.unshift(3, 4);
console.log(number);
number.splice(3, 0, "a", "b");
console.log(number);
// finding element in Array
console.log(number.indexOf(1));
console.log(number.indexOf(4, 1));
console.log(number.lastIndexOf("c"));
