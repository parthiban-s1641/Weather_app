// storage class
const storage = new Storage();

const WeatherLocationData = storage.getWeatherData()

const weather = new Weather(WeatherLocationData.city,WeatherLocationData.state);

// initialize ui to display
const ui = new UI;

document.addEventListener("DOMContentLoaded",getWeather);


function getWeather()  {
weather.getWeatherData()
    .then(data =>{
        console.log(data);
        ui.displayUI(data);
    })
    .catch(err => console.log(err))

}

    document.getElementById('save-btn').addEventListener("click",function(){

        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;

        // console.log(city,state);

        weather.changeLocation(city,state);

        // set item to ls
        storage.setWeatherData(city,state);
        // calling getWeather method to repaint the ui.
        getWeather();
        
        $('#locModal').modal('hide');
    })