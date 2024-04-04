// ============= INTERFERANCE =============


// ====== type ====
type strType = (string|number)[]    // array containing str/numbers

// ====== type with tuple ====
type tupleType = [string,number]    // arr with 2 ele - 1st str then no
let strarr01:tupleType = ["ak",90]

strarr01[1] = 95           
// in ts we can reassign a new value to ele of tuple !in py



//  ====== INTERFACE =====
interface studIntrf {
    readonly _id:number,
    name:string,
    pass?:boolean,
    // fun: () => string
    fun(subGuru:string): string
}
let stud35:studIntrf = {_id:35,name:"Ak",pass:true, 
  fun:(subGuru="Shilpa") => {
    return `${subGuru} Teaches ${stud35.name}`
  }
} 

// we could not extends type 
interface paperInter extends studIntrf {
  admitCardNo:string,
  role: "Volenter" | "Student" | "Teacher"
}


