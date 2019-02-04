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


};

function getRoundWinner() {
  
}