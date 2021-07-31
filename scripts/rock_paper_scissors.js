function computerPlay() 
{
    const computerChoice = ["Rock", "Paper", "Scissors"]
    return computerChoice[Math.floor(Math.random() * 3)];
}

function playerPlay() 
{
    let playerChoice;
    do
    {
        playerChoice = prompt("Rock, Paper or Scissors?")
    }
    while (playerChoice != "Rock" && playerChoice != "Paper" && playerChoice != "Scissors") 

        return playerChoice;

}

let computerChoice = computerPlay();
let playerChoice = playerPlay();

function game(computerChoice, playerChoice) 
{
    if (computerChoice === "Rock" && playerChoice === "Paper")
    {
        alert(`You win! ${playerChoice} beats ${computerChoice}`);
    }
    else if (computerChoice === "Paper" && playerChoice === "Scissors")
    {
        alert(`You win! ${playerChoice} beats ${computerChoice}`);
    }
    else if (computerChoice === "Scissors" && playerChoice === "Rock")
    {
        alert(`You win! ${playerChoice} beats ${computerChoice}`);
    }
    else if (computerChoice === "Paper" && playerChoice === "Rock")
    {
        alert(`You lose! ${computerChoice} beats ${playerChoice}`);
    }
    else if (computerChoice === "Rock" && playerChoice === "Scissors")
    {
        alert(`You lose! ${computerChoice} beats ${playerChoice}`);
    } 
    else if (computerChoice === "Scissors" && playerChoice === "Paper")
    {
        alert(`You lose! ${computerChoice} beats ${playerChoice}`);
    }
    else 
    {
        alert(`It's a tie! Both players chose ${computerChoice}`);
    }
}

game(computerChoice, playerChoice);
