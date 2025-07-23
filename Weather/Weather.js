//d3df5d3c92ea812769bd9ad5b87c118f
const searchButton = document.getElementById("citySearchButton");
searchButton.addEventListener("click",() =>{
    cityName = document.getElementById("city").value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=erie,pennsylvania,US&appid=d3df5d3c92ea812769bd9ad5b87c118f&units=imperial')
  .then(response => response.json())
  .then(data => {
    //document.getElementById()
  })
  .catch(error => console.error('Error:', error));
});
