//Global variables.
let userScore = 0;
let computerScore = 0;

//Temp UI section.
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

//PC takes a turn by randomly selecting rock, paper, or scissors. Return selection.
function getComputerChoice() {
    let choiceArr = ['rock', 'paper', 'scissors'];
    let randChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    return randChoice;
}

//User inputs their choice, user input and PC choice compared, round winner declared.
function playRound() {
    let userSelection = prompt('Rock, paper, or scissors?', '');
    let computerSelection = getComputerChoice();
    let roundMessage = `You chose ${userSelection.toUpperCase()} and computer chose ${computerSelection.toUpperCase()}`;
    if (userSelection.toLowerCase() === computerSelection) {
        return `Tie! \n${roundMessage}`;
    } else if (!(userSelection.toLowerCase() === 'rock') && !(userSelection.toLowerCase() === 'paper') && !(userSelection.toLowerCase() === 'scissors')) {
        return `Invalid! \n${roundMessage}`;
    } else if ((userSelection.toLowerCase() === 'rock') && (computerSelection === 'scissors')) {
        userScore += 1;
        return roundMessage;
    } else if ((userSelection.toLowerCase() === 'paper') && (computerSelection === 'rock')) {
        userScore += 1;
        return roundMessage;
    } else if ((userSelection.toLowerCase() === 'scissors') && (computerSelection === 'paper')) {
        userScore += 1;
        return roundMessage; 
    } else {
        computerScore += 1;
        return roundMessage;
    }
}

//Loop single round 5 times for a full game.
function playGame() {
//    for (i = 0; i < 5; i++) {
        console.log(playRound());
        console.log(`YOU: ${userScore} COMPUTER: ${computerScore}`);
//    }
    getWinner();
}

//Declare winner.
function getWinner() {
    if (userScore > computerScore) {
        console.log('You win!');
    } else if (userScore < computerScore) {
        console.log('You lose! Computer wins!');
    } else {
        console.log('A tie! Please try again!');
    }
}

//Call game function.
playGame();