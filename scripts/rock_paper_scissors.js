function computerPlay() {
    const computerChoice = ["Rock", "Paper", "Scissors"]
    return computerChoice[Math.floor(Math.random() * 3)];
}

alert(computerPlay());