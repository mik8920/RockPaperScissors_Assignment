const rock = 'rock'
const paper = 'paper'
const scissors = 'scissors'
const punch_in_the_face = 'punch in the face'

const move = [rock, paper, scissors, punch_in_the_face]

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * move.length)
    return move[randomNumber]
}

let winningConditions = () => {

    if (
        (rock > scissors) ||
        (scissors > paper) ||
        (paper > rock) ||
        (punch_in_the_face > scissors) ||
        (punch_in_the_face > paper) ||
        (punch_in_the_face < rock)) {
        return true
    } else {
        return false
    }
}

const gameRound = (playerSelection, computerSelection) => {

    if (winningConditions() === true) {
        console.log(`You win, ${playerSelection} beats ${computerSelection}`)
        return true
    }
    else if (winningConditions() === false) {
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`)
        return false
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


