//Properties
let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let responseMessage = ""
let gameMessage = document.getElementById("message-element")
console.log(gameMessage)

// I'll store the total-element <p> in a new variable called theTotal.
let theTotal = document.getElementById("total-element")

// Store the cards in a <p> variable.
let theCards = document.getElementById("cards-element")

function startGame() {
    //Show the cards on the page
    theCards.textContent = "Cards: " + firstCard + " " + secondCard
    //Display theTotal on the page
    theTotal.textContent = "Sum: " + sum
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

function newCard() {
    console.log("Drawing a new card from the deck.")
}


