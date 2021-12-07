// Select ul where the player's guessed letters appear
const guessedLetter = document.querySelector(".guessed-letters");
// Select the Guess button
const guessButton = document.querySelector(".guess");
// Select the text input where player guesses a letter
const letterInput = document.querySelector(".letter");
// Select the empty paragraph where the word in progress will display
const wordInProgress = document.querySelector(".word-in-progress");
// Select the paragraph where the remaining guesses will display
const remaining = document.querySelector(".remaining");
// Select span in paragraph where remaining guesses will display
const remainingSpan = document.querySelector("span");
// Select the paragraph where messages will appear when player guesses a letter
const message = document.querySelector(".message");
// Select the hidden button that appears prompting to play again
const playAgain = document.querySelector(".play-again");
// variable containing Magnolia which is the starting word for now
const word = "magnolia";

// Create a function that replaces the letters of the word with ●'s
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word){
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

// Add event listener for the Guess! Button that logs the letter guessed and then clears the input value
guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
});