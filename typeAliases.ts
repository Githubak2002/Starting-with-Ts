
// ============ Type Aliases –  ============
type user = {
    naam:string,
    age:number,
    isAdult:boolean
}

type humHia = (string|boolean) [];
let arrr:humHia = ["ak","ko",false]

const fun = (newUser:user):user => {
    return({naam:"ak",age:21,isAdult:true})
}

let x = fun({naam:"ak",age:21,isAdult:true});
console.log("User = ",x);         // User =  { naam: 'ak', age: 21, isAdult: true }

export{}


