// Callback - passing function as a parmeter in a function
console.log("==================\n\n");

let naam = "anuj"
let marks = 98
fun1(naam,marks,callback_fun);

function fun1(naam,marks,callback){
  console.log(`Student name: ${naam}`);
  callback(marks);
}

function callback_fun(maks) {
  console.log(`Marks obtained: ${maks}`);
}



console.log("\n\n==================");



