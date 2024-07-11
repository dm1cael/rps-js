// Game variables
let humanScore = 0;
let computerScore = 0;
let gameHasEnded = false;

// Display
const resultDisplay = document.querySelector('.result-display');
const humanScoreUI = document.querySelector('.human-score');
const computerScoreUI = document.querySelector('.computer-score');

// Buttons
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const playAgainBtn = document.querySelector('.play-again');

rockBtn.addEventListener('click', () => playRound(rockBtn.id));
paperBtn.addEventListener('click', () => playRound(paperBtn.id));
scissorsBtn.addEventListener('click', () => playRound(scissorsBtn.id))
playAgainBtn.addEventListener('click', () => resetGame());

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
    if(gameHasEnded) return;

    const computerChoice = getComputerChoice();

    if(humanChoice == computerChoice) {
        return resultDisplay.textContent = 'It\'s a tie. Try again!';
    }

    if(humanChoice == 'paper' && computerChoice == 'rock' || 
        humanChoice == 'rock' && computerChoice == 'scissors' ||
        humanChoice == 'scissors' && computerChoice == 'paper'
    ) {
        resultDisplay.textContent = `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`;

        humanScore++;
        updateScore(humanScore, 'human');
    } else {
        resultDisplay.textContent = `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`;

        computerScore++;
        updateScore(computerScore, 'computer');
    }
}

function updateScore(score, target) {
    if(target == 'computer') 
    {
        computerScoreUI.textContent = `Computer: ${score}`;
    } else 
    {
        humanScoreUI.textContent = `Human: ${score}`;
    }

    if(score >= 5) return endGame(target);
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    humanScoreUI.textContent = humanScore;
    computerScoreUI.textContent = computerScore;

    resultDisplay.textContent = 'Okay, let\'s play again!';
    
    gameHasEnded = false;
}

function endGame(winner) {
    resultDisplay.textContent = `${capitalize(winner)} wins with 5 points!`
    gameHasEnded = true;
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}