let randomNumber =  Math.floor(Math.random() * 100);
print("NUMBER: " + randomNumber);
const scoreDisplay = document.getElementById("number");
const clickButton = document.getElementById("button");
const resultDisplay = document.getElementById("result");
clickButton.addEventListener("click",() =>{
    if(number == randomNumber){
        print("number was random number");
        resultDisplay.textContent = getResult("number was random number");
    }else if(number < randomNumber){
        print("number was less than random number");
        resultDisplay.textContent = getResult("number was less than random number");
    }else{
        print("number was greater than random number");
        resultDisplay.textContent = getResult("number was greater than random number");
    }
});
