

//if (playerMove === "scissors"){
//    console.log ("you lost")
//}

//if (playerMove === "paper"){
//    console.log ("you won")
//}

//if (playerMove === "rock"){
//    console.log ("you draw")
//}
//1. Get the players move

//2. Get the computers move

//3. What is the players move rock, paper, scissors
//4.What is the computers move rock, paper, scissors
//5. Compare together the results 



const moves = ["rock", "paper", "scissors"];
let playAgain = true;

// add a while loop to make the game continuous

while (playAgain) {
let playerMove = prompt ("Please enter your move")
let computerMove = moves[ Math.floor((Math.random() * 3))]
console.log (computerMove)





if (playerMove === computerMove) {
    alert("0")

}
// if playermove is rock and computermove is paper winner is computer

if (playerMove === "rock" && computerMove === "paper") {
    alert("-1")
};
//// if playermove is rock and computermove is scissors winner is player


if (playerMove === "rock" && computerMove === "scissors") {
    alert("1")
}

// if playermove is paper and computermove is scissors winner is computer
if (playerMove === "paper" && computerMove === "scissors") {
    alert("-1")
}


// if playermove is paper and computermove is rock winner is player
if (playerMove === "paper" && computerMove === "rock") {
    alert("1")
}

// if playermove is scissors and computermove is paper winner is player
if (playerMove === "scissors" && computerMove === "paper") {
    alert("1")
}


// if playermove is scissors and computermove is rock winner is computer
if (playerMove === "scissors" && computerMove === "rock") {
    alert("-1")
}
    // prompt("Would you like to play again yes or no?") {
    // if (playAgain === yes === true)}; {
    // else (playAgain === no ===  false)}

    // prompt("Would you like to play again yes or no?")
    // if (playAgain === "yes"){
    //     playAgain = true;
    // } else if (playAgain === "no")
    // {
    //     playAgain = false;
    // }

    playAgain = confirm("would you like to play again??");
}

    // window.confirm( "Would you like to play again?" );
    // if (confirm === true){
    //     playAgain === true;
    // } else {
    //     playAgain === false;
    // } break;
    








// ask the player if he wants to play again
//




// //if (playerMove === "scissors"){
// console.log ("you lost");
// } 
// else if (playerMove === "paper") {
//     console.log("you won");}
// else if (playerMove === "rock"){
//     console.log ("you draw"); 
// } 


// if (playerMove === "scissors"){
//     console.log ("you draw");
//     } 
//     else if (playerMove === "paper") {
//         console.log("you lost");}
//     else if (playerMove === "rock"){
//         console.log ("you won");
//     }









