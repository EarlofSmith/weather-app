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
    var storedForecast = await forecast.json();
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

class showForcast {
    constructor(){
        this.container = document.getElementById("display");
        this.city;
        this.default= "denver";
    }

    displayForecast(data) {

        this.container.innerHTML = 
        <div class="container">
         <h5 class="card-title">Current Weather Conditions</h5>
        <div class="card text-center" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h6 class="card-head">${data.city.name}</h6>
                <p class="card-text">Current Temperature: ${data.list[0].main.temp} °F</p>
                <p class="card-text">High Temperature ${data.list[0].main.temp_max} °F</p>
                <p class="card-text">Low Temperature ${data.list[0].main.temp_min} °F</p>
                <p class="card-text">Humidity ${data.list[0].main.humidity} %</p>
                <p class="card-text">Feels Like  ${data.list[0].main.feels_like} °F</p>
                <p class="card-text">Wind Speed ${data.list[0].wind.gust} mph</p>
                <p class="card-text"> ${data.list[0].weather[0].description} </p>
             </div>
        </div>

        <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div class="col">
            <div class="p-3 border bg-light">Row column</div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light">Row column</div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light">Row column</div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light">Row column</div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light">Row column</div>
          </div>
        </div>
      </div>

    }

  }