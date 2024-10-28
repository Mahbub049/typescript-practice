// BASICS OF TS
    // In your folder first do npm init -y
    // Then install locally or globally npm install typescript --save-dev
    // Create tsconfig file npx tsc --init
    // Create a ts file
    
    // To run continuously ts file, tsc filename --watch
    // To run js continously, nodemon filename

//Primtive Types

// String Type
let username: string = "Mahbub Sarwar";

// Number Type
let userAge: number = 49;

// Boolean Type
let isLoggedIn: boolean = true;

// Arrays
let hobbies: string[] = ["Reading", "Travelling", "Coding"];

// Tuples: Fixed array types where you specify the type of each element
let person: [string, number] = ["John", 25];

// Enums: A way of giving more friendly names to sets of numeric values
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;

// Any: A flexible type that can hold any type (use sparingly)
let randomValue: any = 10;
randomValue  = "Mahbub";


// TYPE INFERENCE
let message = "I am Mahbub";
message = "I am Jannat";    //IS OKAY
// message = 20; This would cause error because ts often infers the first one assigned if there is no type mentioned


// FUNCTIONS AND PARAMETERS

// Basic Func Declaration
function sum(num1: number, num2: number): number {
    let sum = num1 + num2;
    return sum;
}
console.log(sum(10,40));

// Optional and Default parameters
function division(num1: number = 1, num2: number = 1): number{
    let division: number;
    num1>num2? division = num1/num2: division = num2/num1;
    return division;
}
console.log(division(10,20));


// UNION and Intersection Types

// Union: Union types let you work with multiple types
function printId(id: number|string){
    console.log("ID:",id);
}
printId("Mahbub");
printId(49);

// Intersection: intersection types combine multiple types.

type Admin = {name: String; privileges: string[]};
type Employee = {name: String; startDate: Date};
type ElevatedEmployee = Admin & Employee;

const employee: ElevatedEmployee = {
    name: "Alice",
    privileges: ["Server", "Add"],
    startDate: new Date()
}

console.log(employee);


// Type Aliases: Type aliases give you a way to name types and make code more readable.
type StringOrNumber = string | number;
function printValue(value: StringOrNumber){
    console.log(value);
}
printValue(10);
printValue('Mahbub')
