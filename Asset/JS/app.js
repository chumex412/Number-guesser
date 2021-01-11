let min = 1,
    max = 10,
    guessLeft = 3,
    //winningNum = 2;
    winningNum = min + (Math.floor(Math.random() * max));
    console.log(winningNum)

// UI elements
const minValue = document.querySelector('.min');
const maxValue = document.querySelector('.max');
minValue.textContent = min;
maxValue.textContent = max;

const form = document.getElementById('form');
      numberInput = document.getElementById('guess-input'),
      submit = document.getElementById('submit-btn'),
      container = document.querySelector('.container'),
      messageText = document.querySelector('.message');

// Kick start event
handleEvent();

function handleEvent() {
  form.addEventListener('mouseup', (e) => {
    if(e.target.classList.contains('play-again')) {
      window.location.reload()
    }
  })
  form.addEventListener('submit', createNumber);
}

function createNumber (e) {
  //const number = '1,2,3,4,5,6,7,8,9,10',
        //sNumber = number.split(','), 
  const  guess = parseFloat(numberInput.value);

  // When a invalid input is entered
  if (isNaN(guess) || guess < min || guess > max) {
    showMessage('Please enter a valid input', 'red');
  }

  // What happens when a valid input is entered
  if(guess === winningNum) {
    // Gameover, you won.
    gameOver(true, `You won, the answer being ${winningNum}`);
  } else {
    // Countdown for number of trials
    guessLeft -= 1;

    if(guessLeft === 0) {
      // Gameover, you Lost 
      gameOver(false, `Game over you lost, the correct answer is ${winningNum}`);
      guessLeft = 0;
    } else {
      //Gameover continues, answer wrong
      showMessage(`${numberInput.value} is wrong, ${guessLeft} trial left`, 'red');
      numberInput.value = '';
    }

  }

  e.preventDefault();
}

// Message to be shown
function showMessage(message, color) {
  // Set text message
  messageText.textContent = message;
  // Set text color
  messageText.style.color = color;
  // Set input border color
  numberInput.style.borderColor = color;
}

function gameOver(won, message) {
  let color;
  won === true ? color = 'green' : color = 'red';
  //Disable input
  numberInput.disabled = true;

  // Change button text
  submit.value = 'Play again';
  // Add class to button
  submit.classList.add('play-again'); 

  showMessage(message, color);
}