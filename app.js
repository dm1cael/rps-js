// Game variables
let humanScore = 0;
let computerScore = 0;

// Display
const resultDisplay = document.querySelector('.result-display');

// Buttons
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => playRound(rockBtn.id));
paperBtn.addEventListener('click', () => playRound(paperBtn.id));
scissorsBtn.addEventListener('click', () => playRound(scissorsBtn.id))

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {    
    const computerChoice = getComputerChoice();

    if(humanChoice == computerChoice) {
        return resultDisplay.textContent = 'It\'s a tie. Try again!';
    }

    if(humanChoice == 'paper' && computerChoice == 'rock' || 
        humanChoice == 'rock' && computerChoice == 'scissors' ||
        humanChoice == 'scissors' && computerChoice == 'paper'
    ) {
        humanScore++;
        return resultDisplay.textContent = `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`;
    }

    computerScore++;
    return resultDisplay.textContent = `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`;
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}