let playerMove;
let computerMove;
let playerName;
const moves = ["rock", "paper", "scissors"];
function conditionsPlayerWins() {
  return (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  );
}
function conditionsComputerWins() {
  return (
    (playerMove === "rock" && computerMove === "paper") ||
    (playerMove === "paper" && computerMove === "scissors") ||
    (playerMove === "scissors" && computerMove === "rock")
  );
}
const conditionsToDraw = playerMove === computerMove;
let playAgain = true;
let numberOfGames = 0;
let playerWins = 0;
let computerWins = 0;
let gameDraw = 0;

function getWinner(player1, player2) {
  playerMove = player1;
  computerMove = player2;
  console.log(playerMove, computerMove);
  if (conditionsPlayerWins()) {
    return 1;
  } else if (conditionsComputerWins()) {
    return -1;
  } else {
    return 0;
  }
}

//console.log(getWinner("paper", "paper"));

function computerHasWon() {
  computerWins++;
  alert("Computer Wins!");
  alert(
    playerName + " victories " +
      playerWins +
    " Computer victories " +
      computerWins +
    " Games drawn " +
      gameDraw
  );
}
function playerHasWon() {
  playerWins++;
  alert("You Win!");
  alert(
    playerName + " victories " +
      playerWins +
    " Computer victories " +
      computerWins +
    " Games drawn " +
      gameDraw
  );
}
function weDraw() {
  gameDraw++;
  alert("It's a Draw!");
  alert(
    playerName + " victories " +
     playerWins +
    " Computer victories " +
      computerWins +
    " Games drawn " +
      gameDraw
  );
}


alert("Welcome Visitor!");
playerName = prompt("What's your Name?");



function getWinnerByUI() {
  while (playAgain) {
   
    playerMove = prompt("Good luck " + playerName + "! Please enter your move");
    if (playerMove === null){
      return
    };
    if (playerMove.toLowerCase() !== "rock" && playerMove.toLowerCase() !== "paper" && playerMove.toLowerCase() !== "scissors"){
      alert("Only moves allowed: rock, paper, scissors")
      console.log(playerMove.toLowerCase())
      continue
    } 
    computerMove = moves[Math.floor(Math.random() * 3)];
    numberOfGames++;

    if (conditionsPlayerWins()) {
      playerHasWon();
    } else if (conditionsComputerWins()) {
      computerHasWon();
    } else if (conditionsToDraw){
      weDraw();
    }

    alert(playerName + " played " + numberOfGames + " games");
    console.log(computerMove);
    playAgain = confirm("would you like to play again??");
  
  }
}

getWinnerByUI();

