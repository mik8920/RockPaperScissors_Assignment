
const choice = [`rock`, `paper`, `scissors`]

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * choice.length)
    return choice[randomNumber]
}

const gameRound = (playerSelection, computerSelection) => {

    if (playerSelection==`rock` && computerSelection==choice[1] || playerSelection.toLowerCase() == "paper" && computerSelection == choice[2] || playerSelection.toLowerCase() == "scissors" && computerSelection == choice[0]) {
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`)
        return `lose`
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == choice[2] || playerSelection.toLowerCase() == "paper" && computerSelection == choice[0] || playerSelection.toLowerCase() == "scissors" && computerSelection == choice[1] ) {
        console.log(`You win, ${playerSelection} beats ${computerSelection}`)
        return `win`
    } else if (playerSelection.toLowerCase() == computerSelection) {
        console.log(`It's a tie`)
    } else { console.log(`Error`)}
}

let playerScore = 0
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
} else { console.log(`It's a tie`) }


