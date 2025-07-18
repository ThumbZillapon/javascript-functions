// Start coding here
let calculator = {};

// ADD KEY

calculator.add = (a,b) => a+b ;
calculator.subtract =  ( a,b ) => a-b ;
calculator.multiply = ( a,b ) => a*b ;
calculator.divide = ( a,b ) => a/b ;

// Declare , Argument , addResult
let AddResult = calculator.add(10,20);
console.log(AddResult);

let divideResult = calculator.divide(10,20);
console.log(divideResult);