// BASICS: First Program
// use tsc index.ts --watch to auto convert or tsc index.ts into index.js and then node index.js
let userName  = "Mahbub Sarwar";
let age = 20;
console.log(userName, age)

//we can't assign strings to a variable that is declared number
function addNumbers(num1:number, num2:number){
    console.log(num1+num2);
}
addNumbers(10,20);
// addNumbers(10,"20"); This will show error as because 20 is string
// addNumbers(10); We can't assign only one value in the function too