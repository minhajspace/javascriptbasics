var vs let and const 


Before es6 we have only one way to delair a varible  which var keyword 


why let, const 


one majore problem with var it has functional scope  let me explain in example 

if(true){
    var person='Minhaj';
    console.log(person);
}
console.log(person) 

here outpul will be 
// output  Minhaj 
// output  Minhaj 

that's mean we can access person out of its scope that's why let,const introduce 

let me expalin in example 

if(true){
    let person='Minhaj';
    console.log(person);
}
console.log(person) 

here outpul will be 
// output  Minhaj 
// output  person is not defined 

because let,const have block scope that mean we can access only in its own block 


when we use const  ? 

when we know we don't reinitialise that variable 



