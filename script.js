let playerScore = 0
let computerScore = 0
let draws = 0

let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');

function getComputerChoice(){
    const computerChoices = ['rock', 'paper', 'scissors'];
   const randomChoice = Math.floor(Math.random()* computerChoices.length);
   return computerChoices[randomChoice];
   };

function playRound(playerSelection, computerSelection) {
   if (playerSelection == 'paper' && computerSelection == 'rock') {
        return playerWinRound
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return playerWinRound
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return playerWinRound
    } else if (playerSelection == computerSelection) {
        return roundDraw
    } else {
        return computerWinRound
    }
};

let playerWinRound = "Player wins this round!";
let computerWinRound = "Computer wins this round!";
let roundDraw = "This round is a draw!";
let playerWinGame = "Congrats! Player wins the game!";
let computerWinGame = "Computer wins the game! Better luck next time!";
let result = document.getElementById('results');
let ps = document.getElementById('playerScore');
let cs = document.getElementById('computerScore');

rockBtn.addEventListener('click', () => {
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    result.textContent = roundResult;
    gameScore(roundResult); 
    ps.textContent = "Your score is " + playerScore;
    cs.textContent = "The computers score is " + computerScore;
    if (playerScore === 5) {
        result.textContent = playerWinGame;
    } else if (computerScore === 5) {
        result.textContent = computerWinGame;
    };
} );

paperBtn.addEventListener('click', () => {
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    result.textContent = roundResult;
    gameScore(roundResult); 
    ps.textContent = "Your score is " + playerScore;
    cs.textContent = "The computers score is " + computerScore;
    if (playerScore === 5) {
        result.textContent = playerWinGame;
    } else if (computerScore === 5) {
        result.textContent = computerWinGame;
    };
});

scissorsBtn.addEventListener('click', () => {
    let playerSelection = 'scissors';
    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    result.textContent = roundResult;
    gameScore(roundResult); 
    ps.textContent = "Your score is " + playerScore;
    cs.textContent = "The computers score is " + computerScore;
    if (playerScore === 5) {
        result.textContent = playerWinGame;
    } else if (computerScore === 5) {
        result.textContent = computerWinGame;
    };
});

function gameScore(roundResult) {
    if (roundResult === playerWinRound) {
        playerScore++
    } else if (roundResult === computerWinRound) {
        computerScore++
    } else (draws++)
}





