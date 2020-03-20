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
    crystal1 = Math.floor(Math.random() * 10);
    crystal2 = Math.floor(Math.random() * 10);
    crystal3 = Math.floor(Math.random() * 10);
    crystal4 = Math.floor(Math.random() * 10);
    if (crystal1 % 2 == 0) {
        crystal1++;
    }
    //Display target score,wins,losses,and current score
    document.getElementById("target-number").innerHTML = targetScore;
    document.getElementById("winstotal").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("score").innerHTML = currentScore;
}

//Onclick function that says on click of any crystal, add their number to the player score
$("#bluegem").on("click", function () { gemClick("blue") });
$("#greengem").on("click", function () { gemClick("green") });
$("#redgem").on("click", function () { gemClick("red") });
$("#yellowgem").on("click", function () { gemClick("yellow") });

function gemClick(color) {
    if (color == "blue") {
        currentScore = crystal1 + currentScore;
        document.getElementById("score").innerHTML = currentScore
    }
    else if (color == "green") {
        currentScore = crystal2 + currentScore;
        document.getElementById("score").innerHTML = currentScore
    }
    else if (color == "red") {
        currentScore = crystal3 + currentScore;
        document.getElementById("score").innerHTML = currentScore
    }
    else if (color == "yellow") {
        currentScore = crystal4 + currentScore;
        document.getElementById("score").innerHTML = currentScore
    }

    if (currentScore == targetScore) {
        document.getElementById("winner").innerHTML = "You Win"
        wins++
        document.getElementById('winstotal').innerHTML = wins
    }   //     //Do stuff

    // else if (currentScore > targetScore) {}
    
    // // //     //Do stuff
    // // }


}

    //Check if current score is less than, equal to, or greater than target number
        //If less than, do nothing
        //If greater than, run lose function
        //If equal to, run win function

//A winner is you function
    //Display winner text
    //Increment wins
    //Run new game function

//You lose function
    //Display loser text
    //Increment losses
    //Run new game function