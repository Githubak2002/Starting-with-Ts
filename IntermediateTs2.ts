/* INTERMEDIATE TS - 
  Classes in ts 
  Generics
  Type Assertion  



Generics
Generics allow you to create components that can work with any data type.
*/

// Type Assertion  

const btn = <HTMLElement> document.getElementById("btnId1");
// btn.onclick(() => console.log("btn clicked"));
const img = <HTMLImageElement> document.getElementById("imgId1");
// img.src("./abc");


  // Basic Generics:


function identity<T>(value: T): T {
  return value;
}

console.log(identity(1)); // Output: 1
console.log(identity("hello")); // Output: hello


// Generic Interfaces:
interface GenericIdentityFn<T> {
  (value: T): T;
}
const identity: GenericIdentityFn<number> = (value: number) => value;
console.log(identity(5)); // Output: 5

// Generic Classes:
class GenericBox<T> {
  content: T;
  constructor(content: T) {
    this.content = content;
  }
  getContent(): T {
    return this.content;
  }
}
const numberBox = new GenericBox<number>(123);
console.log(numberBox.getContent()); // Output: 123