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
// console.log("=== MATH OPERATORS ===");
 
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
 
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
 
// console.log("Math operations:");
// console.log("Addition:", 10 + 5);
// console.log("Subtraction:", 20 - 8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division:", 15 / 3);
// console.log("Exponentiation", 2 ** 3);
 
// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);
 
// console.log("Hello " + "World" + "!");
// console.log("I am " + 25 + " years old");
 
// console.log("=== ASSIGNMENT OPERATORS ===");
 
// let x = 10 + 5;
// console.log("x starts as:", x);
 
// x += 10;
// console.log("After x =+ 10:", x);
 
// x *= 4;
// console.log("After x *= 4:", x);
 
// x /= 2;
// console.log("After x /= 2:", x);
 
// x++;
// console.log("After x++:", x);
 
// x--;
// console.log("After x--:", x);
 
// x--;
// console.log("After x-- twice:", x);
 
// console.log("=== COMPARISON OPERATORS ===");
// console.log("Age comparison:");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);
 
// console.log("Number comparisons:");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);
 
// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge);
 
// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older:", isJonasOlder);
 
// console.log("Complex comparison:");
// console.log(now - 1991 > now - 2018);
 
// console.log("=== OPERATOR PRECEDENCE ===");
 
// let z, y;
// z = y = 25 - 10 - 5;
// console.log(z,y);
 
// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);
 
// console.log("=== BMI Calculator ===");
 
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
 
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
 
// //1.
// console.log("Mark's BMI result:", BMIMark);
// console.log("John's BMI result:", BMIJohn);
 
// //2.
// const MarkHigherBMI = BMIMark > BMIJohn;
// console.log("Mark's BMI is higer:",MarkHigherBMI);
 
// //3.
// console.log("Mark's BMI: " + BMIMark, " | John's BMI: " + BMIJohn, " | Mark's BMI is higher: ", MarkHigherBMI);


// //03 STRINGS AND DECISIONS 
//String and Template Literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;
 
// const jonas =
//     "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);
 
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);
 
// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equals five`);
// console.log(`Comparison too: ${5 > 3}`);
 
// console.log(`Just a regular string...`);
 
// //Taking Decisions: if / else Statements
// const age = 18;
 
// if(age >= 18){
//     console.log("Sarah can start driving's license.");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :) `);
// }
 
// // Truthy and Falsy Values
// // 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));
 
 
// console.log("=== BMI Calculator Part 2 ===");

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
 
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);
 
// if(BMIMark > BMIJohn){
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})`);
// }


//04 ADVANCE CONCEPTS AND PRACTICE 
// type conversion (manual)
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);
// console.log(typeof String(23));

// //type coercion (automatic)
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");
// console.log("23" * "2");

// let n = "1" + 1;
// console.log(n);

// n = n - 1;
// console.log(n);

// console.log(2 + 3 + 4 + "5");
// console.log("10" - "4" - "3" - 2 + "5");

// console.log("5" + 2);
// console.log("5" - 2);
// console.log("5" * 2);
// console.log("5" / 2);
 

// //equality operators
// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");

// console.log("18" === 18);
// console.log("18" == 18);
// console.log(18 === 18);

// console.log("0" == 0);
// console.log(0 == false);
// console.log("0" == false);
// console.log(null == undefined);

// console.log("" == 0);
// console.log("  " == 0);

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//     console.log("Cool! 23 is an amazing number!");
// } else if (favorite === 7) {
//     console.log("7 is also a cool number!");
// } else if (favorite === 9) {
//     console.log("9 is also a cool number");
// } else {
//     console.log("Number is not 23 or 7 or 9.");
// }

// if (favorite !== 23) console.log("Why not 23?");

//test equality operators
let userInput = 25; 
console.log("userInput == 25: ", userInput == 25);
console.log("userInput === 25: ",userInput === 25);

let converted = Number(userInput);
console.log("After conversion:");
console.log("converted === 25:", converted === 25);

let testValues = ["0", " ", false, null];

for (let val of testValues) {
  console.log("val == 0:", val == 0);
  console.log("val === 0:", val === 0);
  console.log("val == false:", val == false);
  console.log("val === false:", val === false);
  console.log("val == null:", val == null);
  console.log("val === null:", val === null);
}


//logical operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(`AND OPERATOR: ${hasDriversLicense && hasGoodVision}`);
console.log(`OR OPERATOR: ${hasDriversLicense || hasGoodVision}`);
console.log(`NOT OPERATOR: ${!hasDriversLicense}`);

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && !isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone is not able to drive...");
}   


const age = 20;
const hasPermission = true;
const hasExperience = false;

if(age >= 18 && hasPermission && hasExperience) {
    console.log("Approved to drive.");
} else {
    console.log("Not approved to drive.");
}

//Club entry system 
const ageClub = 19;
const hasID = false;
const isVIP = false;
if((ageClub >= 21 && hasID || isVIP)) {
    console.log("Welcome to the club!");
} else {
    console.log("You are not allowed to enter the club.");
}

// ternary operator
const ageTernary = 24;
const drink = ageTernary >= 18 ? "wine" : "water"; 
console.log(drink);


let drink2;
if (ageTernary >= 20) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${ageTernary >= 20 ? `wine` : `water`}`);

//TIP CALCULATOR 
const bill = 430;
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
