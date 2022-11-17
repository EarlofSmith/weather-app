$(document).ready(function() {
    console.log("Ready!");
});



async fetchWeather(input) {
    // api key for open weather
const myKey = "e229d0779c3492fe78bb28175e18dbe9";
// converts city choice into latitude and longitude coordinates
var location = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=${myKey}`);}
// stores input as a json
var coordinates = await location.JSON();

var forecast = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates[0].lat}&lon=${coordinates[0].lon}&appid=${myKey}&units=imperial');
  const forecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates[0].lat}&lon=${coordinates[0].lon}&appid=${myKey}&units=imperial`
      );

var storedForecast = await forecast.JSON();