console.log("==================\n\n");

// console.log("hello")

// fun expression
const funExpression = function(numArr){
  let res = 0;
  for(let i in numArr)
    res += numArr[i]
  return res
};

let  numArr = [1,2,3,4,5];
// printing all the ele in a single line without any new line
numArr.forEach(ele => process.stdout.write(ele + " "));   // 1 2 3 4 5 

let res = funExpression(numArr);
console.log("res = ",res)



console.log("\n\n==================");



/*

Fundamentals:
Data types (primitive and reference types)
Variables (var, let, const)
Scope and closures
Execution context and the call stack

Functions:
Function declarations vs. function expressions
Arrow functions and their advantages
Higher-order functions and callbacks

Objects and Prototypes:
Object-oriented programming concepts in JavaScript
Prototype-based inheritance
this keyword and its behavior

Asynchronous JavaScript:
Event loop and concurrency model
Promises and async/await syntax
Callbacks and error handling

ES6+ Features:
let, const, and block scope
Template literals and string interpolation
Destructuring assignments and spread syntax
Arrays and Iteration:

Array methods (map, filter, reduce, etc.)
Iteration methods (forEach, for...of, for...in)
DOM Manipulation:

Accessing and manipulating DOM elements
Event handling and delegation
Asynchronous operations with DOM
Error Handling:

try...catch blocks and throwing errors
Handling asynchronous errors
Best practices for error handling
Module System:

CommonJS vs. ES6 modules
import and export syntax
Module bundlers like Webpack and Rollup

Browser APIs:
Local storage and session storage
Fetch API for making HTTP requests
Geolocation and other APIs

Testing and Debugging:
Unit testing frameworks (e.g., Jest, Mocha)
Debugging techniques in browsers and IDEs
Performance optimization and profiling

Security:
Cross-site scripting (XSS) and Cross-site request forgery (CSRF)
Content Security Policy (CSP) and HTTPS
Data validation and sanitization

*/