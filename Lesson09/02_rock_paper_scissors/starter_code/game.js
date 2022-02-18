



// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {
    let computerChoice = Math.random() * 3;
    computerChoice = Math.ceil(computerChoice);

    if (computerChoice == 1){
        return "rock";
    }else if (computerChoice == 2){
        return "paper";
    }else {
        return "scissors";
    }     

};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compare(me, opponent) {

    let winner="";

    if(me == opponent){
        winner="tie";

    }else if(me == "rock"){
        if(opponent == "paper"){
            winner="opponent";
        }else {
            winner="me";
        }

    }else if (me == "paper"){
        if(opponent == "scissors"){
            winner="opponent";
        }else {
            winner="me";
        }
        
    }else{ //if me == scissors
        if(opponent == "rock"){
            winner="opponent"
        }else {
            winner="me";
        }
    }

    //output to the screen
    document.querySelector("#    ").
}



document.addEventListener('DOMContentLoaded', function(event) {

    // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html


});
