class UI{

    displayUI(data){
        const location = document.getElementById("location");
        const country = document.getElementById("country");
        const description = document.getElementById("description");
        const icon = document.getElementById("icon");
        const list = document.querySelector(".list-group")

        // displaying ui  data dynamically

        location.textContent=data.name;
        country.textContent=data.sys.country;
        description.textContent = data.weather[0].description;

        const weathercode = data.weather[0].id;

        // calculate temperature
        const temp = Math.round(data.main.feels_like -273);

        // calculate min temperature
        const min_temp = Math.round(data.main.temp_min -273);

        // calculate max temperature
        const max_temp = Math.round(data.main.temp_max -273);

        const output = `
        <li class="list-group-item">Humidity: ${data.main.humidity}</li>
        <li class="list-group-item">Temperature: ${temp}</li>
        <li class="list-group-item">Feels_like: ${data.main.feels_like}</li>
        <li class="list-group-item">Wind Speed: ${data.wind.speed}</li>
        <li class="list-group-item">Pressure: ${data.main.pressure}</li>
        <li class="list-group-item">Minimum Temperature: ${min_temp}</li>
        `;
        list.innerHTML=output;

        // display icons
        if (data.weather[0].id >= 200 && data.weather[0].id < 250) {
            icon.setAttribute("src","./images/thunderstorm.svg");
        }
        else  if(data.weather[0].id >= 300 && data.weather[0].id < 350) {
            icon.setAttribute("src","./images/drizzle.svg");
        }
        else  if(data.weather[0].id >= 500 && data.weather[0].id < 550) {
            icon.setAttribute("src","./images/rain1.svg");
        }
        else  if(data.weather[0].id >= 600 && data.weather[0].id < 650) {
            icon.setAttribute("src","./images/snow.svg");
        }
        else  if(data.weather[0].id >= 700 && data.weather[0].id < 790) {
            icon.setAttribute("src","./images/atmosphere.svg");
        }
        else if (data.weather[0].id === 800) {
            icon.setAttribute("src","./images/clear sky.svg");
        }
        else  if(data.weather[0].id >= 800 && data.weather[0].id < 810) {
            icon.setAttribute("src","./images/clouds.svg");
        }
    }
}