'use strict';

// //console.log('=== DOM Element Selection ===');
 
// const messageEl = document.querySelector('.message');
// // console.log(messageEl);
// // messageEl.textContent = 'Hello from js';
 
// const scoreEl = document.querySelector('.score');
// // console.log(scoreEl);
// // scoreEl.textContent = 15;

// const numberEl = document.querySelector('.number');
// // console.log(numberEl);
// // numberEl.textContent = 10;
 
// const highscoreEl = document.querySelector('.highscore');
// // console.log(highscoreEl);
// // highscoreEl.textContent = 18;
 
// const guessEl = document.querySelector('.guess');
// // console.log(guessEl);
// // guessEl.value = 6;


// //Game state variables
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
 
// let score = 20;
// let highscore = 0;
 
// document.querySelector('.score').textContent = score;
// document.querySelector('.highscore').textContent = highscore;

// ////
// //BASIC GAME LOGIC
// document.querySelector('.check').addEventListener('click', function () {
//   console.log('Check button clicked');
//   const guess = Number(document.querySelector('.guess').value);
//   console.log('Player guessed:', guess);
 
//   if(!guess) {
//     document.querySelector('.message').textContent = 'Please input a number';
//     return;
//   }
//   if(guess < 1 || guess > 20) {
//     document.querySelector('.message').textContent = 'Number must be between 1 to 20';
//     return;
//   }
 
 
//   if (guess === secretNumber) {
 
//     console.log('Correct guess!!!');  
   
//     document.querySelector('.number').textContent = secretNumber;
 
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
   
//     document.querySelector('.guess').disabled = true;
//     document.querySelector('.check').disabled = true;
//     document.querySelector('.message').textContent = '🔥 Congrats! You won 👑';
//     document.body.style.backgroundColor = 'green';
//     document.querySelector('.guess').value = '';
 
//   } else if (guess > secretNumber) {
//       console.log('Number is too high!!!');
//       document.querySelector('.message').textContent = '😎 Too High !!!';
//       score--;
//       document.querySelector('.score').textContent = score;
//       if (score < 1) {
//         document.querySelector('.message').textContent = 'GAME OVER ! Please press again';
//         document.querySelector('.number').textContent = secretNumber;
//         document.querySelector('.guess').disabled = true;
//         document.querySelector('.check').disabled = true;
//         document.body.style.backgroundColor = 'maroon';
//         document.querySelector('.guess').value = '';
//       }
//   } else if (guess < secretNumber) {
//       console.log('Number is too low!!!');
//       document.querySelector('.message').textContent = '😒 Too Low !!!';
//       score--;
//       document.querySelector('.score').textContent = score;
//       if (score < 1) {
//         document.querySelector('.message').textContent = 'GAME OVER ! Please press again';
//         document.querySelector('.number').textContent = secretNumber;
//         document.querySelector('.guess').disabled = true;
//         document.querySelector('.check').disabled = true;
//         document.body.style.backgroundColor = 'maroon';
//         document.querySelector('.guess').value = '';
//       }
//   }
// });
 
// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.message').textContent = 'Start guessing...';
//   //restart secret number
//   document.querySelector('.number').textContent = '?';
//   //reset score
//   document.querySelector('.score').textContent = score;
//   //empty guess value
//   document.querySelector('.guess').value = '';
//   //enable guess and check btns
//   document.querySelector('.guess').disabled = false;
//   document.querySelector('.check').disabled = false;
//   console.log('Game Reset! New Secret Number:', secretNumber);
//   document.body.style.backgroundColor = '';
// })


//FINAL VERSION
console.log('=== Guess My Number Game ===' );

//constant variables
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;
 
//cache selectors
const bodyEl = document.body;
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const guessInputEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector ('.check');
const againBtnEl = document.querySelector('.again');
 
//UI helpers
function setMessage (text) {
    messageEl.textContent = text;
}
function setNumber(value) {
    numberEl.textContent = value;
}
function setScore(value) {
    scoreEl.textContent = value;
}
function setHighscore(value) {
    highscoreEl.textContent = value;
}
function setBackground(color) {
    bodyEl.style.backgroundColor = color;
}
function disablePlay(disabled) {
    guessInputEl.disabled = disabled;
    checkBtnEl.disabled = disabled;
}
function clearInput() {
    guessInputEl.value = '';
}

//game state & reset
let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
let score = START_SCORE;
let highscore = 0;
console.log('Secret Number:', secretNumber);
 
 
function resetGameState() {
score = START_SCORE;
secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
console.log('Secret Number:', secretNumber);
}
 
 
function renderInitialUI() {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  disablePlay(false);
  setBackground('');
}
 
//basic game logic
checkBtnEl.addEventListener('click', function() {
    const guess = Number(guessInputEl.value);
 
    //validation
    if (!guess) return setMessage ('Please enter a number.');
   
    if (guess < MIN_NUMBER || guess > MAX_NUMBER)
    return setMessage (`Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`);
 
    if (guess === secretNumber) {
    setMessage ('You are Correct! 🥳');
    setNumber(secretNumber);
    setBackground('green');
    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }
    disablePlay(true);
    clearInput();
    return;
  }
 
  setMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
  score--;
  setScore(score);
 
  if (score < 1) {
    setMessage('You lost!');
    setNumber(secretNumber);
    setBackground('maroon');
    disablePlay(true);
    clearInput();
  }
});
 
againBtnEl.addEventListener('click', function() {
  resetGameState();
  renderInitialUI();
})
 
window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !checkBtnEl.disabled) {
    checkBtnEl.click();
  }
});
 
againBtnEl.addEventListener('click', function () {
  guessInputEl.focus();
});

