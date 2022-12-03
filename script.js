let playerScore = 0
let computerScore = 0
let draws = 0

let playerInput = prompt("Would you like to use Rock, Paper, or Scissors?")

function getComputerChoice(){
    const computerChoices = ['rock', 'paper', 'scissors'];
   const randomChoice = Math.floor(Math.random()* computerChoices.length);
   return computerChoices[randomChoice];
   }

let playerSelection = playerInput.toLowerCase()
let computerSelection = getComputerChoice()

function game() {
    let roundNumber = playRound()
    for (i = 1; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection))
    }
    
}   

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
}

let playerWinRound = "Player wins this round!"
let computerWinRound = "Computer wins this round!"
let roundDraw = "This round is a draw!"
let playerWinGame = "Congrats! Player wins the game!"
let computerWinGame = "Computer wins the game! Better luck next time!"


