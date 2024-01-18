const rock = 'rock'
const paper = 'paper'
const scissors = 'scissors'

const choice = [rock, paper, scissors]

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * choice.length)
    return choice[randomNumber]
}

const gameRound = (playerSelection, computerSelection) => {

    if ((playerSelection === rock && computerSelection === paper) || (playerSelection === paper && computerSelection === scissors) || (playerSelection === scissors && computerSelection === rock)) {
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`)
        return false
    } else if ((playerSelection === rock && computerSelection === scissors)|| (playerSelection === paper && computerSelection === rock) || (playerSelection === scissors && computerSelection === paper)) {
        console.log(`You win, ${playerSelection} beats ${computerSelection}`)
        return true
    } else if (playerSelection === computerSelection) {
        console.log("It's a tie")
        return undefined
    } else {
        console.log('Error')
        return undefined
    }
}

let playerScore = 0
let computerScore = 0

for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt('Choose your move').toLowerCase()
    let computerSelection = getComputerChoice()
    const result = gameRound(playerSelection, computerSelection)

    if (result == true) {
        playerScore++
    } else if (result == false) {
        computerScore++
    }
}

if (playerScore > computerScore) {
    console.log('Player is the winner')
} else if (playerScore < computerScore) {
    console.log('Computer is the winner')
} else { console.log("It's a tie") }


