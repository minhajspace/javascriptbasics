const address = {
  street: "new hadier ganj ",
  city: "Lucknow",
  zipcode: 226003
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
  for (let key of Object.entries(address)) console.log(key);
}
showAddress(address);
