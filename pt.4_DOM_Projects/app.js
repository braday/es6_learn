/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winingNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again Event Listener
game.addEventListener('mousedown', function(e){
  // click then reload the page
  if(e.target.className == 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  // Validate 
  if(isNaN(guess)|| guess < min || guess > max ){
    setMessage(`Please enter a no# between ${min} or ${max}`, 'red', true);
    // return false;
  }

  // Check if won
  if (guess === winingNum){
    hasWon(true, `${winingNum} is correct, YOU WIN!` );
  } else {
    // Wrong No#
    guessesLeft -= 1;
    if (guessesLeft === 0) {
       // Game Over - lost
      hasWon(false, `Game Over! ${winingNum} is correct answer`);
    } else {
      // Game go on

      // Change border color
      guessInput.style.borderColor = 'red';

      // Clear Input
      guessInput.value = '';

      setMessage(`${guess} is not correc, ${guessesLeft} guess left`, 'red');
    }

  }
  //setTimeout(this.setMessage, 1000);
});

// Game Over function
function hasWon(won, msg) {
  let color;
  color = won ? 'green' : 'red';
  // won === true ? color = "green" : color = "red";
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  
  // Set Text Color
  message.style.color = color;
  // Set Msg
  setMessage(msg);


  // Reset Game
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}


// Set message
function setMessage(msg, color, timeOut) {
  message.style.color = color;
  message.textContent = msg;

  // Time out to hide msg
  if(timeOut){
    setTimeout(() => {
      message.textContent = '';
    }, 2000);
  }
}

// Get Winning No#
function getRandomNum(min, max){
  // time max (10) not work, nor get the 10... must use below
  return Math.floor(Math.random()*(max-min+1)+min);
  //console.log(Math.floor(Math.random() * (max - min + 1)));
}
