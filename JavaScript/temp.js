

let x = "123"
let y = Number(x)
console.log(y) // 123
console.log("type of y:",typeof(y)) // number

let x1 = Math.random()
console.log(x1)

// function to get a 6 digit random no
function getSixDigitRandomNumber() {
  return Math.floor(Math.random() * 900000) + 100000;
}
console.log(getSixDigitRandomNumber())

let str1 = "Hello my name is Anurag"
// let y3 = str1.replace(" ","")



function fetchData(){
  return new Promise((res,rej) => {
    let success = true;
    let data = {name:"Ak", age:22};
    let err = {name:"err"};
    setTimeout(() => {
      if(success)
        res(data);
      else
        rej(err)
    },2000);
  })
}

// let jio = fetchData()
// jio.then(data => console.log("data fetched: ",data)).catch(err => console.log("error: ",err))




const fun = function(){
  return new Promise((res,rej) => {
    const success = true;

    setTimeout(() => {
      if(success)
        res("sucessfull")
      else
        rej("error")
    }, 1000);

  })
}

fun()
  .then((res) => console.log("Result: ",res))
  .catch((error) => console.log("Error: ", error))