'use strict';

//console.log('=== DOM Element Selection ===');
 
const messageEl = document.querySelector('.message');
// console.log(messageEl);
// messageEl.textContent = 'Hello from js';
 
const scoreEl = document.querySelector('.score');
// console.log(scoreEl);
// scoreEl.textContent = 15;

const numberEl = document.querySelector('.number');
// console.log(numberEl);
// numberEl.textContent = 10;
 
const highscoreEl = document.querySelector('.highscore');
// console.log(highscoreEl);
// highscoreEl.textContent = 18;
 
const guessEl = document.querySelector('.guess');
// console.log(guessEl);
// guessEl.value = 6;


//Game state variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
 
let score = 20;
let highscore = 0;
 
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

////
//BASIC GAME LOGIC
document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked');
  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);
 
 
  if (guess === secretNumber) {
 
    console.log('Correct guess!!!');  
   
    document.querySelector('.number').textContent = secretNumber;
 
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
   
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
    document.querySelector('.message').textContent = '🔥 Congrats! You won 👑';
 
  } else if (guess > secretNumber) {
      console.log('Number is too high!!!');
      document.querySelector('.message').textContent = '😎 Too High !!!';
      score--;
      document.querySelector('.score').textContent = score;
      if (score < 1) {
        document.querySelector('.message').textContent = 'You Lost !';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
      }
  } else if (guess < secretNumber) {
      console.log('Number is too low!!!');
      document.querySelector('.message').textContent = '😒 Too Low !!!';
      score--;
      document.querySelector('.score').textContent = score;
      if (score < 1) {
        document.querySelector('.message').textContent = 'You Lost !';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
      }
  }
});
 
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  //restart secret number
  document.querySelector('.number').textContent = '?';
  //reset score
  document.querySelector('.score').textContent = score;
  //empty guess value
  document.querySelector('.guess').value = '';
  //enable guess and check btns
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  console.log('Game Reset! New Secret Number:', secretNumber);
  document.body.style.backgroundColor = '';
})


