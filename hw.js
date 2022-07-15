/* EXERCISE 1
 Write a piece of code to find the largest of  given two integers
*/

/* WRITE YOUR ANSWER HERE */
  let num1 = a;
  let num2 = b;
  
  if (num1 > num2) {
      return( num1 + " is greater");
      
  } else {
      return(num2 + " is greater");
  }


/* EXERCISE 2
  Write a piece of code to check: if  given an integer is NOT equal to 5 then display " not equal"
*/

/* WRITE YOUR ANSWER HERE */

var num1 = 15;
if (num1 !=5){
  console.log("not equal");
}else{
  console.log(a)
}


/* EXERCISE 2
  Write a piece of code to check: if  given an integer is  divisible  by  5 then display "divisible by 5" (search for modulo operator)
*/



/* WRITE YOUR ANSWER HERE */
var a = 10;  
if (a%5 === 0) {
  console.log("divisible by 5")
} else{
  console.log("not divisible by 5")
}
/* EXERCISE 3
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

/* WRITE YOUR ANSWER HERE */
var a = 5;
var b = 10;
var c = a+b;
var d = a-b;

if (c ===8 || d === 8){
  console.log("True")
}
else if (a ===8  || b ===8){
  console.log("True")
}else{
  console.log("False")
}
/* EXERCISE 4
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */
var customerName = "";
var totalShoppingCart = 20
const shippingCost = parseInt (10);
if (totalShoppingCart > 50){
  console.log("Dear" + customerName + "you are eligible for free shipping")
} else {
  
  console.log("Dear " + customerName + ", your total shopping cost is " + (totalShoppingCart + shippingCost) + " Euros.")
}

/* EXERCISE 5
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */
var customerName = "";
var totalShoppingCart = 20
const shippingCost = parseInt (10);
const discountPercentage = parseInt(0.2);
var totalCost = totalShoppingCart * discountPercentage;

if (totalCost > 50){
  console.log("Dear" + customerName + "you are eligible fro free shippomg")
} else {
  
  console.log("Dear " + customerName + ", your total shopping cost is " + (totalCost + shippingCost) + " Euros.")
}


/* EXERCISE 6
Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* WRITE YOUR ANSWER HERE */
var a = 10;
var b = 20;
var c = 30;
if (a>b && a>c){
  console.log(a);
}
else if (b>a && b>c){
  console.log(b)
}
else if (c>a && c>b){
  console.log(c)
}
/* EXERCISE 7
Write a piece of code for checking if a given value is a integer or not. (search for 'typeof')
*/

/* WRITE YOUR ANSWER HERE */
var a = "Hello world";

console.log(typeof(a))

/* EXERCISE 8
 Write a piece of code for checking if a given number is even or odd. (search for modulo operator)
*/

/* WRITE YOUR ANSWER HERE */
var num1 = 10;
if (num1%2 === 0) {
  console.log(num1 + "is even")
} else{
  console.log(num1 + "is odd")
}
/* EXERCISE 9
Change the order of logic in the code so that it will return the correct statements in all cases.
let val = 7
if (val < 10) {
    console.log("Less than 10");
  } else if (val < 5) {
     console.log("Less than 5");
  } else {
    console.log("Greater than or equal to 10");
  }
*/

/* WRITE YOUR ANSWER HERE */
let val = 7
if (val < 5) {
  console.log("Less than 5");
} else if (val < 10) {
  console.log("Less than 10");
} else {
  console.log("Greater than or equal to 10");
}

/*
EXERCISE 10
Write chained if/else if statements to fulfill the following conditions:

num < 5 - display Tiny
num < 10 - display Small
num < 15 - display Medium
num < 20 - display Large
num >= 20 - display Huge
*/

/* WRITE YOUR ANSWER HERE */
var num = 6;

if (num < 5){
  console.log("Tiny")
}
if (num < 10){
  console.log("Small")
}
if (num < 15){
  console.log("Medium")
}
if (num < 20) {
  console.log("Large")
}else{
  console.log("Huge")
}

/*  EXERCISE 11
Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
Display the numbers 0 through 5 (inclusive) in acesnding order using a while loop.
*/

/* WRITE YOUR ANSWER HERE */
i = 
while (var i<0, i<= 5; i++) {
  console.log(i)
}
/* EXERCISE 13
Display the numbers 0 through 10 (inclusive) in acesnding order using a for loop.
*/

/* WRITE YOUR ANSWER HERE */
for (let i = 0; i <=10; i++){
  console.log(i);
}

/* EXERCISE 14
Display the numbers 0 through 10 (inclusive) in acesnding order  but skip displaying 3 and 8.
*/

/* WRITE YOUR ANSWER HERE */
for (let i = 0; i <=10; i++){
  console.log(i);
}
/* EXERCISE 15
 Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 16
  Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz
 */
  i = "";
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
  } else if (i % 3 === 0) {
      console.log("Fizz");
  } else if (i % 5 === 0) {
      console.log("Buzz");
  } else console.log(i);
  }
  

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 17
  Write a piece of code to check the day of the week .  Usie  SWITCH - CASE  and given "day" variable with range from 1 to 7. 
  For example: if day value is equal to 1 display "Monday", if day value is equal to 3 display "Wednesday"

  */

/* WRITE YOUR ANSWER HERE */
var day = 1;
switch (day) {
  case 1:
    day = console.log(monday);
    break;
    case 2:
    day = console.log(Tuesday);
    break;
    case 3:
    day = console.log(wednesday);
    break;
    case 4:
    day = console.log(Thursday);
    break;
    case 5:
    day = console.log(Friday);
    break;
    case 6:
    day = console.log(Saturday);
    break;
    case 7:
    day = console.log(Sunday);
    break;

  default:
    day
    break;
}