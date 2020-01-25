// (1)  what is function currying  ?

// Ans A function Currying is simply a sequece of function in which function is in the sequece which can takes or multiple paramters  

// Example of Currying 

function addThreeDigit(num) {
    return function (num2) {
        return function (num3) {
            return num + num2 + num3
        }
    }
}

console.log(addThreeDigit((20)(30)(50)))

// without curring option 

function sum(num, num1, num2) {
    return num + num1 + num2
}
console.log(sum(20, 30, 20))