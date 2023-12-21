const randNum = Math.floor(Math.random() * 100) + 1;

let guessesMade = 0;
const guessesLeft = 10;

document.querySelector("#subt").addEventListener("click", () => {
  const guessMade = parseInt(document.querySelector("#guessField").value);

  if (isNaN(guessMade) || guessMade < 1 || guessMade > 100) {
    document.querySelector(".lastMsg").innerHTML = "Please enter a valid number between 1 and 100.";
    return;  // Exit the function to avoid further processing
  }

  if (guessMade < randNum) {
    document.querySelector(".lastMsg").innerHTML = "You are guessing less.";
  } else if (guessMade > randNum) {
    document.querySelector(".lastMsg").innerHTML = "You are guessing more.";
  } else {
    document.querySelector(".lastMsg").innerHTML = "Correct";
  }

  guessesMade++;
  document.querySelector(".guesses").innerHTML = guessesMade;
  document.querySelector(".lastResult").innerHTML = guessesLeft - guessesMade;

  if (guessesMade === guessesLeft) {
    document.querySelector(".lastMsg").innerHTML = "You've run out of attempts";
  }
});
