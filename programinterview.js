// function palindrome(str) {
//   var re = /[\W_]/g;
//   var lowRegStr = str.toLowerCase().replace(re, "");
//   var reverseStr = lowRegStr
//     .split("")
//     .reverse()
//     .join("");
//   return reverseStr === lowRegStr;
// }

// console.log(palindrome("A man, a plan, a canal. Panama"));
// for loop

// function palindrome(str) {
//   var re = /[^A-Za-z0-9]/g;
//   str = str.toLowerCase().replace(re, "");
//   var len = str.length;
//   for (var i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// palindrome("A man, a plan, a canal. Panama");

//  Recursively print all permutations of a string

function getPermutations(string) {
  var results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (let i = 0; i < string.length; i++) {
    let firstChar = string[i];
    let otherChar = string.substring(0, i) + string.substring(i + 1);
    let otherPermutations = getPermutations(otherChar);

    for (var j = 0; j < otherPermutations.length; j++) {
      results.push(firstChar + otherPermutations[j]);
    }
  }
  return results;
}
console.log(getPermutations("hello"));
