// Callback - passing function as a parmeter in a function

// a function that is passed as an argument to another function 
// way to handle asynchronous operations
// if you have an asynchronous task (like a network request or file operation), the callback will be called once that task is completed, 


console.log("==================\n\n");

let naam = "anuj"
let marks = 98
fun1(naam,marks,callback_fun);


function callback_fun(marks){
  console.log(`\nCallBack Function called →`);
  console.log(`Student marks: ${marks}`);
}

function fun1(naam,marks,callBack){
  console.log(`name is ${naam}`);
  callBack(marks);
  // console.log(`Why CallBack Function is called before?`);
}



// function fun1(naam,marks,callBack){
//   console.log(`name is ${naam}`);
//   setTimeout(() => {
//     callBack(marks);
//   }, 2000);
// }



