// Game variables
let humanScore = 0;
let computerScore = 0;

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
        return console.log('It\'s a tie!');
    }

    if(humanChoice == 'paper' && computerChoice == 'rock' || 
        humanChoice == 'rock' && computerChoice == 'scissors' ||
        humanChoice == 'scissors' && computerChoice == 'paper'
    ) {
        humanScore++;
        return console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    }

    computerScore++;
    return console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
}