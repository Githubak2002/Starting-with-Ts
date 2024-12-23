// Implicit Type Coercion in JavaScript
// Coercion refers to the automatic or implicit conversion of values from one type to another. In JavaScript, implicit type coercion happens when the language automatically converts a value from one data type to another during the evaluation of expressions or operations.



// String + Number (Coercion to String): When you try to concatenate a string and a number, JavaScript will coerce the number into a string.

let result1 = "Hello" + 5;
console.log(result1);  // "Hello5"


// String - Number (Coercion to Number): When subtracting, JavaScript will attempt to coerce the string into a number.

let result2 = "5" - 2;
console.log(result2);  // 3