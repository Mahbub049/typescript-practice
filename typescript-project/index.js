// BASICS OF TS
// In your folder first do npm init -y
// Then install locally or globally npm install typescript --save-dev
// Create tsconfig file npx tsc --init
// Create a ts file
// To run continuously ts file, tsc filename --watch
// To run js continously, nodemon filename
//Primtive Types
// String Type
var username = "Mahbub Sarwar";
// Number Type
var userAge = 49;
// Boolean Type
var isLoggedIn = true;
// Arrays
var hobbies = ["Reading", "Travelling", "Coding"];
// Tuples: Fixed array types where you specify the type of each element
var person = ["John", 25];
// Enums: A way of giving more friendly names to sets of numeric values
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var move = Direction.Up;
// Any: A flexible type that can hold any type (use sparingly)
var randomValue = 10;
randomValue = "Mahbub";
// TYPE INFERENCE
var message = "I am Mahbub";
message = "I am Jannat"; //IS OKAY
// message = 20; This would cause error because ts often infers the first one assigned if there is no type mentioned
// FUNCTIONS AND PARAMETERS
// Basic Func Declaration
function sum(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
console.log(sum(10, 40));
// Optional and Default parameters
function division(num1, num2) {
    if (num1 === void 0) { num1 = 1; }
    if (num2 === void 0) { num2 = 1; }
    var division;
    num1 > num2 ? division = num1 / num2 : division = num2 / num1;
    return division;
}
console.log(division(10, 20));
// UNION and Intersection Types
// Union: Union types let you work with multiple types
function printId(id) {
    console.log("ID:", id);
}
printId("Mahbub");
printId(49);
var employee = {
    name: "Alice",
    privileges: ["Server", "Add"],
    startDate: new Date()
};
console.log(employee);
function printValue(value) {
    console.log(value);
}
printValue(10);
printValue('Mahbub');
