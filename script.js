
prompt("Would you like to use Rock, Paper, or Scissors?")

function getComputerChoice(){
    const computerChoices = ['rock', 'paper', 'scissors'];
   const randomChoice = Math.floor(Math.random()* computerChoices.length);
   return computerChoices[randomChoice];
   }

let playerSelection = 'Scissors'.toLowerCase()
let computerSelection = getComputerChoice()

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You lose! Paper beats Rock"
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You lose! Scissors beats Paper"
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You lose! Rock beats Scissors"
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You win! Paper beats Rock"
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You win! Rock beats Scissors"
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You win! Scissors beats Paper"
    } else if (playerSelection == computerSelection) {
        return "It\'s a tie! Try again"
    }
}



