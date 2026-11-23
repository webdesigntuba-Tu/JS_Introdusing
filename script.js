// JS DECLRATION
// JS VARIABLES
// JS is a case-sensitive language
// JS NEMING CONVENTION
// JS OPERATORS
// JS DATA TYPES
// JS CONDITIONAL STATEMENTS
// JS LOOPS




console.log("Hello, World!");
// var
// let
// const

var FirstName = "john";
FirstName = "Doe";
console.log( FirstName);
const age=30;

let city="New York";
console.log(city);

console.log(age);
/*fghdjhkhj;lkhjcvgfxzxAZxgcxhfhklbjkml,/n,/bjnjknmnxcvvcxzcccccccccccccccccccccccccccccccc*/


let orange= 20;
let apple= 30;
let total = orange + apple;
let subtotal = apple - orange;
let multiply = orange * apple;
let divide = apple / orange;
let remainder = apple % orange;
console.log(total);
console.log(subtotal);
console.log(multiply);
console.log(divide);
console.log(remainder);

// js input system
// const firstName = prompt("What is your name?");
// console.log("Hello, " + firstName);


// if statement
let number=60;
if(number> 50){
    let total = number + 50;
    console.log(total + " number is greater than 50");

}
// if else statement
let number1= 90;
if(number1>= 80){
    console.log("you got A+");
}
else{
    console.log("you got B+");
}
// else if statement
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or below");
}
// switch statement
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the workweek.");
    break;
  case "Friday":
    console.log("Almost the weekend!");
    break;
  default:
    console.log("Just a regular day.");
}
// ternary operator
let personAge = 10;
let Age= personAge >=16 ?"Adult" : "Minor";
console.log(Age);


// loop in jms
// for loop
// for("initialization"; "condition"; "increment/decrement")

	for (let i = 0; i < 3; i++) {
  console.log(i);
}

// while loop
let i = 0;
while (i < 3) {
  console.log(i); i++;
}
// do while loop
let J = 0;
do {
  console.log(J); J++;
} while (J < 3);