class Weather{
    constructor(city,state) {
        this.city=city;
        this.state=state;
        this.api_key='7705eb874dc29fa5d30b514168e9faaa';
    }

    // fetch weather data
    async getWeatherData(){
        const proxy = `https://cors-anywhere.herokuapp.com/`
        const weatherData = await fetch(`${proxy}api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.api_key}`);

        const response = await weatherData.json();

        return response;
    }

    changeLocation(city,state){
        this.city=city;
        this.state=state;
    }
}