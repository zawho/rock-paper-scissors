//Global variables.
let userScore = 0;
let computerScore = 0;
let userSelection;

//UI.
const roundButtons = document.querySelectorAll('.round-buttons button');
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const roundResultsDiv = document.querySelector('.round-results');
const roundScoreDiv = document.querySelector('.round-score');
const gameResultsDiv = document.querySelector('.game-results');
roundResultsDiv.innerText = 'Please choose...';
roundScoreDiv.innerText = 'YOU: 0 COMPUTER: 0';

//Computer takes a turn by randomly selecting rock, paper, or scissors. Return selection.
function getComputerChoice() {
    let choiceArr = ['rock', 'paper', 'scissors'];
    let randChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    return randChoice;
}

//Determine value of user's turn and calculate score.
function getUserChoice(eachButton) {
    if (eachButton.target.className === 'rock') {
        playRound('rock');
    } else if (eachButton.target.className === 'paper') {
        playRound('paper');
    } else if (eachButton.target.className ==='scissors') {
        playRound('scissors');
    }
    roundScoreDiv.innerText = `YOU: ${userScore} COMPUTER: ${computerScore}`;
    finishGame();
}

//Play round by comparing user and computer selections.
function playRound(userSelection) {
    let computerSelection = getComputerChoice();
    let roundMessage = `You chose ${userSelection} and computer chose ${computerSelection}!`;
    if (userSelection === computerSelection) {
        roundResultsDiv.innerText = `Tie! ${roundMessage}`;
    } else if ((userSelection === 'rock') && (computerSelection === 'scissors')) {
        userScore += 1;
        roundResultsDiv.innerText = roundMessage;
    } else if ((userSelection === 'paper') && (computerSelection === 'rock')) {
        userScore += 1;
        roundResultsDiv.innerText = roundMessage;
    } else if ((userSelection === 'scissors') && (computerSelection === 'paper')) {
        userScore += 1;
        roundResultsDiv.innerText = roundMessage; 
    } else {
        computerScore += 1;
        roundResultsDiv.innerText = roundMessage;
    }
}

//Play game when buttons are pressed until max score is reached.
function playGame() {
    roundButtons.forEach((button) => {
        button.addEventListener('click', getUserChoice);
    });
}

//Declare winner.
function getWinner() {
    if (userScore > computerScore) {
        gameResultsDiv.innerText = 'You win!';
    } else if (userScore < computerScore) {
        gameResultsDiv.innerText = 'You lose! Computer wins!';
    } else {
        gameResultsDiv.innerText = 'A tie! Please try again!';
    }
}

//Finish the game when one or both players reach 5 points. Disable RPS buttons.
function finishGame() {
    if (userScore === 5 || computerScore === 5) {
        getWinner();
        roundButtons.forEach((button) => {
            button.removeEventListener('click', getUserChoice);
        });
    }
}

//Call game function.
playGame();