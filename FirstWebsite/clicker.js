let score =0;
const scoreDisplay = document.getElementById("score");
const clickButton = document.getElementById("click-button");
clickButton.addEventListener("click",() =>{
    score += 1;
    scoreDisplay.textContent = score;
});
const choices = ["rock","paper","scissors"];