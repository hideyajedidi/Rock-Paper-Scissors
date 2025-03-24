function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(cc, hc) {
    if (cc === "rock") {
        switch (hc) {
            case "rock":
                return [0, 0]; // tie
            case "paper":
                return [0, 1]; // human wins
            case "scissors":
                return [1, 0]; // computer wins
        }
    } else if (cc === "paper") {
        switch (hc) {
            case "paper":
                return [0, 0]; // tie
            case "rock":
                return [1, 0]; // computer wins
            case "scissors":
                return [0, 1]; // human wins
        }
    } else {
        switch (hc) {
            case "rock":
                return [0, 1]; // human wins
            case "paper":
                return [1, 0]; // computer wins
            case "scissors":
                return [0, 0]; // tie
        }
    }
}

let humanScore = 0;
let computerScore = 0;
const humanScoreElem = document.getElementById("human-score");
const computerScoreElem = document.getElementById("computer-score");
const resultElem = document.getElementById("result");
const resetButton = document.getElementById("reset");

// Adding event listeners to buttons
document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));

function playGame(humanChoice) {
    let computerChoice = getComputerChoice();
    let [computer, human] = playRound(computerChoice, humanChoice);

    // Update scores
    humanScore += human;
    computerScore += computer;
    humanScoreElem.textContent = humanScore;
    computerScoreElem.textContent = computerScore;

    // Display the result
    if (human > computer) {
        resultElem.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (computer > human) {
        resultElem.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    } else {
        resultElem.textContent = `It's a tie! You both chose ${humanChoice}.`;
    }

    // Check if the game should end
    if (humanScore === 5 || computerScore === 5) {
        setTimeout(() => {
            if (humanScore > computerScore) {
                alert("Congratulations! You win the game!");
            } else {
                alert("Game over! You lose!");
            }
            resetButton.style.display = "inline-block"; // Show reset button
        }, 500);
    }
}

// Reset game
resetButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    humanScoreElem.textContent = humanScore;
    computerScoreElem.textContent = computerScore;
    resultElem.textContent = "";
    resetButton.style.display = "none"; // Hide reset button
});
