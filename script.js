'use strict'

const choiceArr = ['rock', 'paper', 'scissors']

const getComputerChoice = () => {
    const randomArrIndex = Math.ceil(Math.random()*choiceArr.length) - 1

    return choiceArr[randomArrIndex]
}

const getHumanChoice = () => {
    const humanChoiceIndex = parseInt(prompt("Napište hodnotu 0, 1 nebo 2 \n0 - rock \n1-paper \n2-scissors"))

    return choiceArr[humanChoiceIndex]
}

const playRound = (humanChoice, computerChoice, score) => {
    let game = [humanChoice, computerChoice]
    let winnerIndex = 0

    console.log(`YOUR CHOICE: ${humanChoice}`)
    console.log(`CPU CHOICE: ${computerChoice}`)
    
    if (humanChoice === computerChoice) {
        score[0] += 1
        score[1] += 1
    } else if (game.includes(choiceArr[0]) && game.includes(choiceArr[1])) {
        winnerIndex = game.indexOf(choiceArr[1])
        score[winnerIndex] += 1
    } else if (game.includes(choiceArr[0]) && game.includes(choiceArr[2])) {
        winnerIndex = game.indexOf(choiceArr[0])
        score[winnerIndex] += 1
    } else if (game.includes(choiceArr[1]) && game.includes(choiceArr[2])) {
        winnerIndex = game.indexOf(choiceArr[2])
        score[winnerIndex] += 1
    }

    const winnerIs = winnerIndex === 0 ? 'YOU' : 'CPU'
    console.log(`WINNER IS: ${winnerIs}`)
    console.log(`SCORE IS ... HUMAN ${score[0]} : CPU ${score[1]}`)
    console.log('-'.repeat(10))
}

const isWinner = (scoreArr) => {
    if (scoreArr[0] > scoreArr[1]) {
        return 'HUMAN'
    } else if (scoreArr[0] < scoreArr[1]) {
        return 'CPU'
    } else {
        return 'IT\'S A DRAW!'
    }
}


const playGame = (round, roundNumber) => {
    let gameScore = [0, 0]

    for (let i = 0; i < roundNumber; i++) {
        round(getHumanChoice(), getComputerChoice(), gameScore)
    }

    console.log(`WINNER IS .......... ${isWinner(gameScore)}`)
}


playGame(playRound, 5)
