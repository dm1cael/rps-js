const ROUNDS = 5;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice;

    while(choice != 'rock' && choice != 'paper' && choice != 'scissors') {
        choice = prompt('Choose: [Rock, Paper, Scissors]').toLowerCase();
    }

    return choice;
}

function playRound() {    
    const humanChoice = getHumanChoice();
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

function playGame() {
    for(let i = 0; i < ROUNDS; i++) {
        playRound();
    }
}

playGame();