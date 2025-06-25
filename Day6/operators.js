//1.Arithmetic operators
//Arithmetic operators are used to perform mathematical operations.
let a=10;
let b=5;
console.log("Arithmetic Operators:");
console.log("a:",a,"b:",b);
let sum =a+b; //SUM.
let difference=a-b; //DIFFERENCE
let product=a*b; //PRODUCT.
let quotient=a/b; //QUOTIENT.
let remainder=a%b; //REMAINDER.
let exponent=a**b; //EXPONENT.
console.log("Arithmetic Operators:",);
console.log("Sum:",sum);
console.log("Difference:",difference);
console.log("Product:",product);
console.log("Quotient:",quotient);
console.log("Remainder:",remainder);
console.log("Exponent:",exponent);
console.log("\n");

//2.Assignment Operators:
//Assignment Operators are used to assign values to variables.
let x=10; //Assignment.
x+=5; //Addition Assignment.
x-=3; //Subtraction Assignment.
x*=2; //Multiplication Assignment.
x/=4; //Division Assignment.
x%=3; //Modulus Assignment.
console.log("Assignment Operators:");
console.log("x after assignments:",x);
console.log("\n");

//3.Comparison Operators:
//Comparision Operators are used to compare two values and return a single value.
let isEqual=(a==b); //EQUAl.
let isStrictEqual=(a===b); //STRICT EQUAL.
let isNotEqual=(a!=b); //NOT EQUAL.
let isStrictNotEqual=(a!==b);
let isGreaterThan=(a>b);
let isLessThan=(a<b);
let isGreeaterThanOrEqual=(a>=b);
let isLessThanOrEqual=(a<=b);
console.log("Comparision Operators:",);
console.log("Is Equal:",isEqual);
console.log("Is StrictEqual:",isStrictEqual);
console.log("Is NotEqual:",isNotEqual);
console.log("Is StrictNotEqual:",isStrictNotEqual);
console.log("Is GreaterThan:",isGreaterThan);
console.log("Is LessThan:",isLessThan);
console.log("Is GreaterThanOrEqual:",isGreeaterThanOrEqual);
console.log("Is LessThanOrEqual:",isLessThanOrEqual);
console.log("\n");

//4.Logical Operators:
//Logical operators are used to combine multiple boolean expressions.
let andOperator=(a>0&&b>0); //Logical AND.
let orOPerator=(a>0||b<0); //Logical OR.
let notOperator=!(a<b); //Logical NOT.
console.log("Logical Operators:");
console.log("And Operator:",andOperator);
console.log("OR Operator:",orOPerator);
console.log("NOT Operator:",notOperator);
console.log("\n");

//5.Bitwise Operations.
//Bitwise Operators performs operations on binary representations.
let bitwiseAnd=a&b; //Bitwise AND.
let bitwiseOr=a|b; //Bitwise OR.
let bitwiseXor=a^b; //Bitwise XOR.
let bitwiseNot=~a; //Bitwise NOT.
let LeftShift=a<<1; //Bitwise LEFT SHIFT.
let RightShift=a>>1; //Bitwise RIGHT SHIFT.
console.log("Bitwise Operators:");
console.log("Bitwise AND:",bitwiseAnd);
console.log("Bitwise OR:",bitwiseOr);
console.log("Bitwise NOT:",bitwiseNot);
console.log("Bitwise XOR:",bitwiseXor);
console.log("Bitwise RIGHT SHIFT:",RightShift);
console.log("Bitwise LEFT SHIFT:",LeftShift);
console.log("\n");

//6.Ternary Operators:
//Ternary Operator is a shorthand for the 'if....else' statement. It takes three operands: a condition, a value if true, and a value if false.
let age=18;
let eligibility=(age>=18)?"Eligible To Vote":"Not Eligible To Vote";
console.log("Ternary Operator:");
console.log("Eligibility:",eligibility);
console.log("\n");

//7.Typeof Operator:
//The Typeof Operator is used to determine the type of a variable or value.
let variableType=typeof a;
console.log("Typeof Operator:");
console.log("Typeof Variable 'a':",variableType);
console.log("\n");

