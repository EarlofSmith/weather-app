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
  
    // fetches current conditions
    const currentConditions = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0].lat}&lon=${coordinates[0].lon}&exclude=hourly,minutely&appid=${myKey}&units=imperial`);

    var storedCurrentConditions = await currentConditions.json();
    
    
    // fetches the 5 day forcast
    const forecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates[0].lat}&lon=${coordinates[0].lon}&appid=${myKey}&units=imperial`
      );
    var storedForecast = await forecast.json();
console.log(storedForecast)
    return storedForecast;
    }
}



class showForcast {
    constructor(){
        this.container = document.getElementById("forecast");
        this.city;
    }

    displayForecast(data) {
        console.log(data);
        this.container.innerHTML += `

            <div class="container">
                <h5 class="card-title">Current Weather Conditions</h5>
                <div class="card text-center " style="width: 18rem;">
                    <div class="card-body justify-content-center text-center">
                        <h6 class="card-head">${data.city.name} </h6>
                        <p class="card-text">Current Temperature: ${data.list[0].dt_txt} ${data.list[0].weather[0].icon}</p>
                        <p class="card-text">Current Temperature: ${data.list[0].main.temp} °F</p>
                        <p class="card-text">High Temperature ${data.list[0].main.temp_max} °F</p>
                        <p class="card-text">Low Temperature ${data.list[0].main.temp_min} °F</p>
                        <p class="card-text">Humidity ${data.list[0].main.humidity} %</p>
                        <p class="card-text">Feels Like  ${data.list[0].main.feels_like} °F</p>
                        <p class="card-text">Wind Speed ${data.list[0].wind.speed} mph</p>
                        <p class="card-text"> ${data.list[0].weather[0].description} </p>
                    </div>
                </div>
                <div class="card text-center" style="width: 18rem;">
                    <div class="card-body justify-content-center">
                        <h1>5 Day Forecast</h1>
                    </div>
                </div>
                <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <div class="col">
                        <div class="p-3 border bg-light">
                            <div class="card-body justify-content-center text-center">
                                <h6 class="card-head">${data.list[4].dt_txt} ${data.list[4].weather[0].icon}</h6>
                                <p class="card-text">Current Temperature: ${data.list[4].main.temp} °F</p>
                                <p class="card-text">High Temperature ${data.list[4].main.temp_max} °F</p>
                                <p class="card-text">Low Temperature ${data.list[4].main.temp_min} °F</p>
                                <p class="card-text">Humidity ${data.list[4].main.humidity} %</p>
                                <p class="card-text">Feels Like  ${data.list[4].main.feels_like} °F</p>
                                <p class="card-text">Wind Speed ${data.list[4].wind.speed} mph</p>
                                <p class="card-text"> ${data.list[4].weather[0].description} </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light">
                            <div class="card-body justify-content-center text-center">
                                <h6 class="card-head">${data.list[12].dt_txt} ${data.list[12].weather[0].icon}</h6>
                                <p class="card-text">Current Temperature: ${data.list[12].main.temp} °F</p>
                                <p class="card-text">High Temperature ${data.list[12].main.temp_max} °F</p>
                                <p class="card-text">Low Temperature ${data.list[12].main.temp_min} °F</p>
                                <p class="card-text">Humidity ${data.list[12].main.humidity} %</p>
                                <p class="card-text">Feels Like  ${data.list[12].main.feels_like} °F</p>
                                <p class="card-text">Wind Speed ${data.list[12].wind.speed} mph</p>
                                <p class="card-text"> ${data.list[12].weather[0].description} </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light">
                            <div class="card-body justify-content-center text-center">
                                <h6 class="card-head">${data.list[20].dt_txt} ${data.list[20].weather[0].icon}</h6>
                                <p class="card-text">Current Temperature: ${data.list[20].main.temp} °F</p>
                                <p class="card-text">High Temperature ${data.list[20].main.temp_max} °F</p>
                                <p class="card-text">Low Temperature ${data.list[20].main.temp_min} °F</p>
                                <p class="card-text">Humidity ${data.list[20].main.humidity} %</p>
                                <p class="card-text">Feels Like  ${data.list[20].main.feels_like} °F</p>
                                <p class="card-text">Wind Speed ${data.list[20].wind.speed} mph</p>
                                <p class="card-text"> ${data.list[20].weather[0].description} </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light">
                            <div class="card-body justify-content-center text-center">
                                <h6 class="card-head">${data.list[28].dt_txt} ${data.list[28].weather[0].icon}</h6>
                                <p class="card-text">Current Temperature: ${data.list[28].main.temp} °F</p>
                                <p class="card-text">High Temperature ${data.list[28].main.temp_max} °F</p>
                                <p class="card-text">Low Temperature ${data.list[28].main.temp_min} °F</p>
                                <p class="card-text">Humidity ${data.list[28].main.humidity} %</p>
                                <p class="card-text">Feels Like  ${data.list[28].main.feels_like} °F</p>
                                <p class="card-text">Wind Speed ${data.list[28].wind.speed} mph</p>
                                <p class="card-text"> ${data.list[28].weather[0].description} </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light">
                            <div class="card-body justify-content-center text-center">
                                <h6 class="card-head">${data.list[36].dt_txt} ${data.list[36].weather[0].icon}</h6>
                                <p class="card-text">Current Temperature: ${data.list[36].main.temp} °F</p>
                                <p class="card-text">High Temperature ${data.list[36].main.temp_max} °F</p>
                                <p class="card-text">Low Temperature ${data.list[36].main.temp_min} °F</p>
                                <p class="card-text">Humidity ${data.list[36].main.humidity} %</p>
                                <p class="card-text">Feels Like  ${data.list[36].main.feels_like} °F</p>
                                <p class="card-text">Wind Speed ${data.list[36].wind.speed} mph</p>
                                <p class="card-text"> ${data.list[36].weather[0].description} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `;
    }

    Store(data) {
        localStorage.setItem("city", JSON.stringify(data));
    }

    retrive(){
        this.city = JSON.parse(localStorage.getItem(`${input}`));
        return this.city
    }
    
    addCity(data) {
        var cityAdd = document.getElementById("display");
        console.log(data)
        cityAdd.innerHTML += `<p>${data.city.name}</p>`;
        localStorage.setItem(`${data.city.name}`,JSON.stringify(data))
    }
  }
function Clear(){
    forecast = document.getElementById("forecast")
    forecast.innerHTML= ""
}
  
  var W =new weather();
var show =new showForcast();
var CW = new currentWeather();
var SC = new showCurrent();
var search = document.getElementById("Search-bar");
var button = document.getElementById("search-btn");
button.addEventListener("click", () => {
    Clear();
    const current = search.value;
    search.value = '';
    W.fetchWeather(current).then((data) => {
        console.log(data);
      show.displayForecast(data);
      show.Store(data);
      show.addCity(data);

    });
    CW.fetchCurrent(current).then((data) => {
        console.log(data);
        SC.displayCurrent(data);
        });

  });
  
//   function appendValueToStorage(key, value) {
//   var values = JSON.parse(localStorage.getItem(key));
//   if (values === null) {
//     values = [];
//   }

//   values.push(value);
//   localStorage.setItem(key, JSON.stringify(values));
//   console.log(localStorage.getItem(key));
// }

// appendValueToStorage('todays-values', document.getElementById("sample").value);