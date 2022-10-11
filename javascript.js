// create a function getComputerChoice()
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
// requires 1 parameter: (e)vent from addEventListener
// playRound is called by btn and so can be referred to with 'this'
function playRound(e) {

    // check button text for player selection
    playerSelection = this.textContent;
    // get computer selection
    let computerSelection = getComputerChoice();

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
    else {
        return `You Drew! You both picked ${playerSelection}`;
    }
}

// create function game()
function game() {
    // track the player's choice and score
    let playerChoice = null;
    let playerScore = 0;

    // declare the player's win/loss
    if (playerScore >= 3) {
        console.log('You\'re a winner!!!');
    } else {
        console.log('You lost! Better luck next time');
    }
}

game();

// get buttons
const btns = document.querySelectorAll('button');

// add event listeners to each button
// event listener will call playRound

btns.forEach(btn => btn.addEventListener('click', playRound));
