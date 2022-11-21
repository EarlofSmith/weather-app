class currentWeather{
    async fetchCurrent(input) {
       // api key for open weather
       const myKey = "e229d0779c3492fe78bb28175e18dbe9";
       // converts city choice into latitude and longitude coordinates
       var location = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=${myKey}`);
       // stores input as a json
       var coordinates = await location.json();
     
       // fetches current conditions
       const currentConditions = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0].lat}&lon=${coordinates[0].lon}&exclude=hourly,minutely&appid=${myKey}&units=imperial`);
   
       var storedCurrentConditions = await currentConditions.json();

       return storedCurrentConditions;
       }
 }

class showCurrent {
    constructor(){
        this.container = document.getElementById("current-weather");
        this.city;
    }
// creates html and adds data for current weather
    displayCurrent(data) {
        this.container.innerHTML += `
            <h5 class="h1 bg-primary color-white">Current Weather Conditions</h5>
            <div class="container d-flex justify-content-center p-3">
                
                <div class="card text-center bg-primary text-light  " style="width: 18rem;">
                    <div class="card-body justify-content-center text-center">
                        <h6 class="card-head">${data.name} <img src= http://openweathermap.org/img/w/${data.weather[0].icon}.png></h6>
                        <p class="card-text">Current Temperature: ${data.main.temp} </p>
                        <p class="card-text">High Temperature ${data.main.temp_max} °F</p>
                        <p class="card-text">Low Temperature ${data.main.temp_min} °F</p>
                        <p class="card-text">Humidity ${data.main.humidity} %</p>
                        <p class="card-text">Feels Like  ${data.main.feels_like} °F</p>
                        <p class="card-text">Wind Speed ${data.wind.speed} mph</p>
                        <p class="card-text"> ${data.weather[0].description} </p>
                    </div>
                </div>
               
    `;
    }
}