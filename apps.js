var player1 = "Rock";
var player2 = "Scissors";
if (player1 === player2) {
    console.log("It is a tie");
}
else if ((player1 === "Rock" && player2 === "Scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "Rock")) {
    console.log("player 1 win!");
}
else {
    console.log("player 2 win ");
}
