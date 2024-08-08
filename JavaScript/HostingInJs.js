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

// =====================================================================



// ============================ Functions ============================ 

// with function key word
console.log(myFunc());        // "Hello, World!"  
function myFunc() {
  return "Hello, World!";
}

// with arrow function
func();                       // func is NOT defined
const func = () => {
  console.log("Hello, World!!");
}

// JS hoists the entire function declaration to the top of its scope. This means you can call myFunc before it is declared in the code.
// =====================================================================


// ============================ var v/s let ============================ 
console.log(myVar);       // ReferenceError: Cannot access 'myVar' before initialization
let myVar = 5;