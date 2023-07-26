//Boolean Type:
//We start by explaining the Boolean type in Typescript and demonstrate how it is used to represent logical values, such as true or false.
//You'll see real-world scenarios where Boolean values are essential, 
//along with insights into how Typescript handles type checking for Boolean values.
var isMyname = true;
//Qustion 1:-
//write a typescript function called is even that takes a number as a parameter and returns true if the numbert
//is even and false otherwise
function isEven(a) {
    return a % 2 === 0;
}
//function call
console.log(isEven(4));
//write a typescript function isDivisibleBy4and8 that 
//takes a number as a parameter and returns true if the number is divisible by both 4 and 8.
function isDivisibleBy4And8(num) {
    return (num % 4 === 0) && (num % 8 === 0);
}
console.log(isDivisibleBy4And8(8));
