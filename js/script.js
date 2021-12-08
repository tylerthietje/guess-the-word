// Select ul where the player's guessed letters appear
const guessedLettersElement = document.querySelector(".guessed-letters");
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
// Array that contains all the letters guessed by the player
const guessedLetters = [];


// Create a function that replaces the letters of the word with ●'s
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word){
        // console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

// Add event listener for the Guess! Button that logs the letter guessed and then clears the input value
guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    // Empty the text of the message element
    message.innerText = "";
    // Grab the value of the input box
    const guess = letterInput.value;
    // log the value of the input box
    // console.log(guess);    
    // Validating that the guess is acceptable in length and type
    const goodGuess = validateInput(guess);
    // log the input to the console.
    console.log(goodGuess)
    // If guess is a letter, pass it to the makeGuess function
    if (goodGuess) {
        makeGuess(guess);
    }
    // Clear the input box
    letterInput.value = "";
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        // Is the input empty/blank?
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        // Did you type more than one letter?
        message.innerText = "Please only enter one letter!";
    } else if (!input.match(acceptedLetter)) {
        // Did you enter something other than a letter?
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        // we got a single letter!
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
    message.innerText = "You have already guessed that letter. Please try again.";
    } else {
        guessedLetters.push(guess);
        // console.log(guessedLetters);
        displayGuessedLetter();
        updateWordInProgress(guessedLetters);
    }
};

const displayGuessedLetter = function () {
    guessedLettersElement.innerHTML = "";
    
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●");
        }
    }
        console.log(revealWord);
        wordInProgress.innerText = revealWord.join("");
        ifWon();
};

const ifWon = function () {
    if (wordInProgress.innerText === word.toUpperCase()) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
};
