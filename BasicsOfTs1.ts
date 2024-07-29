// ======= Basic TypeScript Concepts =======

/* TypeScript - 
  enhance your JavaScript projects with type safety and better tooling. 
  ts is a superset of js that adds static typing. 
  helps you catch errors at compile time and provides better tooling support.
*/


/*  data type 
    - tuple, obj, arr, union, number, string, boolean
    - interface, functions, objecy
  
  Never data type
*/



let x1:number = 90;
let x2=<string>"Anurag here";

/* 2.1. Types - tuple,obj,arr,union
  core of ts
  help define what kind of data can be used in your code.
  Basic Types: 
  Number: Represents numeric values.
  String: Represents string 
  Boolean: true/false
  Array: collection of similar data type
*/

let age: number = 25;
let name1: string = "John Doe";
let isActive: boolean = true;

// array
let numbers: number[] = [1, 2, 3];
let namesArr: Array<string> = ["Alice", "Bob"];

// Tuple: fixed-size array with known types.
let person1: [string, number] = ["Alice", 30];

// Union: var can take the different types
let unionVar: (string|number) = 2;
unionVar = "This is replaced with string";


// Object: Represents more complex structures.
let user1: { name: string; age: number } = {
  name: "John",
  age: 25
};
console.log(`${user1.name} is ${user1.age} years old.`);


/* 2.2. ==== Functions ====
  ts allows you to define types for function parameters and return values.
 */

function greetFun(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greetFun("Alice")); // Output: Hello, Alice!

// Function with Optional Parameters:
function greetFun2(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}
console.log(greetFun2("Alice")); // Output: Hello, Alice!
console.log(greetFun2("Alice", "Good morning")); // Output: Good morning, Alice!

// Function with Default Parameters:
function greetFun3(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}
console.log(greetFun3("Alice")); // Output: Hello, Alice!


/* 2.3. ==== Interfaces ====
  define the shape of objects. 
  They are used to describe complex types.
  can be inherited
*/

// Basic Interface:
interface UserInterface {
  name: string;
  age: number;
}

// Optional and Read-Only Properties:
interface User21 extends UserInterface {
  readonly id: number;  // readonly - cant be edited once assigne a value
  gender?: boolean;    // age is optional
}
let userNew: User21 = {
  id:101,
  name: "Bob",
  age: 40,
};
console.log(`${userNew.name} is ${userNew.age} years old.`);



// user21.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.