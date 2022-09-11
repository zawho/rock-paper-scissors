//Global score variables.
let userScore = 0;
let computerScore = 0;

//UI.
const roundButtons = document.querySelectorAll('.round-buttons button');
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const headerText = document.querySelector('h2');
const roundScoreDiv = document.querySelector('.round-score');
const resetButton = document.querySelector('.reset-button');
roundScoreDiv.innerText = 'ur score lol: 0 ... my score ^_^: 0';
resetButton.addEventListener('click', resetGame);

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
    roundScoreDiv.innerText = `ur score lol: ${userScore} ... my score ^_^: ${computerScore}`;
    finishGame();
}

//Play round by comparing user and computer selections.
function playRound(userSelection) {
    let computerSelection = getComputerChoice();
    let userWinMessage = `u choose ${userSelection} and i choose ${computerSelection}... interesting >_>`;
    if (userSelection === computerSelection) {
        headerText.innerText = `we both choose ${userSelection}... ehhh... tie... >_<`;
    } else if ((userSelection === 'rock') && (computerSelection === 'scissors')) {
        userScore += 1;
        headerText.innerText = userWinMessage;
    } else if ((userSelection === 'paper') && (computerSelection === 'rock')) {
        userScore += 1;
        headerText.innerText = userWinMessage;
    } else if ((userSelection === 'scissors') && (computerSelection === 'paper')) {
        userScore += 1;
        headerText.innerText = userWinMessage; 
    } else {
        computerScore += 1;
        headerText.innerText = `hehe i choose ${computerSelection} and u choose ${userSelection}... eheheh ^_^`;
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
        headerText.innerText = 'u win...? ...disturbing...0_0';
    } else if (userScore < computerScore) {
        headerText.innerText = 'LOL i win! of course... im a computer ^_^';
    } else {
        headerText.innerText = 'a tie? really? *eye roll*';
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

//Reset game.
function resetGame() {
    if ((userScore > 0) || (computerScore > 0)) {
        userScore = 0;
        computerScore = 0;
        headerText.innerText = 'oh u wanna start over...? lol ok -_-';
        roundScoreDiv.innerText = 'ur score lol: 0 ... my score ^_^: 0';
        playGame();
    }
}

//Call game function.
playGame();