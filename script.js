//Properties
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let responseMessage = ""
let gameMessage = document.getElementById("message-element")
console.log(gameMessage)

// I'll store the total-element <p> in a new variable called theTotal.
let theTotal = document.getElementById("total-element")

// Store the cards in a <p> variable.
let theCards = document.getElementById("cards-element")

console.log(cards)

function startGame() {
    isAlive = true
    playGame()
}
function playGame() {
    //Show the cards on the page
    theCards.textContent = "Cards: "

    // Make a for-loop to display all the cards
    for (let i = 0; i < cards.length; i++) {
        theCards.textContent += cards[i] + " "
    }

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
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    playGame()
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1 // This gives us a number from 1 - 13
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


