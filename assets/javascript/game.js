var game = function () {

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
    $(".random-number").text("Your numbert to match: " + randomNumber)

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
        // score = score + crystal1;
        score += crystal1;   
        $("#score").html(score);
    });

    $("#crystal-image2").on("click", function() {
        // score = score + crystal1;
        score += crystal2;   
        $("#score").html(score);
    });

    $("#crystal-image3").on("click", function() {
        // score = score + crystal1;
        score += crystal3;   
        $("#score").html(score);
    });

    $("#crystal-image4").on("click", function() {
        // score = score + crystal1;
        score += crystal4;   
        $("#score").html(score);
    });

    // after loss, everything works at first. except losses will continue to go up even though score goes back to 0 and already lost. does not reset. but random numbers keep changing (resetting)
    $(".crystal-container").on("click", function() {
        if (score > randomNumber) {
            //    * The player loses if their score goes above the random number.
            losses++;
            $("#losses").text("Losses: " + losses);
            alert("Sorry, you lost. Try again.")
            console.log("loser");
            reset()

    // after win, everything works at first. expcept the next button pushed is automatic loss. numbers all reset correctly.
        } else if (score === randomNumber) {
            //    * The player wins if their total score matches the random number from the beginning of the game.
            wins++;
            $("#wins").text("Wins:  " + wins);
            alert("YOU WON!!!");
            console.log("winner");
            reset()
        }
        //    * The game restarts whenever the player wins or loses.
    })
}
var reset = function() {
    score = 0;
    updateScore();
    game()
}
game();

var updateScore = function() {
    $("#score").html("Your number: " + score);

}




