/*
 * DOTS: Level One
 * ## Level 1
 * For level 1, implement a single event listener to
 * the `.js-ball` element. When the user clicks on
 * the ball, it should increment their score by 10
 * points. When the user reaches 100 points, they've
 * beat the level and can move on!
 *
 */
let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');

// Listen for a click, then run a function that determines if the click
//is on a ball, then if so, increments the score, then if the score is 100
//it runs the declareWinner function
ballEl.addEventListener("click", function() {
  score+=10;
  // The score increments when it is less than or equal to 100
  if (score <= 100){
    scoreEl.innerText = score;
  }
  // When the score hits exactly 100, the the game should end
  if (score == 100){
    declareWinner();
  }  
})

//Add function that updates the body of the webpage to use the game-over
//class. This function should run after the user reaches 100 points
function declareWinner() {
  document.body.classList.add('game-over');
}