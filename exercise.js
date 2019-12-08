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

const result = arrayfrom(2, 6);
//console.log(result);

function arrayfrom(min, max) {
  const buffer = [];
  for (i = min; max >= i; i++) buffer.push(i);
  return buffer;
}

// // Search Element
let arrayfind = [2, 4, 5, 8, 2, 1, 3, 6, 23, 4];

function arraySearch(array, searchElement) {
  for (let Element of array) if (Element === searchElement) return true;
  return false;
}

const result1 = arraySearch(arrayfind, 10);
//console.log(result1);

// copy array

function newArray(array, remove) {
  newArray = [];
  for (let element of array)
    if (!remove.includes(element)) newArray.push(element);
  return newArray;
}

const arrayone = newArray(arrayfind, [2, 4]);
console.log(arrayone);
