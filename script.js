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

round = document.querySelector(".round");
score = document.querySelector(".score");

function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay();

    if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerScore;
        round.textContent = `You lose! Paper beats rock.`
        score.textContent = 
             `Player Score: ${playerScore}
             Computer Score: ${computerScore}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerScore;
        round.textContent = `You win! Rock beats scissors.` 
        score.textContent =     
            `Player Score: ${playerScore}
             Computer Score: ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerScore;
        round.textContent = `You win! Paper beats rock.`
        score.textContent =  
            `Player Score: ${playerScore}
             Computer Score: ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerScore;
        round.textContent = `You lose! Scissors beats paper.`
        score.textContent =     
            `Player Score: ${playerScore}
             Computer Score: ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerScore;
        round.textContent = `You lose! Rock beats scissors.`
        score.textContent =    
            `Player Score: ${playerScore}
            Computer Score: ${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerScore;
        round.textContent = `You win! Scissors beats paper.`
        score.textContent =     
            `Player Score: ${playerScore}
             Computer Score: ${computerScore}`;
    } else { 
        round.textContent = `Draw!`
        scor.textContent =
            `Player Score: ${playerScore}
            Computer Score: ${computerScore}`;
    } 

    checkScore(playerScore, computerScore);
}

function checkScore(playerScore, computerScore) {
    if (playerScore === 5 && computerScore < 5) {
        round.textContent = `YOU WIN!!!`;
        score.textContent =
             `FINAL Player Score: ${playerScore}
             FINAL Computer Score: ${computerScore}`;
            newGame();
    } else if (computerScore === 5 && playerScore < 5) {
        round.textContent = `You lose...`;
        score.textContent = 
             `FINAL Player Score: ${playerScore}
             FINAL Computer Score: ${computerScore}`;
            newGame();
    } else if (computerScore === 5 && playerScore === 5) {
        round.textContent = `It's a tie!`;
        score.textContent = 
             `FINAL Player Score: ${playerScore}
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

