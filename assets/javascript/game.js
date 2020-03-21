//Global variables for wins=0, losses=0, crystal numbers, current score, and target numbers 
var wins = 0;
var losses = 0;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var currentScore = 0;
var targetScore = 0;

//Call setup function
setup();

//Function that sets up a new game
function setup() {
    //Change target number
    targetScore = Math.floor(Math.random() * 40) + 20;
    //Change current score
    currentScore = 0;
    //Change crystal numbers
    crystal1 = Math.floor(Math.random() * 9) + 1;
    crystal2 = Math.floor(Math.random() * 9) + 1;
    crystal3 = Math.floor(Math.random() * 9) + 1;
    crystal4 = Math.floor(Math.random() * 9) + 1;
    if (crystal1 % 2 == 0) {
        crystal1++;
    }

    $("#target-number").html(targetScore);
    $("#winstotal").html(wins);
    $("#lossestotal").html(losses);
    $("#score").html(currentScore);
}

//Onclick function that says on click of any crystal, add their number to the player score
$("#bluegem").on("click", function () { gemClick("blue") });
$("#greengem").on("click", function () { gemClick("green") });
$("#redgem").on("click", function () { gemClick("red") });
$("#yellowgem").on("click", function () { gemClick("yellow") });

function gemClick(color) {
    if (color == "blue") {
        currentScore = crystal1 + currentScore;
        $("#score").html(currentScore);
    }
    else if (color == "green") {
        currentScore = crystal2 + currentScore;
        $("#score").html(currentScore);
    }
    else if (color == "red") {
        currentScore = crystal3 + currentScore;
        $("#score").html(currentScore);
    }
    else if (color == "yellow") {
        currentScore = crystal4 + currentScore;
        $("#score").html(currentScore);
    }

    //Check if current score is less than, equal to, or greater than target number
        //If less than, do nothing
        //If greater than, run lose function
        //If equal to, run win function

    if (currentScore == targetScore) {
        $("#winstatus").html("You Win!!");
        wins++;
        $("#winstotal").html(wins);
        setup();
    }  
    else if (currentScore > targetScore) {
        $("#winstatus").html("You Lose!!");
        losses++;
        $("#lossestotal").html(losses);
        setup();
        //     //Do stuff
    }
    else {
        $("#winstatus").html("");
    }

}
