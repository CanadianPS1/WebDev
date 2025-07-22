let randomNumber =  Math.floor(Math.random() * 100);
console.log("NUMBER: " + randomNumber);
const clickButton = document.getElementById("button");
winImage = document.getElementById("winImage");
winImage.style.visibility = "hidden";
trys = 0;
clickButton.addEventListener("click",() =>{
    trys++;
    winImage.style.visibility = "hidden";
    const number = document.getElementById("number").value;
    const resultDisplay = document.getElementById("result");
    let num = parseInt(number);
    console.log(number);
    if(num === randomNumber){
        console.log("number was random number");
        resultDisplay.textContent = "CORRECT!!!, it took you " + trys + " trys";
        randomNumber =  Math.floor(Math.random() * 100);
        console.log("Random Num: " + randomNumber);
        winImage.style.visibility = "visible";
        trys = 0;
    }else if(num < randomNumber){
        winImage.style.visibility = "hidden";
        console.log("number was less than random number");
        resultDisplay.textContent = "number was less than random number";
    }else{
        winImage.style.visibility = "hidden";
        console.log("number was greater than random number");
        resultDisplay.textContent = "number was greater than random number";
    }
});
