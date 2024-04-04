let rock = 1;
let paper = 2;
let scissors = 3;
let randomNumber = Math.floor(Math.random() * 3) + 1; 
let playerScore = 0;
let computerScore = 0;


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


function playRound1(playerSelection1, computerSelection) {
    if (playerSelection1.toUpperCase() === computerSelection.toUpperCase()) {
        console.log("It's a tie.");
    }

    if (playerSelection1.toUpperCase() === "Rock".toUpperCase() && computerSelection === "Scissors") {
        playerScore += 1;
        console.log(`You won! Rock beats scissors.`);
    }
    else if (playerSelection1.toUpperCase() === "Scissors".toUpperCase() && computerSelection === "Rock") {
        computerScore += 1;
        console.log(`You lose! Rock beats scissors.`);
    }

    if (playerSelection1.toUpperCase() === "Scissors".toUpperCase() && computerSelection === "Paper") {
        playerScore += 1;
        console.log(`You won! Scissors beats paper.`);
    }
    else if (playerSelection1.toUpperCase() === "Paper".toUpperCase() && computerSelection === "Scissors") {
        computerScore += 1;
        console.log(`You lose! Scissors beats paper.`);
    }

    if (playerSelection1.toUpperCase() === "Paper".toUpperCase() && computerSelection === "Rock") {
        playerScore += 1;
        console.log(`You won! Paper beats rock.`);
    }
    else if (playerSelection1.toUpperCase() === "Rock".toUpperCase() && computerSelection === "Paper") {
        computerScore += 1;
        console.log(`You lose! Paper beats rock.`);
    }
}

function playRound2(playerSelection2, computerSelection) {
    if (playerSelection2.toUpperCase() === computerSelection.toUpperCase()) {
        console.log("It's a tie.");
    }

    if (playerSelection2.toUpperCase() === "Rock".toUpperCase() && computerSelection === "Scissors") {
        playerScore += 1;
        console.log(`You won! Rock beats scissors.`);
    }
    else if (playerSelection2.toUpperCase() === "Scissors".toUpperCase() && computerSelection === "Rock") {
        computerScore += 1;
        console.log(`You lose! Rock beats scissors.`);
    }

    if (playerSelection2.toUpperCase() === "Scissors".toUpperCase() && computerSelection === "Paper") {
        playerScore += 1;
        console.log(`You won! Scissors beats paper.`);
    }
    else if (playerSelection2.toUpperCase() === "Paper".toUpperCase() && computerSelection === "Scissors") {
        computerScore += 1;
        console.log(`You lose! Scissors beats paper.`);
    }

    if (playerSelection2.toUpperCase() === "Paper".toUpperCase() && computerSelection === "Rock") {
        playerScore += 1;
        console.log(`You won! Paper beats rock.`);
    }
    else if (playerSelection2.toUpperCase() === "Rock".toUpperCase() && computerSelection === "Paper") {
        computerScore += 1;
        console.log(`You lose! Paper beats rock.`);
    }
}

function playRound3(playerSelection3, computerSelection) {
    if (playerSelection3.toUpperCase() === computerSelection.toUpperCase()) {
        console.log("It's a tie.");
    }

    if (playerSelection3.toUpperCase() === "Rock".toUpperCase() && computerSelection === "Scissors") {
        playerScore += 1;
        console.log(`You won! Rock beats scissors.`);
    }
    else if (playerSelection3.toUpperCase() === "Scissors".toUpperCase() && computerSelection === "Rock") {
        computerScore += 1;
        console.log(`You lose! Rock beats scissors.`);
    }

    if (playerSelection3.toUpperCase() === "Scissors".toUpperCase() && computerSelection === "Paper") {
        playerScore += 1;
        console.log(`You won! Scissors beats paper.`);
    }
    else if (playerSelection3.toUpperCase() === "Paper".toUpperCase() && computerSelection === "Scissors") {
        computerScore += 1;
        console.log(`You lose! Scissors beats paper.`);
    }

    if (playerSelection3.toUpperCase() === "Paper".toUpperCase() && computerSelection === "Rock") {
        playerScore += 1;
        console.log(`You won! Paper beats rock.`);
    }
    else if (playerSelection3.toUpperCase() === "Rock".toUpperCase() && computerSelection === "Paper") {
        computerScore += 1;
        console.log(`You lose! Paper beats rock.`);
    }
}

function playRound4(playerSelection4, computerSelection) {
    if (playerSelection4.toUpperCase() === computerSelection.toUpperCase()) {
        console.log("It's a tie.");
    }

    if (playerSelection4.toUpperCase() === "Rock".toUpperCase() && computerSelection === "Scissors") {
        playerScore += 1;
        console.log(`You won! Rock beats scissors.`);
    }
    else if (playerSelection4.toUpperCase() === "Scissors".toUpperCase() && computerSelection === "Rock") {
        computerScore += 1;
        console.log(`You lose! Rock beats scissors.`);
    }

    if (playerSelection4.toUpperCase() === "Scissors".toUpperCase() && computerSelection === "Paper") {
        playerScore += 1;
        console.log(`You won! Scissors beats paper.`);
    }
    else if (playerSelection4.toUpperCase() === "Paper".toUpperCase() && computerSelection === "Scissors") {
        computerScore += 1;
        console.log(`You lose! Scissors beats paper.`);
    }

    if (playerSelection4.toUpperCase() === "Paper".toUpperCase() && computerSelection === "Rock") {
        playerScore += 1;
        console.log(`You won! Paper beats rock.`);
    }
    else if (playerSelection4.toUpperCase() === "Rock".toUpperCase() && computerSelection === "Paper") {
        computerScore += 1;
        console.log(`You lose! Paper beats rock.`);
    }
}

function playRound5(playerSelection5, computerSelection) {
    if (playerSelection5.toUpperCase() === computerSelection.toUpperCase()) {
        console.log("It's a tie.");
    }

    if (playerSelection5.toUpperCase() === "Rock".toUpperCase() && computerSelection === "Scissors") {
        playerScore += 1;
        console.log(`You won! Rock beats scissors.`);
    }
    else if (playerSelection5.toUpperCase() === "Scissors".toUpperCase() && computerSelection === "Rock") {
        computerScore += 1;
        console.log(`You lose! Rock beats scissors.`);
    }

    if (playerSelection5.toUpperCase() === "Scissors".toUpperCase() && computerSelection === "Paper") {
        playerScore += 1;
        console.log(`You won! Scissors beats paper.`);
    }
    else if (playerSelection5.toUpperCase() === "Paper".toUpperCase() && computerSelection === "Scissors") {
        computerScore += 1;
        console.log(`You lose! Scissors beats paper.`);
    }

    if (playerSelection5.toUpperCase() === "Paper".toUpperCase() && computerSelection === "Rock") {
        playerScore += 1;
        console.log(`You won! Paper beats rock.`);
    }
    else if (playerSelection5.toUpperCase() === "Rock".toUpperCase() && computerSelection === "Paper") {
        computerScore += 1;
        console.log(`You lose! Paper beats rock.`);
    }
}


  const playerSelection1 = prompt('Round 1: Rock, papers, or scissors?', "");
  const playerSelection2 = prompt('Round 2: Rock, papers, or scissors?', "");
  const playerSelection3 = prompt('Round 3: Rock, papers, or scissors?', "");
  const playerSelection4 = prompt('Round 4: Rock, papers, or scissors?', "");
  const playerSelection5 = prompt('Round 5: Rock, papers, or scissors?', "");

  const computerSelection = getComputerChoice();
  

  function playGame() {
    playRound1(playerSelection1, computerSelection);
    playRound2(playerSelection2, computerSelection);
    playRound3(playerSelection3, computerSelection);
    playRound4(playerSelection4, computerSelection);
    playRound5(playerSelection5, computerSelection);
    // Keeps score
    if ( playerScore > computerScore) {
        console.log('Player wins the game')
    }
    else if ( playerScore === computerScore) {
        console.log("No winners. Scores are equal.")
    }
    else {
        console.log('Game Over!')
    }
  }

  playGame();
