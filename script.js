'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

function messageText(message) {
  return (document.querySelector('.message').textContent = message);
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // NO Input
  if (!guess) {
    messageText('NO Number');
  }
  // Wrong Guess
  else if (guess !== number) {
    if (score > 1) {
      messageText(guess > number ? 'TOO High!' : 'TOO Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      messageText('You Lost U Fucking Loser!!');
      document.querySelector('.score').textContent = 0;
    }

    // Correct Guess
  } else if (guess === number) {
    messageText('Gotcha!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  messageText('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
});

console.log(number);
