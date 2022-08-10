//Global variables.
let userSelection = prompt('Rock, paper, or scissors?', '');
let computerSelection = getComputerChoice();
let winVar;
let loseVar;
let tieVar;
let invalidVar;

//PC takes a turn by randomly selecting rock, paper, or scissors. Return selection.
function getComputerChoice() {
    choiceArr = ['rock', 'paper', 'scissors'];
    randChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    return randChoice;
}

//User inputs their choice, user input and PC choice compared, round winner declared.
function playRound(userSelection, computerSelection) {
    if ((userSelection.toLowerCase() === 'rock') && (computerSelection === 'scissors')) {
        return winVar;
    } else if ((userSelection.toLowerCase() === 'paper') && (computerSelection === 'rock')) {
        return winVar;
    } else if ((userSelection.toLowerCase() === 'scissors') && (computerSelection === 'paper')) {
        return winVar;
    } else if (userSelection.toLowerCase() === computerSelection) {
        return tieVar;
    } else if (!(userSelection.toLowerCase() === 'rock') && !(userSelection.toLowerCase() === 'paper') && !(userSelection.toLowerCase() === 'scissors')) {
        return invalidVar;
    } else {
        return loseVar;
    }
}

//Loop single round 5 times for a full game. Declare winner.
function playGame() {
    playRound(userSelection, computerSelection);
        }

//Console output.
console.log('Computer chose: ' + computerSelection);
console.log('You chose: ' + userSelection);
console.log(playGame());