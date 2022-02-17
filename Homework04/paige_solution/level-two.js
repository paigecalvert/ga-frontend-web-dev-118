/*
 * DOTS: Level Two
 * 
 * ## Level 2
 * Level 2 has 3 moving balls that the user can click on to increment their score.
 * Implement a single click handler to listen for when a user clicks on one of the
 * balls and increment their score until they reach 100.
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

// Listen for a click, then run a function that determines if the click
//is on a ball, then if so, increments the score, then if the score is
//100 it runs the declareWinner function
document.addEventListener('click', function(e){
    if (e.target.classList.contains('js-ball')){
        score+=10;
        // The score increments when it is less than or equal to 100
        if (score <= 100) {
            scoreEl.innerText = score;
        }
        // When the score hits exactly 100, the the game should end
        if (score == 100){
            declareWinner();
        }
    }
})

//Add function that updates the body of the webpage to use the game-over
//class. This function should run after the user reaches 100 points
function declareWinner() {
    document.body.classList.add('game-over');
  }