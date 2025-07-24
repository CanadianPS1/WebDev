//d3df5d3c92ea812769bd9ad5b87c118f
const searchButton = document.getElementById("citySearchButton");
const oneDay = document.getElementById("oneDay");
const fiveDay = document.getElementById("fiveDay");

let oneDayForcast = true;
let fiveDayForcast = false;
oneDay.addEventListener("click", ()=>{
    oneDayForcast = true;
    fiveDayForcast = false;
});
fiveDay.addEventListener("click", ()=>{
    oneDayForcast = false;
    fiveDayForcast = true;
});
searchButton.addEventListener("click",() =>{
    const cityName = document.getElementById("city").value;
    const stateName = document.getElementById("state").value;
    const countryName = document.getElementById("country").value;
    apiKey = "d3df5d3c92ea812769bd9ad5b87c118f";
    if(oneDayForcast){
      url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateName},${countryName}&appid=${apiKey}&units=imperial`;
    }else{
      url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${stateName},${countryName}&appid=${apiKey}&units=imperial`;
    }
    fetch(url).then(response => response.json()).then(data => {
        console.clear();
        console.log("~" + cityName + ", " + stateName + "~");
        if(oneDayForcast){
            console.log("Temperature:", data.main.temp);
            console.log("Weather Condition:", data.weather[0].main);
            console.log("Humidity:", data.main.humidity);
        }else{
            for(i = 0; i < 5; i++){
                console.log("Day: " + (i + 1));
                console.log("Temperature:", data.list[i].main.temp);
                console.log("Weather Conditions: ", data.list[i].weather[0].main);
                console.log("Humidity: ", data.list[0].main.humidity);
            }
            
        }
        
    }).catch(error => console.error('Error:', error));
});
