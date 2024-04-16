// Closures - functions that have access to variables in their parent scope, even after the parent function has returned. This allows for data to be "closed over" or remembered by the inner function, even after the outer function has completed execution.

/*
Closures are commonly used in JavaScript for a variety of tasks, such as:
Deferred calls: Closures can be used to delay the execution of a function until a later time.
Callback functions: Closures are often used as callback functions, which are functions that are passed as arguments to other functions and are executed at a later time.
Creation of an encapsulated scope for the purpose of hiding auxiliary objects: Closures can be used to create private variables and functions that are not accessible from outside the closure.
*/

console.log("==================\n\n");

const mar = () => {};

function parent(marks) {
  console.log("Inside parent function");
  let bonus = 5;
  let final_marks = marks + bonus;

  function child_fun() {
    console.log(`Marks ${marks}`);
    console.log(`Final marks ${final_marks}`);
  }
  child_fun();
}

parent(10);

console.log("\n\n==================");
