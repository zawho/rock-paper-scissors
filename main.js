//Global variables.
let userScore = 0;
let computerScore = 0;
let userSelection;

//Temp UI section.
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const resultsDiv = document.querySelector('.results');
rockButton.addEventListener('click', function() {
    playRound('rock');
});
paperButton.addEventListener('click', function() {
    playRound('paper');
});
scissorsButton.addEventListener('click', function() {
    playRound('scissors');
});

//PC takes a turn by randomly selecting rock, paper, or scissors. Return selection.
function getComputerChoice() {
    let choiceArr = ['rock', 'paper', 'scissors'];
    let randChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    return randChoice;
}

//User inputs their choice, user input and PC choice compared, round winner declared.
function playRound(userSelection) {
    let computerSelection = getComputerChoice();
    let roundMessage = `You chose ${userSelection} and computer chose ${computerSelection}! \nYOU: ${userScore} COMPUTER: ${computerScore}`;
    if (userSelection === computerSelection) {
        resultsDiv.innerText = `Tie! ${roundMessage}`;
    } else if ((userSelection === 'rock') && (computerSelection === 'scissors')) {
        userScore += 1;
        resultsDiv.innerText = roundMessage;
    } else if ((userSelection === 'paper') && (computerSelection === 'rock')) {
        userScore += 1;
        resultsDiv.innerText = roundMessage;
    } else if ((userSelection === 'scissors') && (computerSelection === 'paper')) {
        userScore += 1;
        resultsDiv.innerText = roundMessage; 
    } else {
        computerScore += 1;
        resultsDiv.innerText = roundMessage;
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
//playRound();