const rockButton = document.querySelector("#btnR");
const paperButton = document.querySelector("#btnP");
const scissorsButton = document.querySelector("#btnS");

const buttons = () => {
  btnR.addEventListener("click", () => {
    gameRound(playerSelection, computerSelection);
  });
  btnP.addEventListener("click", () => {
    gameRound(playerSelection, computerSelection);
    computerSelection = getComputerChoice();
  });
  btnS.addEventListener("click", () => {
    gameRound(playerSelection, computerSelection);
  });
};

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const choice = [rock, paper, scissors];

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * choice.length);
  return choice[randomNumber];
};

let computerSelection = getComputerChoice();
let playerSelection = buttons();

const gameRound = (playerSelection, computerSelection) => {
  if (
    (playerSelection === rock && computerSelection === paper) ||
    (playerSelection === paper && computerSelection === scissors) ||
    (playerSelection === scissors && computerSelection === rock)
  ) {
    console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
    return false;
  } else if (
    (playerSelection === rock && computerSelection === scissors) ||
    (playerSelection === paper && computerSelection === rock) ||
    (playerSelection === scissors && computerSelection === paper)
  ) {
    console.log(`You win, ${playerSelection} beats ${computerSelection}`);
    return true;
  } else if (playerSelection === computerSelection) {
    console.log("It's a tie");
    return undefined;
  } else {
    console.log("Error");
    return undefined;
  }
};

/*Add an event listener that calls gameRound function with the correct playerSelection every time a button is clicked.*/

/* let playerScore = 0
let computerScore = 0

for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt(`Choose your move`).toLowerCase()
    let computerSelection = getComputerChoice()
    const result = gameRound(playerSelection, computerSelection)

    if (result == `win`) {
        playerScore++
    } else if (result == `lose`) {
        computerScore++
    }
}

if (playerScore > computerScore) {
    console.log(`Player is the winner`)
} else if (playerScore < computerScore) {
    console.log(`Computer is the winner`)
} else { console.log(`It's a tie`) } */
