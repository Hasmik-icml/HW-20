let curDate = new Date();
let birthdate = new Date("1983/11/16");
console.log(curDate);
console.log(birthdate);
console.log(curDate-birthdate);
let age = Math.floor((curDate - birthdate)/31536000000);
console.log(age);
