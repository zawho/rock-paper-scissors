//Global variables.
let userScore = 0;
let computerScore = 0;

//PC takes a turn by randomly selecting rock, paper, or scissors. Return selection.
function getComputerChoice() {
    choiceArr = ['rock', 'paper', 'scissors'];
    randChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    return randChoice;
}

//User inputs their choice, user input and PC choice compared, round winner declared.
function playRound() {
    let userSelection = prompt('Rock, paper, or scissors?', '');
    let computerSelection = getComputerChoice();
    if (userSelection.toLowerCase() === computerSelection) {
        return 'Tie!';
    } else if (!(userSelection.toLowerCase() === 'rock') && !(userSelection.toLowerCase() === 'paper') && !(userSelection.toLowerCase() === 'scissors')) {
        return 'Invalid!';
    } else if ((userSelection.toLowerCase() === 'rock') && (computerSelection === 'scissors')) {
        return userScore++;
    } else if ((userSelection.toLowerCase() === 'paper') && (computerSelection === 'rock')) {
        return userScore++;
    } else if ((userSelection.toLowerCase() === 'scissors') && (computerSelection === 'paper')) {
        return userScore++; 
    } else {
        return computerScore++;
    }
}

//Loop single round 5 times for a full game. Declare winner.
function playGame() {
    for (i = 0; i < 5; i++) {
        playRound();
        console.log(i);
    }
}

//Call game function.
playGame();