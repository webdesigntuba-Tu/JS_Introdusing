// JS DECLRATION
// JS VARIABLES
// JS is a case-sensitive language
// JS NEMING CONVENTION
// JS OPERATORS
// JS DATA TYPES
// JS CONDITIONAL STATEMENTS
// JS LOOPS
// JS ARRAY
// JS OBJECT
// JS FUNCTION
// JS DOM ELEMENT
// ALART AND SHOW REAL TIME




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


// ARRAY
let arr = [20,"jon", true, 30,40];
console.log(arr);
console.log(arr[4]);

// OBJECT
let person ={
  FirstName:"jon",
  LastName:"snow",
  Age:30,
  location:"New York"
}
console.log(person);
console.log(person.FirstName);
console.log(person["Age"]);

let person1 =[
  {
    name1:"jon",
    name2:"snow",
    age:30,
    location:"New York"
  },
  20,
  true,
  false,
  10
]
console.log(person1);
console.log(person1[0]);
console.log(person1[0].location);

// function

function user (firstName){

  return "hello " + firstName;
}


console.log(user("jon"));

function person2 (x){
  console.log(x);
}
person2(20);




  function calculation (x,y){
    let sum = x+y;
    let multiply= x*y;
    let total = sum+multiply;
    if(sum % 2 ===0){
      console.log("this number is even number", sum);
    }else{
      console.log("this is not even number")
    }
    console.log(multiply);
    return total;

  }
  let input = calculation(2,4);
  console.log(input);

let college =(student, teacher) =>{
  console.log("this is for student " + student, "This is for teacher " + teacher);
}
college("hello", "hi");

// 

function clickBlue(){
  document.body.style.background = "blue";
}
function clickRed(){
  document.body.style.background = "red";
}
function clickYellow(){
  document.body.style.background = "yellow";
}
// alart
function login (){
  alert("Login Successfull");
}

// SHOW REAL TIME
function showRealTime() {
  
    const date = new Date(); 
    document.getElementById("clock").innerText = date.toLocaleTimeString();
    document.getElementById("date").innerText=date.toLocaleDateString();
}
setInterval(showRealTime, 1000);
showRealTime();