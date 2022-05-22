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

text = document.querySelector(".text");

function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay();

    if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerScore;
        text.textContent =
            `You lose! Paper beats rock. 
             Player Score: ${playerScore}
             Computer Score: ${computerScore}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerScore;
        text.textContent = 
            `You win! Rock beats scissors. 
             Player Score: ${playerScore}
             Computer Score: ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerScore;
        text.textContent = 
            `You win! Paper beats rock.
             Player Score: ${playerScore}
             Computer Score: ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerScore;
        text.textContent = 
            `You lose! Scissors beats paper.
             Player Score: ${playerScore}
             Computer Score: ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore;
        text.textContent = 
            `You lose! Rock beats scissors.
            Player Score: ${playerScore}
            Computer Score: ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerScore;
        text.textContent = 
            `You win! Scissors beats paper.
             Player Score: ${playerScore}
             Computer Score: ${computerScore}`;
    } else { 
        text.textContent = 
        `Draw!
         Player Score: ${playerScore}
         Computer Score: ${computerScore}`;
    } 

    checkScore(playerScore, computerScore);
}

function checkScore(playerScore, computerScore) {
    if (playerScore === 5 && computerScore < 5) {
        text.textContent =
            `YOU WIN!!!
             FINAL Player Score: ${playerScore}
             FINAL Computer Score: ${computerScore}`;
            newGame();
    } else if (computerScore === 5 && playerScore < 5) {
        text.textContent = 
            `You lose...
             FINAL Player Score: ${playerScore}
             FINAL Computer Score: ${computerScore}`;
            newGame();
    } else if (computerScore === 5 && playerScore === 5) {
        text.textContent = 
            `It's a tie!
             FINAL Player Score: ${playerScore}
             FINAL Computer Score: ${computerScore}`; 
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

