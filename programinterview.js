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

// function getPermutations(string) {
//   var results = [];

//   if (string.length === 1) {
//     results.push(string);
//     return results;
//   }

//   for (let i = 0; i < string.length; i++) {
//     let firstChar = string[i];
//     let otherChar = string.substring(0, i) + string.substring(i + 1);
//     let otherPermutations = getPermutations(otherChar);

//     for (j = 0; j < otherPermutations.length; j++) {
//       results.push(firstChar + otherPermutations[j]);
//     }
//   }
//   return results;
// }
// console.log(getPermutations("hello"));

// JavaScript: The longest palindrome in a specified string

function is_Palindrome(str1) {
  let rev = str1
    .split("")
    .reverse()
    .join("");
  return str1 == rev;
}

function longest_palindrome(str1) {
  let max_length = 0,
    maxp = "";

  for (let i = 0; i < str1.length; i++) {
    let subs = str1.substr(i, str1.length);

    for (let j = subs.length; j >= 0; j--) {
      let sub_subs_str = subs.substr(0, j);
      if (sub_subs_str.length <= 1) continue;

      if (is_Palindrome(sub_subs_str)) {
        if (sub_subs_str.length > max_length) {
          max_length = sub_subs_str.length;
          maxp = sub_subs_str;
        }
      }
    }
  }

  return maxp;
}
console.log(longest_palindrome("abracadabra"));

console.log(
  longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")
);

// return the first non repeating character in a string in javascript

function firstNonRepeatedCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    let c = string.charAt(i);
    if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
      return c;
    }
  }
  return null;
}