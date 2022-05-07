function computerPlay() {
    if (Math.floor(Math.random() * 100) <= 33) {
        
        return "rock";

    } else if (Math.floor(Math.random() * 100) <= 66) {

        return "paper";

    } else { return "scissors"; }
}

