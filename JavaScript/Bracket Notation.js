// obj1[no]: This syntax is called BRACKET NOTATION

// TIME COMPLEXITY - O(N)
function fun(s) {
  switch (s) {
    case 1:
      return "January";
      break;
    case 2:
      return "February";
      break;
    case 3:
      return "March";
      break;
    case 4:
      return "April";
      break;
    case 5:
      return "May";
      break;
    case 6:
      return "June";
      break;
    case 7:
      return "July";
      break;
    case 8:
      return "August";
      break;
    case 9:
      return "September";
      break;
    case 10:
      return "October";
      break;
    case 11:
      return "November";
      break;
    case 12:
      return "December";
      break;
    default:
      return "Invalid month"; // optional: handle invalid input
  }
}

// TIME COMPLEXITY - O(1)
function fun2(no) {
  const obj1 = {
    1: "Januray",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  return obj1[no];
}

// TIME COMPLEXITY - O(1)
function marksFun(studentName){
  const obj = {
    "Pushpa": 90,
    "Khush": 80,
    "Bob": 70
  };
  return obj[studentName];
}

let res = fun(2);
console.log("Month : ", res);

let ans = fun2(3);
console.log("Month : ", ans);

let marks = marksFun("Pushpa");
console.log(`Pushpa got ${marks} marks`);


