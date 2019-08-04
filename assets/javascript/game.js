//Variables to keep track of correct letters guessed, wins and total guesses
var wins = 0;
var guesses = 12;
// potential issue with this array, what if the same letter appears more than once in the word?
var correctLettersGuessed = [];
var wrongLettersGuessed = [];

// Set up variables to display on page
var winsText = document.getElementById("wins-text");
var guessesText = document.getElementById("guesses-text");
var wrongLettersGuessedElement = document.getElementById("wrong-letters-guessed");
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
// var currentWord = "";

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
        hiddenWord.push('_ ');
    }
    return hiddenWord;
}
console.log(hideChosenWord());
//convert the hidden word array to a string to display on page-- not working because commas appear between the underscores
// var currentWord = hiddenWord.toString();
// console.log(currentWord);

//check if guess is right 
//if guess is right, change letter in underscores 
//if guess is wrong, add the letter to the guessed letters div 

//use property of the variable word to be able to identify when the word is completed, also create a variable to keep track of how many correct letters guessed, and equal them?:
// if (correctLettersGuessed == word.length)

// Listen for user’s input. Listen for key pressed. Guess count decreases each time that a key is pressed, unless key has already been pressed
// Onkeyup:
document.onkeyup = function(event) {
    //check if working: 
    console.log(event.key);
    // Determines which key was pressed
    var userGuess = event.key;
    // Hide directions
    directionsText.style.display = "none";
    //check if letter is in the chosen word 
    if (chosenWord.indexOf(userGuess) > -1) {
        //letter is added to correct guesses 
        correctLettersGuessed.push(userGuess);
    } 
    // if letter is not in the chosen word:  
    else {
        //letter is added to incorrect guesses
        wrongLettersGuessed.push(" " + userGuess);
        var wrongLettersGuessedText = wrongLettersGuessed.toString();
        wrongLettersGuessedElement.textContent = wrongLettersGuessedText;
    }
    console.log(correctLettersGuessed);
    console.log(wrongLettersGuessed);
  
  //  if letter is in the word, underscore in word will be replaced with letter   

//     //letter will be added to text below
//     // create new element, include userGuess and then append the child?
//     wrongLettersGuessedText.textContent = userGuess;
//   }
  //Guess count goes down by one
  guesses--;
  //Display new number of guesses
  guessesText.textContent = guesses;
};
// Else: nothing happens
// When all underscores have been replaced, image/ sound will be revealed. Wins number +1
//If user does not guess the word in under 12 guesses, game starts over?
// Next round button appears

// When user clicks the button, new underscores appear, text is cleared from letters guessed

// Ideas for starting new rounds: hiding and displays different html elements
