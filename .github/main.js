let playerMove;
let computerMove;
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
  alert(-1);
  alert(
    "computerwins " +
      computerWins +
      " Player Wins " +
      playerWins +
      " Game Draw " +
      gameDraw
  );
}
function playerHasWon() {
  playerWins++;
  alert(1);
  alert(
    "Player Wins " +
      playerWins +
      " computerwins " +
      computerWins +
      " Game Draw " +
      gameDraw
  );
}
function weDraw() {
  gameDraw++;
  alert(0);
  alert(
    "It's a draw " +
      gameDraw +
      " computerwins " +
      computerWins +
      " Player Wins " +
      playerWins
  );
}

function getWinnerByUI() {
  while (playAgain) {
    playerMove = prompt("Please enter your move");
    computerMove = moves[Math.floor(Math.random() * 3)];
    numberOfGames++;

    if (conditionsPlayerWins()) {
      playerHasWon();
    } else if (conditionsComputerWins()) {
      computerHasWon();
    } else {
      weDraw();
    }

    alert("you played " + numberOfGames + " games");
    console.log(computerMove);
    playAgain = confirm("would you like to play again??");
  }
}
getWinnerByUI();
