// // JavaScript Fundamentals - Part 1
// // We'll write our code here!


//01 JAVASCRIPT SETUP AND BASICS

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log(js);
 
 
// console.log("===VARIABLES===");
// let firstNames = "Jonas";
// console.log(firstNames);
 
// let ages = 30;
// console.log(ages);
// ages = 40;
// console.log(ages);
 
// const birthYear = 2004;
// console.log(birthYear);
 
// const PI = 3.1415;
// console.log(PI);
 
 
 
// console.log("=== DATA TYPES ===");
// let ID = 1234567890;
// console.log(ID);
// console.log(typeof ID);
 
// let firstName = "Chavez";
// console.log(typeof firstName);
 
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);
 
// let year;
// console.log(year);
// console.log(typeof year);
 
// let dynamicVariable = 21;
// console.log(dynamicVariable, typeof dynamicVariable);
 
// dynamicVariable = "Now I'm a string!";
// console.log(dynamicVariable, typeof dynamicVariable);
 
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);


//02 OPERATORS AND EXPRESSIONS
console.log("=== MATH OPERATORS ===");
 
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
 
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
 
console.log("Math operations:");
console.log("Addition:", 10 + 5);
console.log("Subtraction:", 20 - 8);
console.log("Multiplication:", 4 * 7);
console.log("Division:", 15 / 3);
console.log("Exponentiation", 2 ** 3);
 
const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);
 
console.log("Hello " + "World" + "!");
console.log("I am " + 25 + " years old");
 
console.log("=== ASSIGNMENT OPERATORS ===");
 
let x = 10 + 5;
console.log("x starts as:", x);
 
x += 10;
console.log("After x =+ 10:", x);
 
x *= 4;
console.log("After x *= 4:", x);
 
x /= 2;
console.log("After x /= 2:", x);
 
x++;
console.log("After x++:", x);
 
x--;
console.log("After x--:", x);
 
x--;
console.log("After x-- twice:", x);
 
console.log("=== COMPARISON OPERATORS ===");
console.log("Age comparison:");
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
console.log(ageJonas < 30);
 
console.log("Number comparisons:");
console.log(25 > 20);
console.log(15 < 10);
console.log(18 >= 18);
console.log(16 <= 15);
 
const isFullAge = ageSarah >= 18;
console.log("Sarah is adult:", isFullAge);
 
const isJonasOlder = ageJonas > ageSarah;
console.log("Jonas is older:", isJonasOlder);
 
console.log("Complex comparison:");
console.log(now - 1991 > now - 2018);
 
console.log("=== OPERATOR PRECEDENCE ===");
 
let z, y;
z = y = 25 - 10 - 5;
console.log(z,y);
 
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
 
console.log("=== BMI Calculator ===");
 
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
 
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
 
//1.
console.log("Mark's BMI result:", BMIMark);
console.log("John's BMI result:", BMIJohn);
 
//2.
const MarkHigherBMI = BMIMark > BMIJohn;
console.log("Mark's BMI is higer:",MarkHigherBMI);
 
//3.
console.log("Mark's BMI: " + BMIMark, " | John's BMI: " + BMIJohn, " | Mark's BMI is higher: ", MarkHigherBMI);


