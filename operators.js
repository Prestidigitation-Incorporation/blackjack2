let hasFinishedTraining = true
let attendsJediGraduation = true

function giveLightsaber() {
    console.log("Here's your lightsaber.")
}

// if (hasFinishedTraining === true) {
//     if (attendsJediGraduation === true) {
//         giveLightsaber()
//     }
// }

// if (hasFinishedTraining === true && attendsJediGraduation === true) {
//     giveLightsaber()
// }
//
// let hasSolvedEscapeRoom = false
// let hasHintsLeft = false
//
// // Create an if statement that checks if both variables are false.
// // If they are run the reachUntimelyEnd() function

let likesAnimatedMovies = true
let likesRobots = false

if (likesAnimatedMovies === true || likesRobots === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("You might like Wall-E")
}