// // // // here are going to see 3 method of array function
// // // // .push
// // // // .splice
// // // // .unshift
// // // // .splice
// // // const number = [1, 3, 6, 7, 1];

// // // console.log(number);
// // // number.push(8, 9);
// // // console.log(number);
// // // number.unshift(3, 4);
// // // console.log(number);
// // // number.splice(3, 0, "a", "b");
// // // console.log(number);

// // // // finding element in  Primitive Type Array

// // // console.log(number.indexOf(1));
// // // console.log(number.indexOf(4, 1));
// // // console.log(number.lastIndexOf("c"));
// // // // for finding the element exist in array or not

// // // console.log(number.indexOf(2) !== -1);

// // // // for the same work we have one more more method which more elegent

// // // console.log(number.includes(1, 1));

// // // // Now Finding Element in Refrence type Array

// const courses = [
//     { id: 1, name: "Btech" },
//     { id: 2, name: "Bsc" },
//     { id: 3, name: "Ba" },
//     { id: 4, name: "Bca " }
// ];

// const result1 = courses.find(function (result1) {
//     return result1.name === "Btech";
// });
// console.log(result1);

// const arrayNumber = [20, 25, 40, 36, 78];

// const result = arrayNumber.find(function (result) {
//     return result > 20 && result <= 40;
// });
// console.log(result);

// const number2 = [
//     { id: 1, value: "a" },
//     { id: 2, value: "b" }
// ];

// const anotherResult = number2.find(anotherResult => {
//     return anotherResult.value === "a";
// });
// console.log(anotherResult);

// // //                       arrow function

// const newnumber = [1, 5, 6, 8, 12];

// const result = newnumber.find(result => {
//     return result > 5;
// });
// console.log(result);

// // // //                    Removing element from array
// // // //  method remove element form the end of the array
// // // // .pop()

// // // let remove = newnumber.pop();
// // // console.log(remove);
// // // console.log(newnumber);

// // // //  now removing element from the bigning for the
// // // // .shift()

// // // remove = newnumber.shift();
// // // console.log(remove);
// // // console.log(newnumber);

// // // // now removing element from the middel of the array
// // // // .splice () ;

// // // remove = newnumber.splice(1, 2);
// // // console.log(remove);
// // // console.log(newnumber);

// // //             Empting An  Array
// // // solution 1
// // // Empting array using .length

// // let newArray = [1, 2, 3, 8, 5, 64, 23, 5, 4, 62];
// // // newArray.length = 0;
// // // console.log(newArray);

// // // solution 2
// // // newArray = [];
// // // console.log(newArray);

// // // solution 3
// // // .splice()

// // // newArray.splice(0, newArray.length);
// // // console.log(newArray);
// // // console.log(newArray);
// // // while(newArray.length >0 )
// // // console.log(newArray);

// // //   combined array
// // //   .concat()

// // // const arrayOne = [1, 2, 3, 4];
// // // const arrayTwo = [5, 6, 7, 8];

// // // let combined = arrayOne.concat(arrayTwo);

// // // // combined array using spread operator

// // // combined = [...arrayOne, ...arrayTwo];
// // // console.log(combined);

// // // // copy array using sperade operator
// // //const copy = [...combined];
// // // console.log(copy);

// // // // slicing Array using .slice()

// // // const slice = copy.splice(2, 5);
// // // console.log(slice);
// // //                iterating  An Array
// // // iterating array using for in loop

// // const copyArray = [1, 2, 3, 4, 5, 6];
// // // for (let element of copyArray) {
// // //   console.log(element);
// // // }

// // // using ForEach

// // //copyArray.forEach((element, index) => console.log(index, element));

// // // joining Array
// // // join method return a string
// // // let join = copyArray.join();

// // // const message = "this is my first message";

// // // const split = message.split(" ");
// // // console.log(split);

// // // join = split.join("-");
// // // console.log(join);

// // //or (let element of copyArray) console.log(element);

// // // copyArray.forEach(function(ArrayElement, index) {
// // //   console.log(index, ArrayElement);
// // // });

// // // let message = "hello this is my first Programing language";

// // // let newarray = message.split(" ");
// // // console.log(newarray);

// // // Shorting Array
// // // .sort() ;

// // let unsortedArray = [4, 5, 6, 2, 8, 1, 9, 7];
// // // console.log(unsortedArray);

// // // const sorted = unsortedArray.sort();
// // // console.log(sorted);

// // // const reversed = sorted.reverse();
// // // console.log(reversed);

// // // Sorting Refrence Type Array

// // // const courseUnsorted = [
// // //   { id: 1, Name: "Minhaj ahmad khan " },
// // //   { id: 2, Name: "Urooj Ahmad khan" },
// // //   { id: 3, Name: "Shad Mirza" },
// // //   { id: 4, Name: "Aditiya kapoor" }
// // // ];

// // // const courseSorted = courseUnsorted.sort((a, b) => {
// // //   const inputA = a.Name.toLocaleUpperCase();
// // //   const inputB = b.Name.toLocaleUpperCase();
// // //   if (inputA > inputB) return 1;
// // //   if (inputA < inputB) return -1;
// // //   return 0;
// // // });
// // // console.log(courseSorted);
// // //

// // // Testing the elements an of array

// // //  .every()
// // // westing alli element is greater the 10 of not
// // let number = [1, 2, 3, 65, 45, 85, 4, 36, 8, 574, 96, 52];
// // let numberGreaterThenTen = number.every(elements => {
// //   return elements >= 10;
// // });
// // console.log(numberGreaterThenTen);

// // // let allPositive = number.some(elements => {
// // //   return elements >= 10;
// // // });

// // // console.log(allPositive);
// // // using arrow

// // // const atleastOnePositive = number.some(number => {
// // //   return number >= 0;
// // // });
// // // console.log(atleastOnePositive);

// // // filtering array

// // //.filter()

// // // number = [2, 4, 5, 6, 8, 42, 6, 84, 6, 3];

// // // number = [20, 25, 36, 41, 25];
// // // const filter1 = number.filter(element => element >= 10);
// // // console.log(filter1);

// // // let name = [
// // //   "Minhaj ahmad khan",
// // //   "mirza",
// // //   "Urooj Ahmad",
// // //   "Vishal anand",
// // //   "shad mirza"
// // // ];
// // // // const filtrName = name.filter(element => element.length <= 10);
// // // // console.log(filtrName);

// // // Mapping

// // // number = [2, 4, 6, 8];
// // // let result = number
// // //   .filter(element => element >= 2)
// // //   .map(element => "<li>" + element + "</li>")
// // //   .map(element => {
// // //     return "<ul>" + element + "</ul>";
// // //   })
// // //   .join("");

// // // console.log(result);

// // //

// // let objectElement = [1, 2, 3, 5, 4, 8, 96, 12, 36];
// // // const mapping = objectElement
// // //   .filter(element => element >= 10)
// // //   .map(element => ({ value: element })).sort({

// // //   })
// // // console.log(mapping);

// // let sum = 0;
// // for (let index of objectElement) sum += index;
// // console.log(sum);

// // // achiving same thing using reduce method

// // sum = objectElement.reduce((memory, currentvalue) => {
// //   return memory + currentvalue;
// // }, 0);
// // console.log(sum);

// // let objectarray = [{ x: 1, x: 2, x: 3, x: 12 }];
// // sum = objectarray.reduce((accumulater, objectarray) => {
// //   sum = accumulater + objectarray.x;
// // });
// // console.log(sum);

// // const number = [1, 2, 3, 4, 5, 67, 8, 9, 10, 2, 36, 5, 89, 4, 5, 6, 55];
// // let mapArray = number.map((value, index) => {
// //   value += 3;
// //   console.log(index, value);
// // });

// // console.log(number.splice(0, 3, "a", "b", "c"));

// // console.log(` Deleted Array ${newarray}`);
// // console.log(`orignal array ${number}`);

// const num = [1, 23, 6, 5, 6, 45, 5, 45, 6, 4, 5, 54, 5, 56, 4, 5, 4, 5];
// const newarr = num.filter((element) => {
//     result = element == 5 && element == 6 && element == 4
//     console.log(result)
//     return result
// })
// console.log(newarr)

// let b = [];
// finding non repeting array 
// let arr = [2, 2, 5, 6, 8, 7, 4, 50, 12, 3, 4]


// for (let index of arr)
//     if (b.indexOf(index) === -1) {
//         b.push(index)
//     }
// console.log(b)



// arr.sort();
// let temp;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== temp) {
//         b.push(arr[i])
//         temp = arr[i]
//     }

// }
// console.log(b)
// obj = {};

// for (let value of arr) {
//     obj[value] = true;

// }
// console.log(obj)

// const arr1 = Object.keys(obj)
// console.log(arr1)


// // Constructor function 
// let a = new Set(arr)
// a = [...new Set(arr)]
// console.log(a)

// console.log(arr)

// let result = [];
// for (let i = 0; i < arr.length; i++) {
//     if (result.indexOf(arr[i]) === -1) {
//         result.push(arr[i])
//     }
// }
// console.log(result)
// let temp = [];
// for (let value of arr) {
//     if (temp.indexOf(arr[value]) === -1) {
//         temp.push(arr[value])
//     }
// }

// console.log(temp)
// let obj = {}
// for (let index of arr) {
//     obj[index] = true
// }
// console.log(obj)

// resultnew = Object.keys(obj)
// console.log(resultnew)
// console.log(Number(resultnew))
// console.log(parselet(resultnew))


// let Constructorfun = [...arr = new Set(arr)]
// console.log(Constructorfun)



// arrow function 

// const person = {
//     firstName: '',
//     lastName: '',

//     setName: function (name1) {

//         let nameArray = name.split('');
//         this.firstName = name[0];
//         this.lastName = name[1];
//         nameArray('Minhaj ahmad ');
//     }

// }

// let name = prompt("enter you name");
// console.log(name)


// let newname = [22, 3, 1, 4, 5, 6, 4, 1, 2, 36, 45, 8, 5, 6, 2, 1, 2];
// function removeelement(array) {

//     let nonrepeting = []
//     for (let index of array) {
//         if (nonrepeting.indexOf(index) === -1)
//             nonrepeting.push(index)
//     }
//     return nonrepeting
// }
// console.log(removeelement(newname))

// let newresult = [...newname = new Set(newname)]
// console.log(newresult)












// let result = [];
// function Remove(newname) {
//     for (let index of newname) {
//         if (result.indexOf(index) === -1) {
//             result.push(index)
//         }

//     }
//     return console.log(result)
// }
// console.log(Remove(newname))

// let Constructorfun = [...arr = new Set(newname)]
// console.log(Constructorfun)

// finding an missing array element from a sorted array 
// function getMissing(string) {
//     return string
//         .split(' ')
//         .map(Number)
//         .sort((a, b) => a - b)
//         .reduce((r, v, i, a) => {
//             let last = a[i - 1];
//             if (!i) {
//                 return r;
//             }
//             while (++last !== v) {
//                 r.push(last);
//             }
//             return r;
//         }, [])
//         .join(' ');
// }

// console.log(getMissing("1 2 3 5 7 8"));

// function isPrime(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return (` ${num} number is not a prime number`)
//         }
//         return (`${num} number is  prime number`)
//     }

// }

// console.log(isPrime(3))

// function reverse(string) {
//     let result = []
//     for (let index of string) {
//         if (result.indexOf(index) === -1)
//             result.push(index)
//     }
//     return result;
// }
// console.log(reverse("hello"))

// finding missing array 
// const questio = [1, 2, 4, 6, 7, 8, 9]
// result = [];
// function missing(array) {
//     let count = array.length
//     let total = (count + 1) * (count + 2) / 2;
//     console.log(total)
//     console.log(count)
//     for (i = 0; i < total; i++) {
//         total = total - (array[i])
//     }
//     return total;

// }

// console.log(missing(questio))

// let question = [1, 2, 2, 3, 3, 4]
// let size = question.length
// function finding(num, size) {
//     result = [];
//     for (let i = 0; i < size; i++) {
//         for (let j = i + 0; j < size; j++) {
//             if (num[i] == num[j])
//                 console.log(num[j])
//         }
//     }
//     return result
// }


// console.log(finding(question, size))

// let names = ['Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Nancy', 'Carl']
// let question = [1, 2, 2, 3, 3, 4]
// let uniq = question
//     .map((name) => {
//         return {
//             count: 1,
//             name: name
//         }
//     })
//     .reduce((a, b) => {
//         a[b.name] = (a[b.name] || 0) + b.count
//         return a
//     }, {})

// let duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)

// console.log(duplicates) // [ 'Nancy' ]



// console.log([...new Set(
//     question.filter((value, index, self) => self.indexOf(value) !== index))]
// );




// let quest = [2, 3, 4, 5, 6, 2, 3, 3, 4];
// console.log(quest)
// let duplicate = [];
// let a, b;
// function find(arr) {
//     for (a = 0; a < arr.lenght; a++) {
//         for (b = i + 1; b < arr.lenght; b++) {
//             if (arr[a] == arr[b])
//                 duplicate.push(arr[a])

//         }
//     }
//     return duplicate;
// }

// console.log(find(quest))

