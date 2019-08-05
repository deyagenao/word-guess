//Variables to keep track of wins, guesses and letters guessed (corrent and incorrect)
var wins = 0;
var guesses = 12;
// potential issue with this array, what if the same letter appears more than once in the word?
var correctLettersGuessed = [];
var wrongLettersGuessed = [];

// Set up variables to display on page
var winsText = document.getElementById("wins-text");
var guessesText = document.getElementById("guesses-text");
var wrongLettersGuessedText = document.getElementById("wrong-letters-guessed");
var directionsText = document.getElementById("directions-text");
var currentWordText = document.getElementById("current-word-text");

// variables for choosing a random word and array containing all of the possible words to play with
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "u", "w", "x", "y", "z"];
var animalWordsToGuess = [
  "tiger",
  "giraffe",
  "dolphin",
  "shark",
  "alligator",
  "wolf",
  "bonobo",
  "chimpanzee",
  "zebra",
  "blobfish"
];

//function for choosing a random word from the array, maybe doesn't even have to be a function..? 
// function chooseRandomAnimalWord() {
  var chosenWord =
    animalWordsToGuess[Math.floor(Math.random() * animalWordsToGuess.length)];
  // run function to play game:
  // guessWord();
// }
console.log(chosenWord);
//create underscores to hide the current word 
var hiddenWord = [];
var hideChosenWord = function () {
    for (var i = 0; i < chosenWord.length; i++) {
        hiddenWord.push('_');
    }
    return hiddenWord;
}
console.log(hideChosenWord());
console.log(hiddenWord);
//convert the hidden word array to a string to display on page-- not working because commas appear between the underscores
var currentWord = hiddenWord.toString();
currentWordText.textContent = currentWord.replace(/,/g, " ");

// console.log(currentWord);

//check if guess is right 
//if guess is right, change letter in underscores 
//if guess is wrong, add the letter to the guessed letters div 

// Listen for user’s input. Listen for key pressed. Guess count decreases each time that a key is pressed, unless key has already been pressed
// Onkeyup:
document.onkeyup = function(event) {
    //check if working: 
    console.log(event.key);
    // Determines which key was pressed
    var userGuess = event.key;
    // Hide directions
    directionsText.textContent = "Guess, until you can't guess anymore!";
    // check that the user guess is a letter and that it has not already been guessed
    if (letters.indexOf(userGuess) > -1 && correctLettersGuessed.indexOf(userGuess) == -1 && wrongLettersGuessed.indexOf(" " + userGuess) == -1) {
            //check if letter is in the chosen word 
        if (chosenWord.indexOf(userGuess) > -1) {
            //letter is added to correct guesses 
            correctLettersGuessed.push(userGuess);
            //replace underscore from hidden word with the correct letter
            hiddenWord[chosenWord.indexOf(userGuess)] = userGuess;
        } 
        // if letter is not in the chosen word:  
        else {
            //letter is added to incorrect guesses
            wrongLettersGuessed.push(" " + userGuess);
            wrongLettersGuessedText.textContent = wrongLettersGuessed.toString();
        }
        //Guess count goes down by one
        guesses--;
        //Display new number of guesses
        guessesText.textContent = guesses;
    };
    //if all underscores have been filled, then player wins the game and game restarts 
    if (hiddenWord.indexOf("_") === -1) {
        directionsText.textContent = "You win! You should totally play again.";
        wins++;
        winsText.textContent = wins;
    };
    //if number of guesses reaches 0 and there is at least one letter missing in the word, the player loses and the game restarts 
    if (guesses === 0 && hiddenWord.indexOf("_") > -1) {
        directionsText.textContent = "You lose! Maybe you could try again...";
    };
   
    console.log(correctLettersGuessed);
    console.log(wrongLettersGuessed);
    console.log(hiddenWord);
  
  //  if letter is in the word, underscore in word will be replaced with letter   

//     //letter will be added to text below
//     // create new element, include userGuess and then append the child?
//     wrongLettersGuessedText.textContent = userGuess;
//   }
};
// Else: nothing happens
// When all underscores have been replaced, image/ sound will be revealed. Wins number +1
//If user does not guess the word in under 12 guesses, game starts over?
//use property of the variable word to be able to identify when the word is completed, also create a variable to keep track of how many correct letters guessed, and equal them?:
// if (correctLettersGuessed == word.length)
// Next round button appears

// When user clicks the button, new underscores appear, text is cleared from letters guessed

// Ideas for starting new rounds: hiding and displays different html elements
