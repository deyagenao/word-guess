// Create arrays for the letters in each word?
//Variables to keep track of wins and guesses 
var wins = 0;
var guesses = 12;

// Set up variables to display on page
var winsText = document.getElementById("wins-text");
var guessesText = document.getElementById("guesses-text");
var lettersGuessed = document.getElementById("letters-guessed");
var directionsText = document.getElementById("directions-text");
var letter1 = document.getElementById("letter-1");
var letter2 = document.getElementById("letter-2");
var letter3 = document.getElementById("letter-3");
var letter4 = document.getElementById("letter-4");
var letter5 = document.getElementById("letter-5");

// Round 1: Tiger 
// Each round will be a set word. For each round:
// Listen for user’s input. Listen for key pressed. Guess count decreases each time that a key is pressed, unless key has already been pressed 
// Onkeyup:
document.onkeyup = function (event) {
    // Determines which key was pressed 
    var userGuess = event.key;
    // Hide directions 
    directionsText.textContent = "Round 1";
    // Use the .toLowercase method.
    //  if letter is in the word, underscore in word will be replaced with letter
    if (userGuess === "t" || userGuess === "i" || userGuess === "g" || userGuess === "e" || userGuess === "r") {
        //for each letter, replace a specific underscore 
        if (userGuess === "t") {
            letter1.textContent = "T";
        }
        else if (userGuess === "i") {
            letter2.textContent = "I";
        }
        else if (userGuess === "g") {
            letter3.textContent = "G";
        }
        else if (userGuess === "e") {
            letter4.textContent = "E";
        }
        else {
            letter5.textContent = "R";
        }
        // Maybe use something like .charAt() to fill in letters at specific spaces, like  in banana, b will fill in .charAt(0)--> check if this index works the same way as in an array
        //for (i = 0; i < zooArray.length; i++) {
        // check if elemnt starts with c or o
        // if (zooArray[i].charAt(0) === "c" || zooArray[i].charAt(0) === "o") {
        //     alert("starts with c or o");
        //   } else {
        //     alert("no it doesnt, for zooArray at " + i )
        //   }
        // }
    }
    // Else if letter is not in word: 
    else {
        //letter will be added to text below 
        // create new element, include userGuess and then append the child? 
        lettersGuessed.textContent = userGuess;


    }
    //Guess count goes down by one
    guesses--
    //Display new number of guesses
    guessesText.textContent = guesses
}
// Else: nothing happens
// When all underscores have been replaced, image/ sound will be revealed. Wins number +1
//If user does not guess the word in under 12 guesses, game starts over? 
// Next round button appears 

// When user clicks the button, new underscores appear, text is cleared from letters guessed