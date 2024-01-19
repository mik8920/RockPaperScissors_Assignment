const rockButton = document.getElementById("rockBtn");
const paperButton = document.getElementById("paperBtn");
const scissorsButton = document.getElementById("scissorsBtn");
const newGameButton = document.getElementById("newGameBtn")
const result = document.querySelector(".result");
const playerScoreMessage = document.querySelector(".playerScore");
const computerScoreMessage = document.querySelector(".computerScore");


let isOver = false;

let rock = rockButton.textContent;
let paper = paperButton.textContent;
let scissors = scissorsButton.textContent;

const choice = [rock, paper, scissors];
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * choice.length);
  return choice[randomNumber];
};

let playerScore = 0;
let computerScore = 0;

const buttonClick = (e) => {
  if (isOver) {
    return;
  }
  const playerSelection = e.target.textContent;
  const computerSelection = getComputerChoice();
  gameRound(playerSelection, computerSelection);
};

const newGameClick = (e) => {
playerScore=0
computerScore=0
result.textContent=""
computerScoreMessage.textContent=""
playerScoreMessage.textContent=""
};


rockButton.addEventListener("click", buttonClick);
paperButton.addEventListener("click", buttonClick);
scissorsButton.addEventListener("click", buttonClick);
newGameButton.addEventListener("click",newGameClick)

const gameRound = (playerSelection, computerSelection) => {
  if (
    (playerSelection === rock && computerSelection === paper) ||
    (playerSelection === paper && computerSelection === scissors) ||
    (playerSelection === scissors && computerSelection === rock)
  ) {
    result.textContent = `You lose, ${computerSelection} beats ${playerSelection}`;
    computerScore++;
    computerScoreMessage.textContent = `Computer's score: ${computerScore}`;
    if (computerScore === 5) {
      isOver = true;
      result.textContent = "Computer is the winner";
      return;
    }
    return;
  } else if (
    (playerSelection === rock && computerSelection === scissors) ||
    (playerSelection === paper && computerSelection === rock) ||
    (playerSelection === scissors && computerSelection === paper)
  ) {
    result.textContent = `You win, ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    playerScoreMessage.textContent = `Player's score: ${playerScore}`;
    if (playerScore === 5) {
      isOver = true;
      result.textContent = "Player is the winner";
      return;
    }
    return;
  } else  {
    result.textContent = "It's a tie";
    return;
  }
};

/* Add a div for for results and change the console.log with DOM
 */
/* do {
  gameRound(playerSelection, computerSelection);
} while (playerScore === 5 || computerScore === 5); */

/* const result = gameRound(playerSelection, computerSelection); */

/* for (let i = 1; i <= 5; i++) {


  if (result === true) {
    playerScore++;
  } else if (result === false) {
    computerScore++;
  }
} */

/* if (playerScore > computerScore) {
  console.log("Player is the winner");
} else if (playerScore < computerScore) {
  console.log("Computer is the winner");
} else {
  console.log("It's a tie");
}
 */
