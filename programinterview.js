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

// function is_Palindrome(str1) {
//   let rev = str1
//     .split("")
//     .reverse()
//     .join("");
//   return str1 == rev;
// }

// function longest_palindrome(str1) {
//   let max_length = 0,
//     maxp = "";

//   for (let i = 0; i < str1.length; i++) {
//     let subs = str1.substr(i, str1.length);

//     for (let j = subs.length; j >= 0; j--) {
//       let sub_subs_str = subs.substr(0, j);
//       if (sub_subs_str.length <= 1) continue;

//       if (is_Palindrome(sub_subs_str)) {
//         if (sub_subs_str.length > max_length) {
//           max_length = sub_subs_str.length;
//           maxp = sub_subs_str;
//         }
//       }
//     }
//   }

//   return maxp;
// }
// console.log(longest_palindrome("abracadabra"));

// console.log(
//   longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")
// );

// return the first non repeating character in a string in javascript

// function firstNonRepeatedCharacter(string) {
//   for (let i = 0; i < string.length; i++) {
//     let c = string.charAt(i);
//     if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
//       console.log(c);
//       return c;
//     }
//   }
//   return null;
// }

// firstNonRepeatedCharacter("hello");

// Count the number of occurrences of a character in a string in Javascript
// var stringsearch = "o",
//   str = "this is foo bar";
// for (
//   var count = -1, index = -2;
//   index != -1;
//   count++, index = str.indexOf(stringsearch, index + 1)
// );
// >count:2var stringsearch = "o"
// str = "this is foo bar";
// for (
//   let count = -1, index = -2;
//   index != -1;
//   console.log(count++, (index = str.indexOf(stringsearch, index + 1)))
// );
// >count:2

//  anagram comparison
// function compare(a, b) {
//   var y = a
//       .split("")
//       .sort()
//       .join(""),
//     z = b
//       .split("")
//       .sort()
//       .join("");
//   console.log(
//     z === y
//       ? a + " and " + b + " are anagrams!"
//       : a + " and " + b + " are not anagrams."
//   );
// }
// console.log(compare(20, 30));

// one other way
// var areAnagrams = function(a, b) {
//   if (a.length != b.length) return false;

//   a = a
//     .split("")
//     .sort()
//     .join("");
//   b = b
//     .split("")
//     .sort()
//     .join("");
//   check if each character match before proceeding
//   for (var i = 0; i < a.length; i++) {
//     if (a.charAt(i) != b.charAt(i)) {
//       return false;
//     }
//   }
//   all characters match!
//   return true;
// };

// areAnagrams(20, 30);


// femouse interview question  FizzBuzz questiong 

// when number divider by 3 show fizz and number is divide by 5 show buzz if number divide by 3 & 5 both show fizzbuzz 


// fizzbuzz = number =>{
//     if (number % 3 === 0 && number % 5 ===0) return console.log('fizzbuzz');
//    if ( number % 3 === 0 ) return console.log("fizz") ;
//    if (number % 5 ===0 ) return console.log('buzz');
// }

// fizzbuzz(3);

// method 2 
// fizzbuzz = (number) => {
//      return number %  3 === 0 && number %  5 === 0 ? console.log('fizzbuzz')
//     : number %  3 === 0  ? console.log('fizz')
//     : number %  5 === 0  ? console.log('buzz')
//     : console.log(`${number} is not divisible 3 or 5  `) ;
// }
// fizzbuzz(12); 

//  string reversal program 

let str ='hello' ;
// const rev = str.split('').reverse().join('')
// console.log(rev)

// strReverse = str => {
//      let reversed ;
//     for(let element of str){
//         reversed = element + reversed ; 
//       return reversed;
//     }
// }
// console.log(strReverse('hello'));

// palindrome=(str)=>{
//    let palindrome = str.split('').reverse().join('');
//     return  str === palindrome ;
// }
// console.log(palindrome('abba'));


// another method to solve this problem 

palindrome = (str) =>{
    str.split('').every((char,i)=>{
        return char === str[str.length - i -1];
    });
}
// console.log(palindrome('baca'));

// palindrome = (str) =>{
//    return str.split('').every((char,index)=>{
//     return (char ===str[str.length - index - 1 ]) 
       
//     })
// }
// console.log(palindrome('abba'));

reverseNumber = (number) =>{
 let reverse =  number
 .toString()
 .split('')
 .reverse()
 .join('')
 return reverse
}
console.log(reverseNumber(2361));
