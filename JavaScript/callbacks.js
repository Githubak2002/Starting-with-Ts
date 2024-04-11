// Callback - passing function as a parmeter in a function
console.log("==================\n\n");


fun1(callback_fun);

function fun1(callback){
  console.log("First function called");
  callback();
}

function callback_fun() {
  console.log("Callback function called");
}



console.log("\n\n==================");



