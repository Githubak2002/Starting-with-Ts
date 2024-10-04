
// Why is Short-Circuiting Useful?
// 1. Performance Optimization: Avoids unnecessary evaluations, which can save time and resources, especially if the second operand involves complex calculations or function calls.

// 2. Conditional Execution: Allows for safe execution of code that depends on the first condition. For example, you might want to execute a function only if a variable is truthy:

// falsy values - false, 0, "", null, undefined, NaN

// 1. Logical AND (&&)
// If the first operand is FALSY, the result will definitely be FALSE.

let x = false && "ok";    // result is false; b is not evaluated
console.log(x);           // Output: false


// 2. Logical OR (||)
// If the first operand is truthy, the result will definitely be true.

let y = true || "ok";     // result is true; b is not evaluated
console.log(y);           // Output: true

// || can be used in case of default values
let input = "", z = "hello"
let value = input || z;   // value is "Default Value"
console.log(value);       // Output: "hello "


// The nullish coalescing operator (??) returns the first operand if it is not null/undefined

let p1 = 0 ?? "ok"
console.log(p1);          // Output: 0

let p3 = "" ?? "ok"
console.log(p3);          // Output: ""


let p = null ?? "ok"
console.log(p);           // Output: "ok"

let p2 = undefined ?? "ok"
console.log(p2);          // Output: "ok"



// =============================

console.log("\n\n")

console.log(true || "ok")      // true
console.log(false || "ok")     // "ok"

console.log(true && "ok")      // "ok"
console.log(false && "ok")     // false

console.log(true ?? "ok")      // true
console.log(false ?? "ok")     // "ok"

console.log(0 ?? "ok")         // 0
console.log(null ?? "ok")      // "ok"
console.log(undefined ?? "ok") // "ok"


const arr = [1,2,3,4,5,6,7,8,9,10];

let res1 = arr.reduce((acc,curr) => {
  if(curr <= 5) 
    return acc + curr
  else
    return acc + 0
},0)

console.log("\n\n res : ",res1)


