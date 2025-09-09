// Remember, we're gonna use strict mode in all scripts now!
'use strict';

console.log("=== DEVELOPMENT ENVIRONMENT SETUP ===");

const messyExample = function (name, age) {
    if (age => 18) {
        return "Hello " + name + ", you are anadult";
    } else {
        return "Hello " + name + ", you are a minor";
    }
};

console.log("Current messy code example:", messyExample("John", 25));
console.log("Goal: Automatic formatting, auto-refresh, and typing shortcuts");

function testExtensions() {
  const extensionTests = [
    { name: "Prettier", status: "installed", purpose: "code formatting" },
    { name: "Live Server", status: "installed", purpose: "auto refresh" },
    {
      name: "Auto Rename Tag",
      status: "installed",
      purpose: "HTML efficiency",
    },
  ];

  return extensionTests;
}

const extensionStatus = testExtensions();
console.log("Extension installation status:", extensionStatus);

const prettierTest = {
  firstName: "Sarah",
  lastName: "Johnson",
  skills: ["JavaScript", "React", "Node.js"],
  isActive: true,
};

const messyFunction = function (x, y, z) {
  if (x > 0 && y > 0) {
    return x + y + z;
  } else {
    return 0;
  }
};

const messyArrow = (items) => {
  return items.map((item) => {
    return item.toUpperCase();
  });
};

console.log(
  "Before Prettier formatting - this code works but looks unprofessional"
);


const studentTest = {
  firstName: "your-name",
  skills: ["HTML", "CSS", "JavaScript"],
  experience: "beginner",
  goals: ["become-developer", "build-projects"],
};

const testFunc = function (data) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
};

//Testing live server 
// test 1
let liveServerTest = "Updated message - change #2";
console.log("Live Server test:", liveServerTest);

// test 2
const tmeStamp = new Date().toLocaleTimeString();
const updateCount = 1;

console.log(`Live Server update #${updateCount} at ${tmeStamp}`);

//test 3
function demonstrationLiveReload() {
  const randomColor = ["red", "blue", "green", "purple", "orange"][Math.floor(Math.random() * 5)];
  const message = `Live server rocks! random color: ${randomColor}`;
  console.log(message);
  return message;
};

demonstrationLiveReload();

function showCurrentTime() {
  const now = new Date().toLocaleTimeString();
  console.log("Current time:", now);
  return now;
};

showCurrentTime();

//code snippets testing
console.log("Testing snippet functionality - cl + Tab created this!");

function testSnippets() {
  console.log("Function created using snippet - func + Tab!");
  return "Snippets working perfectly!";
}

testSnippets();

const snippetTest = (message) => {
  console.log(`Arrow function from snippet: ${message}`);
  return message;
};

snippetTest("Snippets save so much typing time!");

//environment setup verification
console.log("🎉 Professional Development Environment Complete!");
console.log("✅ Prettier: Automatic code formatting");
console.log("✅ Live Server: Automatic browser refresh");
console.log("✅ Snippets: Fast code generation");
console.log("✅ Extensions: Enhanced productivity");
console.log("Ready for professional JavaScript development!");

//calc 
function calculateTimeSavings() {
  const dailyConsoleLogs = 50;
  const keystrokesSavedPerLog = 11;
  const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
  const monthlySavings = dailySavings * 22;
  console.log(`Daily keystrokes saved: ${dailySavings}`);
  console.log(`Monthly keystrokes saved: ${monthlySavings}`);

  return { daily: dailySavings, monthly: monthlySavings };
}

calculateTimeSavings();

//hour 2
console.log("=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===");

console.log(
  "Key insight: Professional developers think systematically, not just code"
);

console.log("Goal: Transform from beginner to professional problem-solver");

console.log("4-Step Framework: Understand → Divide → Research → Implement");

//smart home thermometer
const calctempAltitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if(typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max,min);
  return max - min;

}

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const amplitude = calctempAltitude(temperatures);
console.log(amplitude);

//two arrays
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const array1 = [3, 5, 1];
const array2 = [9, 0, 5];
const amplitudeNew = calcTempAmplitudeNew(array1, array2);
console.log(amplitudeNew);

console.log(
  "Problem-solving framework applied successfully to extended challenge!"
);

console.log("🎯 Framework mastered - ready for independent problem solving!"); 

//hour 3
console.log("=== HOUR 3: RESEARCH & DEBUGGING HANDLING ===");

console.log("Goal: master research and debugging like a professional developer");

console.log("Strategic research builds lasting knowledge, not just quick fixes");

//research challenge
function demonstrateArrayMax(numbers) {
  const method1 = Math.max(...numbers);

  let method2 = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > method2) method2 = numbers[i];
  }

  const method3 = numbers.reduce((max, current) => current > max ? current : max);

  return { method1, method2, method3 };
}

const testNumbers = [3, 7, 2, 9, 1, 5];
const maxResults = demonstrateArrayMax(testNumbers);
console.log("Multiple approaches from research:", maxResults);

//stackoverflow research results
function reverseStringMethods(str) {
  const method1 = str.split("").reverse().join("");

  let method2 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    method2 += str[i];
  }

  const method3 = [...str].reverse().join("");
  
  return { method1, method2, method3 };

}

const reverseResults = reverseStringMethods("hello");
console.log("Stack Overflow research results:", reverseResults );

//mdn 
function demonstrateConcat() {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const array3 = [7, 8, 9];

  const simple = array1.concat(array2);
  const multiple = array1.concat(array2, array3);

  console.log("Original array1 changed:", array1);

  return { simple, multiple };
}

const concatresults = demonstrateConcat();
console.log("MDN documentation applied:", concatresults);

//systematic debugging
function calculateAverageScore(scores) {
  let total;

  for (let i = 0; i <= scores.length; i++) {
    total += scores[i];
  }

  return total / (scores.length + 1);
}

const testScores = [85, 92, 78, 96, 88];
const buggyResult = calculateAverageScore(testScores);
console.log("Buggy result:", buggyResult);

function demonstrateConsoleDebugging(data) {
  console.group("Debugging Session");

  console.log("Input data:", data);

  if (typeof data !== "object") {
    console.warn("Warning: Expected object, got", typeof data);
  }

  console.table(data);
  console.groupEnd();

  return Array.isArray(data) ? data.length : Object.keys(data).length;
}

const arrayData = [1, 2, 3, 4, 5];
const objectData = { name: "John", age: 30, city: "New York" };

demonstrateConsoleDebugging(arrayData);
demonstrateConsoleDebugging(objectData);

function stepThroughDebugging(numbers) {
  debugger;

  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    console.log(`Processing index ${i}: value = ${currentNumber}`);

    if (typeof currentNumber === "number") {
      sum += currentNumber;
      count++;
    } else {
      console.error(`Invalid number at index ${i}:`, currentNumber);
    }
  }

  const average = count > 0 ? sum / count : 0;
  console.log("Final results:", { sum, count, average });

  return average;
}

const mixedNumbers = [10, 20, "error", 30, null, 40];
const debugResult = stepThroughDebugging(mixedNumbers);
console.log("Debug session result:", debugResult);

function calculateAverageScoreFixed(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    console.error("Invalid input: score must be a non-empty array");
    return 0;
  }

  let total = 0;

  for (let i = 0; i < scores.length; i++) {
    if (typeof scores[i] === "number") {
      total += scores[i];
    }else {
      console.warn(`skipping non-number value at index ${i}: scores[i]`);
    }
  }

  return total / scores.length;
  
}

const fixedResult = calculateAverageScoreFixed(testScores);
console.log("Fixed result:", fixedResult);


console.group("debugging Verification Tests");

const normalScores = [85, 92, 78, 96, 88];
const normalResult = calculateAverageScoreFixed(normalScores);
console.log("Normal case result:", normalResult);

const mixedScores = [85, "invalid", 92, null, 78];
const mixedResult = calculateAverageScoreFixed(mixedScores);
console.log("Mixed data result:", mixedResult);

const errorResult = calculateAverageScoreFixed("not an array");
console.log("Error case result:", errorResult);

const emptyResult = calculateAverageScoreFixed([]);
console.log("Empty array result:", emptyResult);

console.groupEnd();

console.log("Systematic debugging process successfully applied!");
console.log("All bus identified, isolated, investigated, fixed, and prevented");

//hour 4
console.log("=== HOUR 4: ADVANCED PROBLEM-SOLVING MASTERY ===");

console.log("Ready to tackle complex problems using systematic approaches");
console.log("Challenge: Build solutions that work under pressure");

//weather forecast challenge 
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecaster(arr) {

  let forecastString = "";

  for (let i = 0; i < arr.length; i++) {
    forecastString += `... ${arr[i]}°C in ${i + 1} days `;
  }

  console.log("..." + forecastString);

}

printForecaster(data1);
printForecaster(data2);

console.log("Weather forecast formatter working correctly!");

//time-pressured challenge
function analyzedWorkWeek(dailyHours) {
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
  const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;
  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const maxDay = days[maxDayIndex];
  const daysworked = dailyHours.filter((hours) => hours > 0).length;
  const isFullTime= totalHours >= 35;

  return {
    totalHours,
    averageHours,
    maxHours,
    maxDay,
    daysworked,
    isFullTime,
  };
}

const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const analysis = analyzedWorkWeek(weeklyHours);
console.log("Work week analysis:", analysis);

console.log("Challenge completed under time pressure!");

//buggy code
function legacyForecastFunction(temperatures) {
  let result = "";
  for (let i = 0; i < temperatures.length; i++) {
    result = result + temperatures[i] + " degrees in day " + (i + 1) + ", ";
  }
  return result;
}

const testData = [15, 18, 22, 19];
console.log("Buggy function output:", legacyForecastFunction(testData));

function enhancedForecastFunction(temperatures, options = {}) {
  if (!Array.isArray(temperatures) || temperatures.length === 0) {
    console.error("Invalid input: temperatures must be a non-empty array");
    return "";
  }

  const { unit = "°C", separator = "...", includeIndex = true} = options;

  let result = "";

  for (let i = 0; i < temperatures.length; i++) {
    const dayNumber = includeIndex ? i + 1 : i;
    result += `${temperatures[i]}${unit} in ${dayNumber} days${separator}`;
  }
  return separator + result.slice(0, -separator.length);
}

console.log("Enhanced function (default):", enhancedForecastFunction(testData));
console.log(
  "Enhanced function (custom):",
  enhancedForecastFunction(testData, 
    { unit: "°F", 
      separator: " | ", 
      includeIndex: false })
);

console.log("Complete developer skills successfully applied!");
console.log("Legacy code debugged, fixed, and enhanced systematically!");
