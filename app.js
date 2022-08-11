/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

//Have in mind:
/*
DOM select elements; 
Generate random number; 
Event listerers; 
Validate user input; 
Check if won scenario; 
Code for if won; 
Set message about guesses left and correct answer if lost in p class = 'message'
*/

let count = 3;
const button = document.getElementById("guess-btn");

const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);

function guessNumber() {
  count--;

  const correctMessage = "Atspėjau! Žaisti iš naujo.";
  const notCorrectMessage = `Neatspėjai, liko spėjimų: ${count} kartai.`;
  const badEndGameMessage = `Išnaudojote visus spėjimus, bandykite dar kartą.`;

  const number = document.getElementById("guess-input");

  if (randomNumber !== Number(number.value) && count > 0) {
    document.querySelector(".message").style.color = "red";
    document.querySelector(".message").textContent = notCorrectMessage;
  } else if (button.value === "Play Again") {
    location.reload();
  } else if (randomNumber === Number(number.value) && count >= 0) {
    document.querySelector(".message").style.color = "green";
    document.querySelector(".message").textContent = correctMessage;
    button.value = "Play Again";
  } else if (count === 0) {
    button.value = "Play Again";
    document.querySelector(".message").style.color = "red";
    document.querySelector(".message").textContent = badEndGameMessage;
  }
}
button.addEventListener("click", guessNumber);
