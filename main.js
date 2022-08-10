//PC takes a turn by randomly selecting rock, paper, or scissors. Return selection.
function getComputerChoice() {
    choiceArr = ['rock', 'paper', 'scissors'];
    randChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    return randChoice;
}

console.log(getComputerChoice());