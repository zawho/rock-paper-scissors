//Global variables.
let userSelection = prompt('Rock, paper, or scissors?', '');
let computerSelection = getComputerChoice();
const winString = 'You win!';
const loseString = 'You lose!';
const tieString = 'Tie!';
const invalidString = 'Invalid! Try again!';

//PC takes a turn by randomly selecting rock, paper, or scissors. Return selection.
function getComputerChoice() {
    choiceArr = ['rock', 'paper', 'scissors'];
    randChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    return randChoice;
}

//User inputs their choice, user input and PC choice compared, round winner declared.
function playRound(userSelection, computerSelection) {
    if ((userSelection.toLowerCase() === 'rock') && (computerSelection === 'scissors')) {
        return winString;
    } else if ((userSelection.toLowerCase() === 'paper') && (computerSelection === 'rock')) {
        return winString;
    } else if ((userSelection.toLowerCase() === 'scissors') && (computerSelection === 'paper')) {
        return winString;
    } else if (userSelection.toLowerCase() === computerSelection) {
        return tieString;
    } else if (!(userSelection.toLowerCase() === 'rock') && !(userSelection.toLowerCase() === 'paper') && !(userSelection.toLowerCase() === 'scissors')) {
        return invalidString;
    } else {
        return loseString;
    }
}

//Console output.
console.log('Computer chose: ' + computerSelection);
console.log('You chose: ' + userSelection);
console.log(playRound(userSelection, computerSelection));