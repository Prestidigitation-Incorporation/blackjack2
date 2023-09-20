//Properties
let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""

function startGame() {
    if (sum < 21) {
        message = "Do you want another card?"
    } else if (sum === 21) {
        message = "Blackjack!"
        hasBlackjack = true
    } else if (sum > 21) {
        message = "You lose. Sorry, chump."
        isAlive = false
    }

    console.log(isAlive)
}


