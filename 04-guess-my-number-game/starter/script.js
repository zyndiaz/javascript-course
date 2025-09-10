'use strict';

console.log('=== DOM Element Selection ===');
 
const messageEl = document.querySelector('.message');
console.log(messageEl);
messageEl.textContent = 'Hello from js';
 
const scoreEl = document.querySelector('.score');
console.log(scoreEl);
scoreEl.textContent = 15;

const numberEl = document.querySelector('.number');
console.log(numberEl);
numberEl.textContent = 10;
 
const highscoreEl = document.querySelector('.highscore');
console.log(highscoreEl);
highscoreEl.textContent = 18;
 
const guessEl = document.querySelector('.guess');
console.log(guessEl);
guessEl.value = 6;


//Game state variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
 
let score = 20;
let highscore = 0;
 
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;
