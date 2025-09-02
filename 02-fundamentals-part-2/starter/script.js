// // console.log("Part 2: Functions ready!");

// // //Functions - declaration and expressions
// // console.log("=== FUNCTIONS === ");

// // function logger() {
// //     console.log("My name is Franzyn");
// // }

// // logger();
// // logger();
// // logger();

// // function foodProcessor (apples, oranges) {
// //     console.log(apples, oranges);
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //     return juice;
// // }

// // console.log(foodProcessor(5, 3));

// // // Function expression 
// // const calcAge = function (birthYear) {
// //     return 2025 - birthYear;
// // };

// // const age1 = calcAge(2004);
// // console.log(age1);

// // function introduce(firstName, lastName, age) {
// //     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// //     return introduction;
// // }

// // console.log(introduce("Franzyn", "Chavez", 21));
// // console.log(introduce("Zyn"));

// // //Return values and function scope
// // function yearsUntilRetirement(birthYear, firstName) {
// //     const age = calcAge(birthYear);
// //     const retirement = 65 - age;

// //     if (retirement > 0) {
// //         console.log(`${firstName} retires in ${retirement} years.`);
// //         return retirement;
// //     } else {
// //         console.log(`${firstName} is already retired.`);
// //     }
// // }

// // console.log(yearsUntilRetirement(2004, "Franzyn"));
// // console.log(yearsUntilRetirement(1950, "Mike"));

// // // function scope 
// // const globalVar = "I am global";

// // function testScope() {
// //     const localVar = "I am local";
// //     console.log(globalVar);
// //     console.log(localVar);  
// // }

// // testScope();
// // console.log(globalVar);
// // // console.log(localVar);

// // // Coding Challenge 1
// // function calcAverage(score1, score2, score3) {
// //     return (score1 + score2 + score3) / 3;
// // }

// // function checkWinner(avgDolphins, avgKoalas) {
// //     if (avgDolphins >= 2 * avgKoalas) {
// //         return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
// //     } else if (avgKoalas >= 2 * avgDolphins) {
// //         return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
// //     } else {
// //         return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
// //     }
// // }

// // let scoreDolphins = calcAverage(44, 23, 71);
// // let scoreKoalas = calcAverage(65, 54, 49);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // scoreDolphins = calcAverage(85, 54, 41);
// // scoreKoalas = calcAverage(23, 34, 27);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));

// //Arrays 
// const grades = [85, 90, 78, 92, 88];
// console.log(grades);

// const friends = ["Ross", "Chandler", "Joey"];
// console.log(friends);

// const mixed = ["Monica", 40, false, friends];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// //Accessing Array Elements 
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);

// // access length
// console.log(friends.length);

// //change array element
// friends [0] = 'Rachel';
// console.log(friends);

// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// const ages = [calcAge(2000), calcAge(1940), calcAge(1991)];
// console.log(ages);

// //array methods 
// const newLength = friends.push("Phoebe");
// console.log(friends);
// console.log(newLength);

// friends.unshift("Gunther");
// console.log(friends);

// // removing elements
// const popped = friends.pop(); // remove from end
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift(); // remove from start
// console.log(shifted);
// console.log(friends);

// //finding element
// console.log(friends.indexOf("Chandler"));
// console.log(friends.indexOf("Monica"));

// //checks element exists
// console.log(friends.includes("Joey"));
// console.log(friends.includes("Fun Bobby"));

// //array iteration 
// // traditional for loop
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

// //for each loop
// friends.forEach(function(friend, index) {
//     console.log(`${index + 1}: ${friend}`);
// });

// //arrow function 
// friends.forEach((friend, index) => {
//   console.log(`${index + 1}: ${friend}`);
// });

// const grades2 = [85, 92, 50, 96, 50, 74];
// let total = 0;

// for (let i = 0; i < grades2.length; i++) {
//     total += grades2[i];
// }

// const average2 = total / grades2.length;
// console.log(`Average grade: ${average2.toFixed(2)}`);

// let passedCount = 0;
// grades2.forEach(grade => {
//     if (grade >= 70) passedCount++;
// });

// console.log(`${passedCount} out of ${grades2.length} students have passed`);

// //Coding challenge 2

// const grades3 = [78, 85, 92, 67, 88, 95, 73, 82];

// function calculateAverage(grades3){
//     let sum = 0;
//     for (let i = 0; i < grades3.length; i++) {
//         sum += grades3[i];
//     }
//     return sum / grades3.length;
// }

// function findHighestGrade(grades3) {
//     let highest = grades3[0];
//     for (let i = 1; i < grades3.length; i++) {
//         if (grades3[i] > highest) {
//             highest = grades3[i];
//         }
//     }
//     return highest;
// }

// function findLowestGrade(grades3) {
//     let lowest = grades3[0];
//     for (let i = 1; i < grades3.length; i++) {
//         if (grades3[i] < lowest) {
//             lowest = grades3[i];
//         }
//     }
//     return lowest;
// }

// function countPassing(grades3, passingGrade) {
//     let count = 0;
//     for (let i = 1; i < grades3.length; i++) {
//         if (grades3[i] >= passingGrade) {
//             count++;
//         }
//     }
//     return count;
// }

// // Generate complete report
// const average = calculateAverage(grades3);
// const highest = findHighestGrade(grades3);
// const lowest = findLowestGrade(grades3);
// const passing = countPassing(grades3, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades3.length}`);

//Objects
// The Array Problem
const zynArray = [
  "Zyn",
  "Chavez",
  2025 - 2004,
  "student",
  ["Rachel", "Monica", "Phoebe"],
];

console.log(zynArray[0]);
console.log(zynArray[1]); 

const zynObject = {
    firstName: "Zyn",
    lastName: "Chavez",
    age: 2025 - 2004,
    job: "student",
    friends: ["Rachel", "Monica", "Phoebe"],
};
console.log(zynObject);

//property access methods

//dot notation
console.log(zynObject.firstName);
console.log(zynObject.lastName);
console.log(zynObject.age);

//bracket notation
console.log(zynObject["job"]);
console.log(zynObject["friends"]);

const nameKey = "Name";
console.log(zynObject["first" + nameKey]);

//modifying exisitng properties
zynObject.job = "software engineer";
zynObject["age"] = 20;
console.log(zynObject);

//add new properties
zynObject.location = "Sweden";
zynObject['instagram'] = "@zyn.dz";
zynObject.hasDriversLicense = true;
console.log(zynObject);

//objects
const person = {
    name: "Jonas",
    age: 46,
    occupation: "teacher",
}

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue"
}

const student = {
    name: "Sarah",
    grades: [85, 92, 78],
    address: {
        street: "123 Main St.",
        city: "New York",
    },
}

console.log(student.grades[0]);
console.log(student.address.city);

//Object Methods
const john = {
    firstName: "John",
    lastName: "Doe",
    birthYear: 1995,
    job: "teacher",
    friends: ["Micheal", "Peter", "Steven"],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        return 2025 - birthYear;
    },
}

console.log(john.calcAge(2000));

//'this' keyword
const johnImproved = {
    firstName: "John",
    lastName: "Doe",
    birthYear: 1995,
    job: "teacher",
    friends: ["Micheal", "Peter", "Steven"],
    hasDriversLicense: true,

    // calcAge: function() {
    //     console.log(this);
    //     return 2025 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    },
};

console.log(johnImproved.calcAge());
console.log(johnImproved.age);
console.log(johnImproved.getSummary());

//Challenge - User Profile System

const user = {
    firstName: "Sarah",
  lastName: "Johnson",
  birthYear: 1995,
  location: "New York",
  interests: ["photography", "travel", "coding"],
  friends: [
    { name: "Michael", status: "active" },
    { name: "Emma", status: "inactive" },
    { name: "David", status: "active" },
  ],
  isActive: true,

  calcAge: function () {
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },

  addFriends: function (name, status = "active") {
    this.friends.push({ name, status: status });
    return this.friends.length;
  },

  getActiveFriends: function () {
    const activeFriends = this.friends.filter((friend) => friend.status === 'active');
    return activeFriends.length;
  },

  toggleStatus: function () {
    this.isActive = !this.isActive;
    return this.isActive;
  },

  getSummary: function () {
    const age = this.calcAge();
    const activeFriends = this.getActiveFriends();
    const status = this.isActive ? "active" : "away";

    return `${this.firstName} ${this.lastName} ${age} from this ${this.location}
    Currently ${status}
    Interest: ${this.interests.join(", ")}
    Connected and sharing life's adventures`;
  }, 

};
