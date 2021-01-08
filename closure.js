function outer(){
    const greeting = "i am minhaj"
    function inner(){
      return greeting
    }
    return inner
}


console.log(outer())