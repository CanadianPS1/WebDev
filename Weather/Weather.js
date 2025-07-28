//d3df5d3c92ea812769bd9ad5b87c118f
//open with http://localhost:8000 and run python -m http.server 8000 in the command line
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
    const iframe = document.getElementById("weatherWidget");
    apiKey = "d3df5d3c92ea812769bd9ad5b87c118f";
    if(oneDayForcast){
        url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateName},${countryName}&appid=${apiKey}&units=imperial`;
        document.getElementById("weatherWidget").src = "OneDay.html";
    }else{
        document.getElementById("weatherWidget").src = "FiveDay.html";
        url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${stateName},${countryName}&appid=${apiKey}&units=imperial`;

    }
    fetch(url).then(response => response.json()).then(data => {
        console.clear();
        console.log("~" + cityName + ", " + stateName + "~");
        if(oneDayForcast){
            const iframe = document.getElementById("weatherWidget");
            iframe.onload = () => {
            try{
                const iconCode = data.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
                iframe.contentWindow.document.getElementById("weatherIcon").src = iconUrl;
                const tempEl = iframe.contentWindow.document.getElementById("temp");
                if(tempEl){
                    tempEl.textContent = data.main.temp_min + "°F / " + data.main.temp_max + "°F";
                    console.log("Updated iframe textContent");
                }else console.error("Element with id 'temp' not found in iframe.");
            }catch (e){
                console.error("Access to iframe DOM denied:", e);
            }
            };
            iframe.src = "OneDay.html"
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
