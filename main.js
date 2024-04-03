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

console.log(getComputerChoice());