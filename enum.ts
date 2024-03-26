enum seat {
  AISLE,
  MIDDLE,
  WINDOW
}

let seatIs = seat.MIDDLE;
let seatIs1 = seat[0];

// Enums in TypeScript allow developers to define a set of named constants, making code more readable and structured.

enum Direction {
  Up = 1, // by defalut - Up = 0
  Down,   //by defalut - Down = 1 ....
  Left,
  Right,
}
let userResponse1: Direction = Direction.Up;     // o/p → 1
let userResponse2 = Direction[1];                // o/p → "Up"
// console.log("Direction:" ,userResponse2);
