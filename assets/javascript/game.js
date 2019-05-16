//GLOBAL

var score = 0;
//these are the crystal values
var crystal1;
var crystal2;
var crystal3;
var crystal4;

var updateScore = function() {
    $("#score").html("Your number: " + score);
}

//RESET

var reset = function() {
    score = 0;
    crystal1 = 0;
    crystal2 = 0;
    crystal3 = 0;
    crystal4 = 0;   
    game();
}

//MAIN GAME

var game = function () {

    // VARIABLES
    var wins = 0;
    var losses = 0;


    var min = 19; 
    var max = 121;
    var cMin = 1;
    var cMax = 13;

    // FUNCTIONS

    // At the start of game:

    // A random number between 19 - 120 is picked
    var randomNumber = Math.floor(Math.random() * (max - min +1)) + min; 
    console.log(randomNumber) 
    // the random number is diplayed
    $(".random-number").text("Your numbert to match: " + randomNumber)


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
    // ***** after reset, numbers are doubling!!!! why????  ---------------------------   things to try: $("#score").unbind().click(function(){   });; 
    //      if using .unbind, does the .on need changed to .bind???

    $("#crystal-image1").on("click", function() {
        // score = score + crystal1;
        score += crystal1;   
        $("#score").html("Your number: " + score);
        console.log(crystal1)
        console.log(score)
    });

    $("#crystal-image2").on("click", function() {
        score += crystal2;   
        $("#score").html("Your number: " + score);
    });

    $("#crystal-image3").on("click", function() {
        score += crystal3;   
        $("#score").html("Your number: " + score);
    });

    $("#crystal-image4").on("click", function() {
        score += crystal4;   
        $("#score").html("Your number: " + score);
    });


    $(".crystal-container").on("click", function() {
        if (score > randomNumber) {
            //    * The player loses if their score goes above the random number.
            losses++;
            $("#losses").text("Losses: " + losses);
            alert("Sorry, you lost. Try again.")
            console.log("loser");
            reset()

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

game();





