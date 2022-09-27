// create a function getComputerChoice
function getComputerChoice() {

    // choose a random number from 1-3
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    
    // find the string that matches this number e.g. 1 = 'rock'
    switch (randomChoice){
        case 1:
            // return the string
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
        default:
            return `You shouldn't have received this`;
    }
}

// create a function playRound(),
// requires 2 parameters: playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
    // make playerSelection case-insensitive
    playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();

    // compare player's choice with computer
    // if player chose rock and computer chose scissors
    // or player chose paper and computer chose rock
    // or player chose scissors and computer chose paper
    if (
        playerSelection === 'Rock' && computerSelection === 'Scissors'
        || playerSelection === 'Paper' && computerSelection === 'Rock'
        || playerSelection === 'Scissors' && computerSelection === 'Paper'
        ) {
            // then return player won message
            return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    // else if player chose rock and computer chose paper
    // or player chose paper and computer chose scissors
    // or player chose scissors and computer chose rock
    // then return player lost message
    else if (
        playerSelection === 'Rock' && computerSelection === 'Paper'
        || playerSelection === 'Paper' && computerSelection === 'Scissors'
        || playerSelection === 'Scissors' && computerSelection === 'Rock'
        ) {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    
    
    // else return draw message
}

/*
const playerChoice = 'roCk';
const result = playRound(getComputerChoice(), getComputerChoice());
console.log(result);
*/