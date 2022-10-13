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
            // add win to player score and display
            playerScore++;
            playerScoreDisplay.textContent = `Player's score: ${playerScore}`;
            // then return player won message
            resultDisplay.textContent = `You Win! ${playerSelection} beats ${computerSelection}\r\n`;
            checkScore();
            return;
    }
    // else if player chose rock and computer chose paper
    // or player chose paper and computer chose scissors
    // or player chose scissors and computer chose rock
    else if (
        playerSelection === 'Rock' && computerSelection === 'Paper'
        || playerSelection === 'Paper' && computerSelection === 'Scissors'
        || playerSelection === 'Scissors' && computerSelection === 'Rock'
        ) {
            // add win to player score and display
            computerScore++;
            computerScoreDisplay.textContent = `Computer's score: ${computerScore}`;
            // then return player lost message
            resultDisplay.textContent = `You Lose! ${computerSelection} beats ${playerSelection}\r\n`;
            checkScore();
            return;
    }

    // else return draw message
    else {
        resultDisplay.textContent = `You Drew! You both picked ${playerSelection}\n`;
        return;
    }
}

// create function checkScore()
function checkScore() {
    // check if someone has reached score of 5
    if (playerScore >= 5) {
        resultDisplay.textContent += 'You\'re a winner!!!';
    } else if (computerScore >= 5) {
        resultDisplay.textContent += 'You lost! Better luck next time';
    }
}

// track the player and computer's score
let playerScore = 0;
let computerScore = 0;

// get buttons
const btns = document.querySelectorAll('button');

// get div displaying scores and result
const playerScoreDisplay = document.querySelector('div.player-score');
const computerScoreDisplay = document.querySelector('div.computer-score');
const resultDisplay = document.querySelector('div.result');

// add event listeners to each button
// event listener will call playRound

btns.forEach(btn => btn.addEventListener('click', playRound));