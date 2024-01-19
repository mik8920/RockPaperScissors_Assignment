const rockButton = document.getElementById("rockBtn");
const paperButton = document.getElementById("paperBtn");
const scissorsButton = document.getElementById("scissorsBtn");
const newGameButton = document.getElementById("newGameBtn");
const result = document.querySelector(".result");
const playerScoreMessage = document.querySelector(".playerScore");
const computerScoreMessage = document.querySelector(".computerScore");
result.classList.add("result-style");
playerScoreMessage.classList.add("score-style");
computerScoreMessage.classList.add("score-style");
newGameButton.classList.add("newGame-style");
let gameOver = false;

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
  if (gameOver) {
    return;
  }
  const playerSelection = e.target.textContent;
  const computerSelection = getComputerChoice();
  gameRound(playerSelection, computerSelection);
};

const newGameClick = (e) => {
  playerScore = 0;
  computerScore = 0;
  result.textContent = "";
  computerScoreMessage.textContent = "";
  playerScoreMessage.textContent = "";
  playerScoreMessage.style.color = "white";
  computerScoreMessage.style.color = "white";
  result.style.color = "white";
  result.style.fontWeight = "";
  gameOver = false;
  buttonClick();
};

rockButton.addEventListener("mouseover", () => {
  rockButton.style.cursor = "pointer";
});
rockButton.addEventListener("mouseout", () => {
  rockButton.style.cursor = "default";
});
paperButton.addEventListener("mouseover", () => {
  paperButton.style.cursor = "pointer";
});
paperButton.addEventListener("mouseout", () => {
  paperButton.style.cursor = "default";
});
scissorsButton.addEventListener("mouseover", () => {
  scissorsButton.style.cursor = "pointer";
});
scissorsButton.addEventListener("mouseout", () => {
  scissorsButton.style.cursor = "default";
});
newGameButton.addEventListener("mouseover", () => {
  newGameButton.style.cursor = "pointer";
});
newGameButton.addEventListener("mouseout", () => {
  newGameButton.style.cursor = "default";
});

rockButton.addEventListener("click", buttonClick);
paperButton.addEventListener("click", buttonClick);
scissorsButton.addEventListener("click", buttonClick);
newGameButton.addEventListener("click", newGameClick);

const gameRound = (playerSelection, computerSelection) => {
  if (
    (playerSelection === rock && computerSelection === paper) ||
    (playerSelection === paper && computerSelection === scissors) ||
    (playerSelection === scissors && computerSelection === rock)
  ) {
    result.textContent = `You lose, ${computerSelection} beats ${playerSelection}!`;
    computerScore++;
    computerScoreMessage.textContent = `Computer score: ${computerScore}`;
    if (computerScore === 5) {
      gameOver = true;
      result.textContent = "Computer is the winner, game over!";
      result.style.color = "gold";
      result.style.fontWeight = "bold";
      computerScoreMessage.style.color = "red";

      return;
    }
    return;
  } else if (
    (playerSelection === rock && computerSelection === scissors) ||
    (playerSelection === paper && computerSelection === rock) ||
    (playerSelection === scissors && computerSelection === paper)
  ) {
    result.textContent = `You win, ${playerSelection} beats ${computerSelection}!`;
    playerScore++;
    playerScoreMessage.textContent = `Player score: ${playerScore}`;
    if (playerScore === 5) {
      gameOver = true;
      result.textContent = "Player is the winner, congratulations!";
      result.style.color = "gold";
      result.style.fontWeight = "bold";
      playerScoreMessage.style.color = "red";

      return;
    }
    return;
  } else {
    result.textContent = `It's a tie, ${computerSelection} is equal to ${playerSelection}!`;
    return;
  }
};
