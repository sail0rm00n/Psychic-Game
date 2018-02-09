var wins = 0;
var losses = 0;
var guessesRemain = 9;
var guessesMade = [];
var userGuess = null;

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
	console.log("Wins: " + wins + " Losses: " + losses + " GuessesMade: " + guessesRemain + " Guesses made: " + guessesMade + " Computer picked: " + letterToBeGuessed);

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	if (guessesMade.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
		guessesMade[guessesMade.length]=userGuess;
		guessesRemain--;
	}

	if (guessesRemain == 0) {
		losses++;
		console.log("You lose!");
		guessesRemain = 9;
		guessesMade = [];
		letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesRemain: " + guessesRemain + " Guesses made: " + guessesMade + " Computer picked: " + letterToBeGuessed);
	}

	if (letterToBeGuessed == userGuess) {
		wins++;
		console.log("You win!");
		guessesRemain = 9;
		guessesMade = [];
		letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesRemain: " + guessesRemain + " Guesses made: " + guessesMade + " Computer picked: " + letterToBeGuessed);
	}

	
	var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h3>Can you guess what letter I'm thinking of?</h3></p>" + "<p><h3>Wins: " + wins + "</h3></p>" + "<p><h3>Losses: " + losses + "</h3></p>" + "<p><h3>Guesses Remaining: " + guessesRemain + "</h3></p>" + "<p><h3>Guesses made: " + guessesMade + "</h3></p>";

	document.querySelector("#game").innerHTML = html;

}