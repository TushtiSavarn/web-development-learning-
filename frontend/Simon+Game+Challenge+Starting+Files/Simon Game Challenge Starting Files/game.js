// Step 1: Define button colors array
var buttonColors = ["red", "blue", "green", "yellow"];

// Step 5: Create an empty array for game pattern
var gamePattern = [];

// Step 2 & 3: Correct random number generation and function definition
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4); // Generates random number between 0 and 3
    var randomChosenColour = buttonColors[randomNumber];
    
    // Step 6: Add the random chosen color to gamePattern
    gamePattern.push(randomChosenColour);

    // You can add more functionality to this function as needed for your game
    console.log("New random color added to game pattern: " + randomChosenColour);
}

// Call nextSequence to test
nextSequence();

$("button")