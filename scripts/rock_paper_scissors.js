function computerPlay() 
{
    const computerChoice = ["rock", "paper", "scissors"]
    return computerChoice[Math.floor(Math.random() * 3)];
}

function playerPlay() 
{
    let playerChoice;
    do
    {
        playerChoice = prompt(`Rock, Paper or Scissors?
        Your score: ${playerScore}
        Computer Score: ${computerScore}`)

        playerChoice.toLowerCase();
    }
    while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") 

        return playerChoice;

}

function capitalize(word) 
{
    let capLetter = word.charAt(0).toUpperCase();
    word = capLetter + word.substring(1);
    return word;
}

let computerScore = 0;
let playerScore = 0;

function round(computerChoice, playerChoice) 
{

        if (computerChoice === "rock" && playerChoice === "paper")
        {
            alert(`You win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}`);
            playerScore++;
        }
        else if (computerChoice === "paper" && playerChoice === "scissors")
        {
            alert(`You win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}`);
            playerScore++;
        }
        else if (computerChoice === "scissors" && playerChoice === "rock")
        {
            alert(`You win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}`);
            playerScore++;
        }
        else if (computerChoice === "paper" && playerChoice === "rock")
        {
            alert(`You lose! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}`);
            computerScore++;
        }
        else if (computerChoice === "rock" && playerChoice === "scissors")
        {
            alert(`You lose! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}`);
            computerScore++;
        } 
        else if (computerChoice === "scissors" && playerChoice === "paper")
        {
            alert(`You lose! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}`);
            computerScore++;
        }
        else 
        {
            alert(`It's a tie! Both players chose ${capitalize(computerChoice)}`);
        }
}


function game ()
{
    
    while(computerScore < 3 && playerScore < 3)
    {
        let computerChoice = computerPlay();
        let playerChoice = playerPlay();
        round(computerChoice, playerChoice);
    }
    
    if (computerScore >= 3)
    {
        alert(`You lose! ${computerScore} to ${playerScore}`);
        if (confirm("Want to play again?"))
        {
            playAgain();
        }
    }
    else if (playerScore >=3)
    {
        alert(`You win! ${playerScore} to ${computerScore}`);
        if (confirm("Want to play again?"))
        {
            playAgain();
        }
    }

    playerScore = 0;
    computerScore = 0;
}

function playAgain()
{
    playerScore = 0;
    computerScore = 0;
    game();
}


    game();



