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

function ConstFucntion(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}

const newfunction = new ConstFucntion("newHaiderganj", " city", "226003");
console.log(newfunction);
