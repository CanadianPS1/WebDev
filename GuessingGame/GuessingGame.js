let randomNumber =  Math.floor(Math.random() * 100);
console.log("NUMBER: " + randomNumber);
const clickButton = document.getElementById("button");
const winImage = document.getElementById("winImage");
clickButton.addEventListener("click",() =>{
    winImage.setAttribute()
    const number = document.getElementById("number").value;
    const resultDisplay = document.getElementById("result");
    let num = parseInt(number);
    console.log(number);
    if(num === randomNumber){
        console.log("number was random number");
        resultDisplay.textContent = "CORRECT!!!";
        randomNumber =  Math.floor(Math.random() * 100);
    }else if(num < randomNumber){
        console.log("number was less than random number");
        resultDisplay.textContent = "number was less than random number";
    }else{
        console.log("number was greater than random number");
        resultDisplay.textContent = "number was greater than random number";
    }
});
