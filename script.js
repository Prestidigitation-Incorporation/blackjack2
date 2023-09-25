//Properties
let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let responseMessage = ""
let gameMessage = document.getElementById("message-element")
console.log(gameMessage)


function startGame() {
    if (sum < 21) {
        responseMessage = "Do you want another card?"
    } else if (sum === 21) {
        responseMessage = "Blackjack!"
        hasBlackjack = true
    } else if (sum > 21) {
        responseMessage = "You lose. Sorry, chump."
        isAlive = false
    }
    gameMessage.textContent = responseMessage
}


