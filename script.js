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

let playerWinRound = "Player wins this round!"
let computerWinRound = "Computer wins this round!"
let roundDraw = "This round is a draw!"
let playerWinGame = "Congrats! Player wins the game!"
let computerWinGame = "Computer wins the game! Better luck next time!"

rockBtn.addEventListener('click', () => {
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    gameScore(roundResult); 
    console.log("Your score is " + playerScore)
    console.log("The computers score is " + computerScore)
} );

paperBtn.addEventListener('click', () => {
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    gameScore(roundResult); 
    console.log("Your score is " + playerScore)
    console.log("The computers score is " + computerScore)
});

scissorsBtn.addEventListener('click', () => {
    let playerSelection = 'scissors';
    let computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    gameScore(roundResult); 
    console.log("Your score is " + playerScore)
    console.log("The computers score is " + computerScore)
});

if (playerScore < computerScore) {
    alert(computerWinGame)
} else if (playerScore > computerScore) {
    alert(playerWinGame )
}
function gameScore(roundResult) {
    if (roundResult === playerWinRound) {
        playerScore++
    } else if (roundResult === computerWinRound) {
        computerScore++
    } else (draws++)
}
