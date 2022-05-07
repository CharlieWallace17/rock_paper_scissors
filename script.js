function computerPlay() { //Generates random computer move.

    if (Math.floor(Math.random() * 100) <= 33) {
        
        return "rock";

    } else if (Math.floor(Math.random() * 100) <= 66) {

        return "paper";

    } else { return "scissors"; }
}

let computerSelection;
let playerSelection;

let playerScore;
let computerScore;

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("What's your move?").toLowerCase();
    computerSelection = computerPlay();


    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock.";

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors.";

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock.";
    
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper.";

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors.";

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper.";
    
    } else { return "Draw!" };

}

function game() {

    for (let i = 0; i < 5; i++) {

        console.log(playRound());

    }
}

game();

