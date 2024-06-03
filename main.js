let rock = 1;
let paper = 2;
let scissors = 3;


let min = 1;
let max = 3;
let randomNumber;
function randomInt() {
    randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
}


function getComputerChoice() {
    switch (randomInt()) {
        case rock:
            return 'Rock';
        case paper:
            return 'Paper';
        case scissors:
            return 'Scissors';
    }
}




//Score tracker
let playerScore = 0;
let computerScore = 0;
document.querySelector("#playerScore").textContent = '0';
document.querySelector("#computerScore").textContent = '0';  


// DOM manipulation setup
const container = document.querySelector("#container");

const btnRock = document.createElement("button");
btnRock.textContent = "Rock";
btnRock.setAttribute("id", "roundButton");

const btnPaper = document.createElement("button");
btnPaper.textContent = "Paper";
btnPaper.setAttribute("id", "roundButton");

const btnScissors = document.createElement("button");
btnScissors.textContent = "Scissors";
btnScissors.setAttribute("id", "roundButton");

container.appendChild(btnRock);
container.appendChild(btnPaper);
container.appendChild(btnScissors);





//DOM player selecting choice
let playerSelection;
let computerSelection = getComputerChoice();
function choice() {
    const buttons = document.querySelectorAll("#roundButton");

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            playerSelection = event.target.textContent;
            computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
            gameResults();
        });
    })
}
choice();


//Rounds
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        document.querySelector("#roundResults").textContent = `It's a tie.`;
    }

    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        ++playerScore;
        document.querySelector("#playerScore").textContent = playerScore.toString();
        document.querySelector("#roundResults").textContent = `You won! Rock beats scissors.`;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        ++computerScore;
        document.querySelector("#computerScore").textContent = computerScore.toString();
        document.querySelector("#roundResults").textContent = `You lose! Rock beats scissors.`;
    }

    if (playerSelection === "Scissors" && computerSelection === "Paper") {
        ++playerScore;
        document.querySelector("#playerScore").textContent = playerScore.toString();
        document.querySelector("#roundResults").textContent = `You won! Scissors beats paper.`;
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        ++computerScore;
        document.querySelector("#computerScore").textContent = computerScore.toString();
        document.querySelector("#roundResults").textContent = `You lose! Scissors beats paper.`;
    }

    if (playerSelection === "Paper" && computerSelection === "Rock") {
        ++playerScore;
        document.querySelector("#playerScore").textContent = playerScore.toString();
        document.querySelector("#roundResults").textContent = `You won! Paper beats rock.`;
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        ++computerScore;
        document.querySelector("#computerScore").textContent = computerScore.toString();
        document.querySelector("#roundResults").textContent = `You lose! Paper beats rock.`;
    }
}



function gameResults() {
    if (playerScore === 5) {
        document.querySelector("#gameResult").textContent = `You won this Best of 5.`;
        btnRock.setAttribute("disabled", "");
        btnPaper.setAttribute("disabled", "");
        btnScissors.setAttribute("disabled", "");
    }
    else if (computerScore === 5) {
        document.querySelector("#gameResult").textContent = `You lost this Best of 5.`;
        btnRock.setAttribute("disabled", "");
        btnPaper.setAttribute("disabled", "");
        btnScissors.setAttribute("disabled", "");
    }
}


