//d3df5d3c92ea812769bd9ad5b87c118f
const searchButton = document.getElementById("citySearchButton");
const oneDay = document.getElementById("citySearchButton");
const fiveDay = document.getElementById("citySearchButton");

oneDayForcast = true;
fiveDayForcast = false;
oneDay.addEventListener("click", ()=>{
  oneDayForcast = true;
  fiveDayForcast = false;
});
fiveDay.addEventListener("click", ()=>{
  oneDayForcast = false;
  fiveDayForcast = true;
});
searchButton.addEventListener("click",() =>{
    cityName = document.getElementById("city").value;
    stateName = document.getElementById("state").value;
    countryName = document.getElementById("country").value;
    apiKey = "d3df5d3c92ea812769bd9ad5b87c118f";
    if(oneDayForcast){
      url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateName},${countryName}&appid=${apiKey}&units=imperial`;
    }else{
      url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${stateName},${countryName}&appid=${apiKey}&units=imperial`;
    }
    fetch(url)
  .then(response => response.json())
  .then(data => {
    //document.getElementById()
    console.log("Temperature:", data.main.temp);
    console.log("Weather Condition:", data.weather[0].main);
    console.log("Humidity:", data.main.humidity);
  })
  .catch(error => console.error('Error:', error));
});
