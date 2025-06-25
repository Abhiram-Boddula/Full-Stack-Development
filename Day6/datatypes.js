//Primitive data types:
let number=42; //number.
let string="Hello, World!"; //string.
let boolean=true; //Boolean.
let undefinedvar; //undefined //(not assigned a value).
let nullvar=null; //Null.
let symbolvar=symbol("unique");//symbol //(unique identifier) //(often used as object property keys).
let bigintvar=BigInt(123456789012345678901234567890); //used for large integers.

//Non-Primitive data types:
let objectvar={ Key:"value"}; //object //(collection)
let arrayvar=[1, 2, 3, 4, 5];
let functionvar=function() {return "I am a function";} //(callable object that performs a specific task)
let object2={
    //adding multiple Key-Value pairs.
    name:"john Doe",
    age:30,
    isEmployed:true,
    hobbbies:["reading", "gaming", "coding"]
}

//Output the data types:
console.log("Data Types In Java Script");
console.log("Number:", number);
console.log("String:", string);
console.log("Boolean:", boolean);
console.log("Undefined:", undefinedvar);
console.log("Null:", nullvar);
console.log("Symbol:", symbolvar);
console.log("BigIntVar:", bigintvar);
console.log("ObejectVar:", objectvar);
console.log("ArrayVar", arrayvar);
console.log("FunctionVar:", functionvar);
console.log("Object2:", object2);