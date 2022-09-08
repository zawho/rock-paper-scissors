//Global variables.
let userScore = 0;
let computerScore = 0;
let userSelection;
let computerSelection = getComputerChoice();

//Temp UI section.
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
rockButton.addEventListener('click', function() {
    getComputerChoice();
    playRound('rock', computerSelection);
});
paperButton.addEventListener('click', function() {
    playRound('paper', computerSelection);
});
scissorsButton.addEventListener('click', function() {
    playRound('scissors', computerSelection);
});



//PC takes a turn by randomly selecting rock, paper, or scissors. Return selection.
function getComputerChoice() {
    let choiceArr = ['rock', 'paper', 'scissors'];
    let randChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    return randChoice;
}

//User inputs their choice, user input and PC choice compared, round winner declared.
function playRound(userSelection, computerSelection) {
    let roundMessage = `You chose ${userSelection} and computer chose ${computerSelection}`;
    if (userSelection === computerSelection) {
        console.log(`Tie! \n${roundMessage}`);
    } else if (!(userSelection === 'rock') && !(userSelection === 'paper') && !(userSelection === 'scissors')) {
        console.log(`Invalid! \n${roundMessage}`);
    } else if ((userSelection === 'rock') && (computerSelection === 'scissors')) {
        userScore += 1;
        console.log(roundMessage);
    } else if ((userSelection === 'paper') && (computerSelection === 'rock')) {
        userScore += 1;
        console.log(roundMessage);
    } else if ((userSelection === 'scissors') && (computerSelection === 'paper')) {
        userScore += 1;
        console.log(roundMessage); 
    } else {
        computerScore += 1;
        console.log(roundMessage);
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