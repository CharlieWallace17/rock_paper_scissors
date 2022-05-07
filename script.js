function computerPlay() { //Generates random computer move.

    if (Math.floor(Math.random() * 100) <= 33) {
        
        return "rock";

    } else if (Math.floor(Math.random() * 100) <= 66) {

        return "paper";

    } else { return "scissors"; }
}

let computerSelection;
let playerSelection;

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("What's your move?").toLowerCase();
    computerSelection = computerPlay();


    if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerScore;
        return (
            "You lose! Paper beats rock.\n" +
            "Player Score: " + playerScore + "\n" +
            "Computer Score: " + computerScore);

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerScore;
        return (
            "You win! Rock beats scissors.\n" +
            "Player Score: " + playerScore + "\n" +
            "Computer Score: " + computerScore);

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerScore;
        return (
            "You win! Paper beats rock.\n" +
            "Player Score: " + playerScore + "\n" +
            "Computer Score: " + computerScore);
    
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerScore;
        return (
            "You lose! Scissors beats paper.\n" +
            "Player Score: " + playerScore + "\n" +
            "Computer Score: " + computerScore);

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore;
        return (
            "You lose! Rock beats scissors.\n" +
            "Player Score: " + playerScore + "\n" +
            "Computer Score: " + computerScore);

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerScore;
        return (
            "You win! Scissors beats paper.\n" +
            "Player Score: " + playerScore + "\n" +
            "Computer Score: " + computerScore);
    
    } else { return (
        "Draw!\n" +
        "Player Score: " + playerScore + "\n" +
        "Computer Score: " + computerScore);
    }

}

function game() {

    for (let i = 0; i < 5; i++) {

        console.log(playRound());
    }

    if (playerScore > computerScore) {
        console.log(
            "YOU WIN!!!\n" +
            "Final Player Score: " + playerScore + "\n" +
            "Final Computer Score: " + computerScore);

    } else if (playerScore < computerScore) {
        console.log(
            "You lose...\n" +
            "Final Player Score: " + playerScore + "\n" +
            "Final Computer Score: " + computerScore);
    } else {
        console.log(
            "It's a tie!\n" +
            "Final Player Score: " + playerScore + "\n" +
            "Final Computer Score: " + computerScore); 
    }

}

game();

