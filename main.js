let rock = 1;
let paper = 2;
let scissors = 3;
let randomNumber = Math.floor(Math.random() * 3) + 1; 


function getComputerChoice() {
    switch (randomNumber) {
        case rock:
            return 'Rock';
            break;
        case paper:
            return 'Paper';
            break;
        case scissors:
            return 'Scissors';
            break;
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie");
    }

    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }

    if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }

    if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
}
  


  const playerSelection = "Paper";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));