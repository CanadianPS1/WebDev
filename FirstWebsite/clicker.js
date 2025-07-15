let score = 0;
const scoreDisplay = document.getElementById("score");
const clickButton = document.getElementById("click-button");
clickButton.addEventListener("click",() =>{
    score += 1;
    scoreDisplay.textContent = score;
});
const choices = ["rock","paper","scissors"];
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("rps-result");
document.querySelectorAll(".rps").forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.dataset.choice;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        playerChoiceDisplay.textContent = playerChoice;
        computerChoiceDisplay.textContent = computerChoice;
        resultDisplay.textContent = getResult(playerChoice, computerChoice);
    });
});
function getResult(player,computer){
    if(player === computer) return "Its a TIE!!";
    else if(player === "rock" && computer === "scissors" ||
            player === "scissors" && computer === "paper" ||
            player === "paper" && computer === "rock") 
        return "You WIN!!!";
    else return "You Lose!!!";   
}