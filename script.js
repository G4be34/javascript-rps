
function getComputerChoice(){
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
   const randomChoice = Math.floor(Math.random()* computerChoices.length);
   return computerChoices[randomChoice];
   }

const playerSelection = 'Paper'.toLowerCase;
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return "You lose! Paper beats Rock"
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return "You lose! Scissors beats Paper"
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return "You lose! Rocks beats Scissors"
    } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        return "You win! Paper beats Rock"
    } else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        return "You win! Rock beats Scissors"
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        return "You win! Scissors beats Paper"
    }
}


