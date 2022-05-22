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

div = document.querySelector("div");

function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay();

    if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerScore;
        div.textContent = (
            "\nYou lose! Paper beats rock.\n" +
            "Player Score: " + playerScore + "\n" +
            "Computer Score: " + computerScore);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerScore;
        div.textContent = (
            "\nYou win! Rock beats scissors.\n" +
            "Player Score: " + playerScore + "\n" +
            "Computer Score: " + computerScore);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerScore;
        div.textContent = (
            "\nYou win! Paper beats rock.\n" +
            "Player Score: " + playerScore + "\n" +
            "Computer Score: " + computerScore);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerScore;
        div.textContent = (
            "\nYou lose! Scissors beats paper.\n" +
            "Player Score: " + playerScore + "\n" +
            "Computer Score: " + computerScore);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore;
        div.textContent = (
            "\nYou lose! Rock beats scissors.\n" +
            "Player Score: " + playerScore + "\n" +
            "Computer Score: " + computerScore);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerScore;
        div.textContent = (
            "\nYou win! Scissors beats paper.\n" +
            "Player Score: " + playerScore + "\n" +
            "Computer Score: " + computerScore);
    } else { 
        div.textContent = (
        "\nDraw!\n" +
        "Player Score: " + playerScore + "\n" +
        "Computer Score: " + computerScore);
    } 

    checkScore(playerScore, computerScore);
}

function checkScore(playerScore, computerScore) {
    if (playerScore === 5 && computerScore < 5) {
        div.textContent = (
            "\nYOU WIN!!!\n" +
            "FINAL Player Score: " + playerScore + "\n" +
            "FINAL Computer Score: " + computerScore);
            newGame();
    } else if (computerScore === 5 && playerScore < 5) {
        div.textContent = (
            "\nYou lose...\n" +
            "FINAL Player Score: " + playerScore + "\n" +
            "FINAL Computer Score: " + computerScore);
            newGame();
    } else if (computerScore === 5 && playerScore === 5) {
        div.textContent = (
            "\nIt's a tie!\n" +
            "FINAL Player Score: " + playerScore + "\n" +
            "FINAL Computer Score: " + computerScore); 
            newGame();
    }};

function newGame() {
    playerScore = 0;
    computerScore = 0;
}

//This section controls UI.

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.className === "rock") {
            playRound("rock");
        } else if (button.className === "paper") {
            playRound("paper");
        } else {
            playRound("scissors");
        }});
});

