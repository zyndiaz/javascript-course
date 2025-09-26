'use strict';

console.log('Pig Game ready!');

//game variables
let scores, currentScore, activePlayer, playing;

//select player 0
const player0El = document.querySelector('.player--0');

//select player 1
const player1El = document.querySelector('.player--1');

//select score 0 element
const score0El = document.querySelector('#score--0');

//select score 1 element
const score1El = document.querySelector('#score--1');

const current0El = document.querySelector('#current--0');

const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');

const btnRollEl = document.querySelector('.btn--roll');

//game function
const init = function () {
    //start with zero scores
    scores = [0, 0];
    //set current score to zero
    currentScore = 0;
    //set active player to player 0
    activePlayer = 0;
    playing = true;

    //reset all display
    score0El.textContent = 0;

    score1El.textContent = 0;

    current0El.textContent = 0;

    current1El.textContent = 0;

    diceEl.classList.add('hidden');
}; 

init();     

btnRollEl.addEventListener('click', function () {
    if (playing) {
        //dice logic
        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.classList.remove('hidden');

        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;

            document.getElementById(`current--${activePlayer}`).textContent = currentScore; 
        } else {
            //handle roll 1
            currentScore = 0;

            document.getElementById(`current--${activePlayer}`).textContent = 0;
        }
    }
});

