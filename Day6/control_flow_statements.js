//1.Control Flow Statements In Java Script:

//Example of 'if', 'else-if', and 'else' statements:
let age=18;
if (age<18) {
    console.log("You Are Minor.");
}
else if(age>=18&&age<65) {
    console.log("You Are Adult.");
}
else {
    console.log("You Are Senior.");
}

//Example of 'Switch' statement:
let day=3;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
}

//2.Loops In Java Script:

//Example of For Loop:
for(let i=0;i<5;i++) {
    console.log("For Loop Iteration:",i);
}

//Example of While Loop:
let j=0;
while (j<5) {
    console.log("While Loop Iteration:",j);
    j++;
}

//Example of Do...While Loop:
let k=0;
do {
    console.log("Do...While Loop Iteration:",k);
    k++;
} while (k<5);
