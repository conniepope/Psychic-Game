/*  VARIABLES  */
var wins = 0;
var losses = 0;
var numGuessRemain = 10;
var lettersGuessed = [];
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var selectedLetter = [];


window.onload = function() {
    // pick a random letter
	var letter = letterChoices[Math.floor(Math.random() * letterChoices.length)];
	selectedLetter.push(letter);
	console.log(selectedLetter[0]);
}

// when a key is pressed
document.onkeypress = function (event) {
    var keyPress = event.key;
    lettersGuessed.push(keyPress);
    console.log(lettersGuessed)
    // if keyPress = selected random letter
    if (keyPress === selectedLetter[0]) {
    // win++
        wins++;
        numGuessRemain = 10;
        lettersGuessed.length = 0;
        selectedLetter.length = 0;
        var letter = letterChoices[Math.floor(Math.random() * letterChoices.length)];
	    selectedLetter.push(letter);
	    console.log(selectedLetter[0]);

    }
    else if ((keyPress !== selectedLetter[0]) && (numGuessRemain > 0)) {
        numGuessRemain--;
    }
    else {

// if numGuessRemain = 0

    // losses++
        losses++;
        numGuessRemain = 10;
        lettersGuessed.length = 0;
        selectedLetter.length = 0;
        var letter = letterChoices[Math.floor(Math.random() * letterChoices.length)];
	    selectedLetter.push(letter);
        console.log(selectedLetter[0]);
    }

document.querySelector("#winsText").innerHTML = "Wins: " + wins;
document.querySelector("#lossesText").innerHTML = "Losses: " + losses;
document.querySelector("#numGuessRemainText").innerHTML = "Number of Guesses Remaining: " + numGuessRemain;
document.querySelector("#lettersGuessedText").innerHTML = "Letters Guessed:  " + lettersGuessed.join(", ");
}