//This section controls gameplay:
function computerPlay() { //Generates random computer move.
    
    let rando = (Math.floor(Math.random() * 100));

    if (rando <= 33) {
        return "rock";

    } else if (rando <= 66) {
        return "paper";

    } else { return "scissors"; }
}

let computerSelection; //Declare variables.
let playerSelection;

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay();

    if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerScore;
        console.log(
            "You lose! Paper beats rock.\n" +
            "Player Score: " + playerScore + "\n" +
            "Computer Score: " + computerScore);

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerScore;
        console.log(
            "You win! Rock beats scissors.\n" +
            "Player Score: " + playerScore + "\n" +
            "Computer Score: " + computerScore);

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerScore;
        console.log(
            "You win! Paper beats rock.\n" +
            "Player Score: " + playerScore + "\n" +
            "Computer Score: " + computerScore);
    
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerScore;
        console.log(
            "You lose! Scissors beats paper.\n" +
            "Player Score: " + playerScore + "\n" +
            "Computer Score: " + computerScore);

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore;
        console.log(
            "You lose! Rock beats scissors.\n" +
            "Player Score: " + playerScore + "\n" +
            "Computer Score: " + computerScore);

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerScore;
        console.log(
            "You win! Scissors beats paper.\n" +
            "Player Score: " + playerScore + "\n" +
            "Computer Score: " + computerScore);
    
    } else { console.log(
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
            "FINAL Player Score: " + playerScore + "\n" +
            "FINAL Computer Score: " + computerScore);

    } else if (playerScore < computerScore) {
        console.log(
            "You lose...\n" +
            "FINAL Player Score: " + playerScore + "\n" +
            "FINAL Computer Score: " + computerScore);

    } else {
        console.log(
            "It's a tie!\n" +
            "FINAL Player Score: " + playerScore + "\n" +
            "FINAL Computer Score: " + computerScore); 
    }
}

// game();

//This section controls UI.

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.className === "rock") {
            playRound("rock");
        } else if (button.className === "paper") {
            playerSelection = "paper";
            playRound("paper");
        } else {
            playerSelection = "scissors";
            playRound("scissors");
        }});
});

