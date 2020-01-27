//                               OOPS 

// What is OOPS  ? 

// object oriented programming is a programming pardigm or style centred around  object rather then function 

//  4 Pillars of OOPS 

// (1)    Encapsulation 

//  Incapsulation is a process to grouped variable and function that operated on them into a object this is what we call encapsulation 

// example without using incapsulation 

let salary = 3000;
let overtime = 10;
let cost = 1000;

getToatalSalary = (salary = 3000, overtime = 10, cost = 1000) => {
    return (salary + (overtime * cost))
}
console.log(getToatalSalary())

// now using using  encapsulation 

let employee = {
    salary: 30000,
    overtime: 10,
    cost: 1000,
    getToatalSalary() {
        return (salary + (overtime * cost))
    }
}
console.log(employee.getToatalSalary())


