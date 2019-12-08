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
console.log(result);

function arrayfrom(min, max) {
  const buffer = [];
  for (i = min; max >= i; i++) buffer.push(i);
  return buffer;
}

// // Search Element

function searchArray(Array, SearchElement) {
  for (let Element of Array) if (Element === SearchElement) return true;
  return false;
}

const newa = searchArray(result, 6);
console.log(newa);
