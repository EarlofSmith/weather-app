$(document).ready(function() {
    console.log("Ready!");
});


class weather{
 async fetchWeather(input) {
    // api key for open weather
    const myKey = "e229d0779c3492fe78bb28175e18dbe9";
    // converts city choice into latitude and longitude coordinates
    var location = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=${myKey}`);
    console.log(location)
    // stores input as a json
    var coordinates = await location.json();
console.log(coordinates)
    const forecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates[0].lat}&lon=${coordinates[0].lon}&appid=${myKey}&units=imperial`
      );
        console.log(forecast)
    var storedForecast = await forecast.JSON();
    console.log(storedForecast);
    return storedForecast;
    }
}

var W =new weather();
var search = document.getElementById("Search-bar");
var button = document.getElementById("search-btn");
button.addEventListener("click", () => {
    const current = search.value;
    search.value = '';
    W.fetchWeather(current).then((data) => {
        console.log(data)
    //   display.displayData(data);
    //   display.localStorageSet(data);
    });
  });