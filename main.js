//Global variables.
let userSelection = prompt('Rock, paper, or scissors?', '');
let computerSelection = getComputerChoice();

//PC takes a turn by randomly selecting rock, paper, or scissors. Return selection.
function getComputerChoice() {
    choiceArr = ['rock', 'paper', 'scissors'];
    randChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    return randChoice;
}

//User inputs their choice, user input and pc choice compared, round winner declared.
function playRound(userSelection, computerSelection) {
    if ((userSelection.toLowerCase() === 'rock') && (computerSelection === 'scissors')) {
        return 'You win!';
    } else if ((userSelection.toLowerCase() === 'paper') && (computerSelection === 'rock')) {
        return 'You win!';
    } else if ((userSelection.toLowerCase() === 'scissors') && (computerSelection === 'paper')) {
        return 'You win!';
    } else if (userSelection.toLowerCase() === computerSelection) {
        return 'Tie!';
    } else if (!(userSelection.toLowerCase() === 'rock') && !(userSelection.toLowerCase() === 'paper') && !(userSelection.toLowerCase() === 'scissors')) {
        return 'Invalid! Try again!';
    } else {
        return 'You lose!';
    }
}

//Console output.
console.log('Computer chose: ' + computerSelection);
console.log('You chose: ' + userSelection);
console.log(playRound(userSelection, computerSelection));