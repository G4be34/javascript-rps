
function getComputerChoice(){
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
   const randomChoice = Math.floor(Math.random()* computerChoices.length);
   return computerChoices[randomChoice];
   }