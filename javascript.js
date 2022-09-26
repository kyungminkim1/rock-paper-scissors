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

// console.log(getComputerChoice());