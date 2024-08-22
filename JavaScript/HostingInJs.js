// Hoisting is a behavior in JS where variable and function declarations are moved to the top of their containing scope during the compilation phase before the code is executed. This means that you can use variables and functions before they are actually declared in the code.




// ============================ Basic example ============================ 
console.log(myVar); // UNDEFINED [it is undefined(value need to be assigned) - NOT not defined]
var myVar = 5;
console.log(myVar); // 5

// JavaScript hoists the declaration of myVar to the top of its scope. However, only the declaration is hoisted, not the initialization. The code above is effectively interpreted by JavaScript as:

var myVar;            // Declaration is hoisted
console.log(myVar);   // undefined
myVar = 5;            // Initialization remains in place
console.log(myVar);   // 5


// ============================ var v/s let ============================ 
// let variables are hoisted but not initialized, var variables are hoisted and initialized to undefined
console.log(v1);      // ReferenceError: v1 is not defined
let v1 = 5;
console.log(v1);      // 5


// =====================================================================



// ============================ Functions ==============================

// with function key word
console.log(myFunc());        // "Hello, World!"  
function myFunc() {
  return "Hello, World!";
}

// with arrow function or function expression 
func();                       // func is NOT defined
const func = () => {
  console.log("Hello, World!!");
}

// JS hoists the entire function declaration to the top of its scope. This means you can call myFunc before it is declared in the code.
// =====================================================================





// ======== Function keyword, Arrow Function, Function expression =======


// Function Declaration
function add(a, b) {
  return a + b;
}

// Function expression
const add = function(a, b) {
  return a + b;
};

// Arrow Function
const add = (a, b) => a + b;