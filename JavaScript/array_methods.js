// --------- Different Array methods -------- 

// push, pop, forEach, map, filter, reduce, find, slice, indexOf, join, split, some, every


// A HIGHER-ORDER FUNCTION - function that either takes one or more functions as arguments or returns a function as its result. These functions are fundamental in functional programming and enable a more abstract and concise way to handle operations. EXAMPLE - map,filter,reduce


console.log("==================\n\n");

// ========================================== Important* ==========================================
// Create an array
let arr = [1, 2, 3, 4, 5];

// forEach()
// Calls a fun (callback) for each ele in the arr. [no new arr, just iterates]
arr.forEach(x => console.log(x));

// map()
// Creates a NEW array by calling a function on each element present.
console.log(arr.map(x => x * 2));   // Output: [2, 4, 6, 8, 10]

// filter()
// Creates a NEW array with elements that pass a test.
console.log(arr.filter(x => x % 2 === 0));      // Output: [2, 4]

// reduce()
// Reduces the array to a single value.
console.log(arr.reduce((acc, curr) => acc + curr, 0));      // Output: 15


// find()
// Returns the First ele that satisfies the condition
console.log(`First ele that satisfies the condition: ${arr.find(x => x%4 === 0)}`)

// Array() and fill()
let arr21 = new Array(4).fill(false);
console.log(arr); // Output: [false, false, false, false]


// ===========================================================================================



// findIndex()
// Find the index of the first ele in an arr satisfies a provided testing function else returns -1
const index = arr.findIndex(num => num > 3);
console.log(index); // Output: 3 

// indexOf()
// Returns the first index at which a given element can be found in the array.
console.log(arr.indexOf(3));                    // Output: 2

// slice()
// Returns a shallow copy of a portion of an array.
console.log(arr.slice(1, 4));                   // Output: [2, 3, 4]




// Method: join()
// Description: Joins all elements of an array into a string.
// Output: "1,2,3,4,5"
console.log(arr.join());

// Method: sort()
// Description: Sorts the elements of an array.
// Output: [1, 2, 3, 4, 5]
console.log(arr.sort((a, b) => a - b));


console.log("\n\n==================")

/* The main differences b/n the forEach() and map() functions in JavaScript are:
1. Return value: forEach() doesn't return anything, just iterates and performs a function. map() returns a new array with the transformed elements.
2. Chainability: map() is chainable, meaning you can chain other methods after it, while forEach() isn't.
 */

/* Sure, here are the definitions with examples for all the array methods in JavaScript:

1. forEach() Function:
   - Purpose: Iterates over each element in an array and performs a specified operation.
   - Example: array.forEach(element => console.log(element));
   - Output: Prints each element in the array.

2. map() Function:
   - Purpose: Creates a new array with the results of calling a specified function on each element in the original array.
   - Example: const squaredArray = array.map(element => element * element);
   - Output: Returns a new array containing the squares of each element in the original array.

3. filter() Function:
   - Purpose: Creates a new array with all elements that pass a specified test.
   - Example: const filteredArray = array.filter(element => element % 2 === 0);
   - Output: Returns a new array containing only the even elements from the original array.

4. find() Function:
   - Purpose: Returns the first element in the array that satisfies a specified condition.
   - Example: const foundElement = array.find(element => element > 5);
   - Output: Returns the first element greater than 5.

5. reduce() Function:
   - Purpose: Applies a function against an accumulator and each element in the array to reduce it to a single output value.
   - Example: const sum = array.reduce((accumulator, element) => accumulator + element, 0);
   - Output: Returns the sum of all elements in the array.

6. findIndex() Function:
   - Purpose: Returns the index of the first element in the array that satisfies a specified condition.
   - Example: const foundIndex = array.findIndex(element => element > 5);
   - Output: Returns the index of the first element greater than 5.

7. every() Function:
   - Purpose: Returns a Boolean value indicating whether all elements in the array satisfy a specified condition.
   - Example: const allPositive = array.every(element => element > 0);
   - Output: Returns true if all elements in the array are positive, false otherwise.

8. some() Function:
   - Purpose: Returns a Boolean value indicating whether at least one element in the array satisfies a specified condition.
   - Example: const anyOdd = array.some(element => element % 2 !== 0);
   - Output: Returns true if at least one element in the array is odd, false otherwise.

9. sort() Function:
   - Purpose: Sorts the elements of an array in place and returns the array.
   - Example: array.sort((a, b) => a - b);
   - Output: Sorts the elements of the array in ascending order.

10. reverse() Function:
    - Purpose: Reverses the elements of an array in place and returns the array.
    - Example: array.reverse();
    - Output: Reverses the order of the elements in the array.

11. slice() Function:
    - Purpose: Returns a shallow copy of a portion of an array into a new array object.
    - Example: const subArray = array.slice(1, 3);
    - Output: Returns a new array containing the elements from index 1 to index 2 (exclusive) of the original array.

12. splice() Function:
    - Purpose: Changes the content of an array by removing, replacing, or adding elements.
    - Example: array.splice(2, 1, 10);
    - Output: Replaces the element at index 2 with 10 and returns an array containing the removed element.

13. concat() Function:
    - Purpose: Returns a new array that is a concatenation of the original array and one or more other arrays or values.
    - Example: const newArray = array.concat(array2, 10, 20);
    - Output: Returns a new array containing all elements of the original array, followed by all elements of array2, and the values 10 and 20.

14. indexOf() Function:
    - Purpose: Returns the first index of a specified element in the array.
    - Example: const index = array.indexOf(5);
    - Output: Returns the index of the first occurrence of 5 in the array.

15. lastIndexOf() Function:
    - Purpose: Returns the last index of a specified element in the array.
    - Example: const index = array.lastIndexOf(5);
    - Output: Returns the index of the last occurrence of 5 in the array.

16. includes() Function:
    - Purpose: Returns a Boolean value indicating whether an array includes a specified element.
    - Example: const includes = array.includes(5);
    - Output: Returns true if the array includes 5, false otherwise.

17. join() Function:
    - Purpose: Joins all elements of an array into a string.
    - Example: const str = array.join('-');
    - Output: Returns a string containing all elements of the array separated by a dash.

18. keys() Function:
    - Purpose: Returns an iterator object with the keys of the array.
    - Example: const iterator = array.keys();
    - Output: Returns an iterator object with the keys of the array.

19. values() Function:
    - Purpose: Returns an iterator object with the values of the array.
    - Example: const iterator = array.values();
    - Output: Returns an iterator object with the values of the array.

20. entries()` Function:
    - Purpose: Returns an iterator object with the key-value pairs of the array.
    - Example: `const iterator = array.entries();`
    - Output: Returns an iterator object with the key-value pairs of the array.

These are the most commonly used array methods in JavaScript. I hope this helps!

*/
