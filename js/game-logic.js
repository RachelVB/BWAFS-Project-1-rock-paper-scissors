// All code should be written in this file.

let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;

let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;

let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

const playerOne = 'Player One';
const playerTwo = 'Player Two';
const tie = 'tie'

const move1Type = 'rock';
const move2Type = 'paper';
const move3Type = 'scissors';

const move1Value = 11;
const move2Value = 33;
const move3Value = 55;

function setPlayerMoves (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
  
  if (!moveOneType || !moveTwoType || !moveThreeType || !moveOneValue || !moveTwoValue || !moveThreeValue) {
    return;
    /*Here we are using the ! point to explain that if this '' is NOT 
    true(not 'true' because we dont have a return value), then clear the 'return'. */
  }

  if (!validTypes(moveOneType, moveTwoType, moveThreeType)) {
    //The above code in the if statement, is essentially saying "If validTypes does NOT equal true..."
    return;
  }

  if (!validValues(moveOneValue, moveTwoValue, moveThreeValue)) {
    return;
  }

  /* The code we write below here in our switch statement, allows us to set the players moves. We do this 
  for player one and player two. */
  switch(player) {
    case playerOne:
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
    break;

    case playerTwo:
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
    break;
  }
};

/* Below here, we have a predicat helper function, this will return true or false bsed on its input.
We need to difine the valid types, which would be either rock,paper, or scissors. From the 
global variables listed above. 
Make sure to see that we have a variable with 'validTypes' and then we declare a different variable called
'validType' */
const validTypes = (type1, type2, type3) =>
  validType(type1) && validType(type2) && validType(type3);

/* Here we have a ternary conditional statment, asking if 'type' equal true, 
we either want 'rock','paper',or scissors */
const validType = (type) => type === move1Type || type === move2Type || type === move3Type;

/* The validValues function asks if the values individually are no less then 1, and combined are not greater
than the value of 99 */
const validValues = (value1, value2, value3) =>
  value1 >= 1 && value2 >= 1 && value3 >= 1 && value1 + value2 + value3 <= 99;


  /* From this point, we are now passing all of our 'setPlayerMoves' in our test. 
   */

function getRoundWinner() {
  
}