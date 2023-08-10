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

function output(e){
    if (e.classList.contains('Rock')) {
        results.textContent = getResults(("Rock"), getComputerChoice());
    }
    else if (e.classList.contains('Scissors')) results.textContent = getResults(("Scissors"), getComputerChoice());
    else results.textContent = getResults(("Paper"), getComputerChoice());
    score.textContent = `${playerWins} Player ${computerWins} Computer`;
    if(checkScore()) {
        endGame();
        restartButton();
    }
}

function checkScore() {
    
    if (playerWins == 5) {
        let childWinner = document.createElement("h1")
        childWinner.classList.add("finalResults")
        childWinner.textContent = "Winner"
        finalResultsDiv.appendChild(childWinner)
        return true;
    }
    else if (computerWins == 5) {
        let childLoser = document.createElement("h1")
        childLoser.classList.add("finalResults")
        childLoser.textContent = "Loser"
        finalResultsDiv.appendChild(childLoser)
        return true
    }
    return false
}
function endGame() {
    const remove = document.querySelectorAll(".remove");
    let content = document.querySelector('.content')
    content.classList.add('restartScreen')
    let restart = document.querySelector(".restart")
    playerWins = 0, computerWins = 0
    remove.forEach((element) => {
        element.remove();
    });
    restart.innerHTML = '<button class="startGame"> Restart </button>'
}

let score = document.querySelector(".score");
let finalResultsDiv = document.querySelector(".finalResultsDiv");
let button = document.querySelectorAll('.choiceButton');
let results = document.querySelector(".results");
let title = document.querySelector('.title')
//Returns Rock, Paper, and Scissors when clicking buttons
addEventListeners()

function restartButton() {
    const startGame = document.querySelector(".startGame")
    startGame.addEventListener('click', ()=> {
        // remove results
        addMainContent()
        addRestartScreen()
    })
}

function addMainContent() {
    const childResults = document.createElement("div")
    const add = document.querySelector(".add")
    const childScore = document.createElement("div");

    childScore.classList.add("score", "remove");
    childResults.classList.add("results", "remove");
    add.appendChild(childResults);
    add.appendChild(childScore)
    console.log(childResults)
    addtitle()
    addButtonElements()
    addEventListeners()
    removeEndButtons()
}
//adds score, results, and button selectors to the new elements
function addEventListeners(){
    button = document.querySelectorAll('.choiceButton');
    results = document.querySelector(".results");
    score = document.querySelector(".score");
    title = document.querySelector('title')
    score.textContent = `${playerWins} Player ${computerWins} Computer`;
    console.log(results)
    button.forEach((element) => {
        element.addEventListener('click', () => output(element))
    })
}

function addButtonElements(){
    const playerChoices = document.querySelector(".playerChoices")
    const childRock = document.createElement('button')
    childRock.classList.add("Rock", "choiceButton", "remove")
    childRock.textContent = "Rock"
    
    const childScissors = document.createElement('button')
    childScissors.classList.add("Scissors", "choiceButton", "remove")
    childScissors.textContent = "Scissors"
    
    const childPaper = document.createElement('button')
    childPaper.classList.add("Scissors", "choiceButton", "remove")
    childPaper.textContent = "Paper"
    playerChoices.appendChild(childRock)
    playerChoices.appendChild(childScissors)
    playerChoices.appendChild(childPaper)
}
function removeEndButtons() {
    finalResults = document.querySelector('.finalResults')
    restart = document.querySelector('.startGame')
    finalResults.remove();
    restart.remove()
}
function addtitle() {
    const content = document.querySelector('.content')
    //remove the attribute for restart screen
    content.classList.remove('restartScreen')
    const childTitle = document.createElement('div')
    childTitle.classList.add('title', 'remove')
    childTitle.textContent = 'Rock Paper Scissors'
    // const playerChoices = document.querySelector('.plauerChoices')
    content.insertBefore(childTitle, content.children[0])
}
