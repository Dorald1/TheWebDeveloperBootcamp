let maxNumber = parseInt(prompt("Welome! Enter your max number:"));
while (!maxNumber) {
    maxNumber = parseInt(prompt("Enter a valid number:"))
}
let generatedNumber = Math.ceil(Math.random() * maxNumber);
let guessNumber = parseInt(prompt("Enter your first number:"));

let noGuesses = 1;

while (parseInt(guessNumber) !== generatedNumber) {

    if (guessNumber === 'q') {
        alert("Quitting the game!");
        break
    };
    noGuesses++;
    if (guessNumber < generatedNumber) {
        guessNumber = prompt("Too low. Guess Again:");
    }
    if (guessNumber > generatedNumber) {
        guessNumber = prompt("Too high. Guess Again:");
    }
    if (guessNumber == generatedNumber) {
        alert(`You got it! It took you ${noGuesses} guesses`);
        break;
    }
}