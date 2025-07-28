//open with http://localhost:8000 and run python -m http.server 8000 in the command line
const searchButton = document.getElementById("citySearchButton");
const oneDay = document.getElementById("oneDay");
const fiveDay = document.getElementById("fiveDay");
document.getElementById("city").textContent = localStorage.getItem("city");
document.getElementById("state").textContent = localStorage.getItem("state");
document.getElementById("country").textContent = localStorage.getItem("country");
const savedState = localStorage.getItem("state");
const savedCountry = localStorage.getItem("country");
let oneDayForcast = true;
oneDayForcast = localStorage.getItem("forcast");
oneDay.addEventListener("click", ()=>{
    oneDayForcast = true;
});
fiveDay.addEventListener("click", ()=>{
    oneDayForcast = false;
});
searchButton.addEventListener("click",() =>{
    const cityName = document.getElementById("city").value;
    const stateName = document.getElementById("state").value;
    const countryName = document.getElementById("country").value;
    const iframe = document.getElementById("weatherWidget");
    fetch("apiKey.json").then(response => response.json()).then(data => {
        const apiKey = data.weatherKey;
        console.log("weatherKey:", apiKey);
        if(oneDayForcast){
            url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateName},${countryName}&appid=${apiKey}&units=imperial`;
            document.getElementById("weatherWidget").src = "OneDay.html";
        }else{
            document.getElementById("weatherWidget").src = "FiveDay.html";
            url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${stateName},${countryName}&appid=${apiKey}&units=imperial`;
        }
        // localStorage.setItem("city", cityName);
        // localStorage.setItem("state", stateName);
        // localStorage.setItem("country", countryName);
        // localStorage.setItem("forcast", oneDayForcast);
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
                    const iframe = document.getElementById("weatherWidget");
                    iframe.onload = () => {
                    try{
                        const iconCode = data.weather[0].icon;
                        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
                        iframe.contentWindow.document.getElementById(`day${i}Image`).src = iconUrl;
                        const tempEl = iframe.contentWindow.document.getElementById(`d${i}temp`);
                        if(tempEl){
                            tempEl.textContent = data.main.temp_min + "°F / " + data.main.temp_max + "°F";
                            console.log("Updated iframe textContent");
                        }else console.error("Element with id 'temp' not found in iframe.");
                    }catch (e){
                        console.error("Access to iframe DOM denied:", e);
                    }
                    };
                    iframe.src = "FiveDay.html"
                    }
            }
        }).catch(error => console.error('Error:', error));
    });
});
