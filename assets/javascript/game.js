// VARIABLES
var wins = 0;
var losses = 0;
//these are the crystal values
var crystal1;
var crystal2;
var crystal3;
var crystal4;

var score = 0;
var min = 19; 
var max = 121;
var cMin = 1;
var cMax = 13;

// FUNCTIONS


// GAME START / RESET

// At the start of game:

// A random number between 19 - 120 is picked
var randomNumber = Math.floor(Math.random() * (max - min +1)) + min; 
console.log(randomNumber) 
// the random number is diplayed
$(".random-number").text(randomNumber)

wins = 0;
losses = 0;
score = 0;

// each crystal gets a random value between 1 - 12 
// var crystalValues = function() {
crystal1 = Math.floor(Math.random() * (cMax - cMin +1)) + cMin;
crystal2 = Math.floor(Math.random() * (cMax - cMin +1)) + cMin;
crystal3 = Math.floor(Math.random() * (cMax - cMin +1)) + cMin;
crystal4 = Math.floor(Math.random() * (cMax - cMin +1)) + cMin;
// }
console.log(crystal1, crystal2, crystal3, crystal4)

// GAME PLAY

// When a crystal is clicked, add it's number to the score counter.

$("#crystal-image1").on("click", function() {
    return crystal1 + score
});
$("#crystal-image1").on("click", function(event) {
    $("#score").html(event.result);
});

$("#crystal-image2").on("click", function() {
    return crystal1 + score
});
$("#crystal-image2").on("click", function(event) {
    $("#score").html(event.result);
});
//every time a crystal image is clicked, keep adding coresponding number to the score ---- loop?
if (score < randomNumber) {
    
}

//    * The player wins if their total score matches the random number from the beginning of the game.

//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.

//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. 

