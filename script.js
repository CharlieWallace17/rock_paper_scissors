function computerPlay() { //Generates random computer move.

    if (Math.floor(Math.random() * 100) <= 33) {
        
        return "rock";

    } else if (Math.floor(Math.random() * 100) <= 66) {

        return "paper";

    } else { return "scissors"; }
}

function playerPlay() {

    let playerEntry = prompt("What's your move?").toLowerCase();

    if (playerEntry === "rock" || "paper" || "scissors") {

        return;

    } else {

        alert("Invalid Entry");

        playerPlay(); 

    }

}

console.log(playerPlay());