//syntax in javascript.
//let, const, var are used to declare variables in javascript.

let a = 10;
//let is block scoped, cannot be reassigned in the same scope.

const b = 20;
//const is block scoped and cannot be reassigned.

var c = 30;
//var is function scoped, can be redeclared in the same scope.

console.log(a, b, c);
//console.log will output the values of a, b, and c.

let userinput = prompt("enter a number");
//take input from user.
//prompt will display a dialog box asking for user input.
console.log("user input is:",userinput); 
