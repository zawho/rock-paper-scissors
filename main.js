//Global variables.
let userScore = 0;
let computerScore = 0;
let userSelection;

//UI.
const buttonsDiv = document.querySelector('.round-buttons');
const roundButtons = buttonsDiv.querySelectorAll('button');
const roundResultsDiv = document.querySelector('.round-results');
const roundScoreDiv = document.querySelector('.round-score');
const gameResultsDiv = document.querySelector('.game-results');

//PC takes a turn by randomly selecting rock, paper, or scissors. Return selection.
function getComputerChoice() {
    let choiceArr = ['rock', 'paper', 'scissors'];
    let randChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    return randChoice;
}

//User inputs their choice, user input and PC choice compared, round winner declared.
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

//Finish the game when one or both players reach 5 points.
function finishGame() {
    if (userScore === 5 || computerScore === 5) {
        getWinner();
        return;
    }
}

//Loop single round 5 times for a full game.
function playGame() {
    roundButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            playRound(button.className);
            roundScoreDiv.innerText = `YOU: ${userScore} COMPUTER: ${computerScore}`;
            finishGame();
        })
    })
}

//Call game function.
playGame();