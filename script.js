let playerWins = 0
let computerWins = 0

console.log("Hello World")
function getComputerChoice() {
    let choice = Math.random();
    if (choice > (2 / 3)) return "Rock";
    else if (choice > (1 / 3)) return "Scissors"
    else return "Paper"
}

function getResults(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "Rock") return "You Tie! Rock ties Rock" 
        else if (computerSelection == "Paper") {
            computerWins++
            return "You Lose! Paper beats Rock" 
        }
        else {
            playerWins++
            return "You win! Rock beats Scissors"
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "Paper") return "You Tie! Paper ties Paper"
        else if (computerSelection == "Scissors") {
            computerWins++
            return "You Lose! Scissors beats Paper"
        }
        else {
            playerWins++
            return "You Win! Paper beats Rock"
        }
    }
    else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "Scissors") return "You Tie! Scissors ties Scissors"
        else if (computerSelection == "Rock") {
            computerWins++
            return "You Lose! Rock beats Scissors"}
        else {
            playerWins++
            return "You Win! Scissors beats Paper"
        }
    }
    else return "Error"
}

function game() {
    for (i = 0; i < 5; i++) {
        console.log(getResults(prompt("Input"), getComputerChoice()))
    }
}
game();
