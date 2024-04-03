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
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        console.log("It's a tie.");
    }

    if (playerSelection === "Rock".toUpperCase() && computerSelection === "Scissors") {
        console.log(`You won! Rock beats scissors.`);
    }
    else if (playerSelection === "Scissors".toUpperCase() && computerSelection === "Rock") {
        console.log(`You lose! Rock beats scissors.`);
    }

    if (playerSelection === "Scissors".toUpperCase() && computerSelection === "Paper") {
        console.log(`You won! Scissors beats paper.`);
    }
    else if (playerSelection === "Paper".toUpperCase() && computerSelection === "Scissors") {
        console.log(`You lose! Scissors beats paper.`);
    }

    if (playerSelection === "Paper".toUpperCase() && computerSelection === "Rock") {
        console.log(`You won! Paper beats rock.`);
    }
    else if (playerSelection === "Rock".toUpperCase() && computerSelection === "Paper") {
        console.log(`You lose! Paper beats rock.`);
    }
}
  


  const playerSelection = prompt('Rock, papers, or scissors?', "".toUpperCase());
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
