const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "Write Your Own Key",
    "X-RapidAPI-Host": "Write Your Own Key",
  },
};

const getWeather = (city) => {
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    cloud_pct.innerHTML = response.cloud_pct;
    temp.innerHTML = response.temp;
    temp2.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    humidity2.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML = response.wind_speed;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
  })
  .then((err) => console.error(err));
}

submit.addEventListener("click",(e) =>{
	e.preventDefault()
	getWeather(city.value)
}) 


//Chennai

const getWeatherChennai = (city) => {
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    cloud_pctC.innerHTML = response.cloud_pct;
    tempC.innerHTML = response.temp;
    feels_likeC.innerHTML = response.feels_like;
    humidityC.innerHTML = response.humidity;
    min_tempC.innerHTML = response.min_temp;
    max_tempC.innerHTML = response.max_temp;
    wind_speedC.innerHTML = response.wind_speed;
    sunriseC.innerHTML = response.sunrise;
    sunsetC.innerHTML = response.sunset;
  })
  .then((err) => console.error(err));
}

//Chandigarh

const getWeatherChandigarh = (city) => {
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chandigarh', options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    cloud_pctK.innerHTML = response.cloud_pct;
    tempK.innerHTML = response.temp;
    feels_likeK.innerHTML = response.feels_like;
    humidityK.innerHTML = response.humidity;
    min_tempK.innerHTML = response.min_temp;
    max_tempK.innerHTML = response.max_temp;
    wind_speedK.innerHTML = response.wind_speed;
    sunriseK.innerHTML = response.sunrise;
    sunsetK.innerHTML = response.sunset;
  })
  .then((err) => console.error(err));
}

//Mumbai

const getWeatherMumbai = (city) => {
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    cloud_pctM.innerHTML = response.cloud_pct;
    tempM.innerHTML = response.temp;
    feels_likeM.innerHTML = response.feels_like;
    humidityM.innerHTML = response.humidity;
    min_tempM.innerHTML = response.min_temp;
    max_tempM.innerHTML = response.max_temp;
    wind_speedM.innerHTML = response.wind_speed;
    sunriseM.innerHTML = response.sunrise;
    sunsetM.innerHTML = response.sunset;
  })
  .then((err) => console.error(err));
}


//Guwahati

const getWeatherGuwahati = (city) => {
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Udaipur', options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    cloud_pctG.innerHTML = response.cloud_pct;
    tempG.innerHTML = response.temp;
    feels_likeG.innerHTML = response.feels_like;
    humidityG.innerHTML = response.humidity;
    min_tempG.innerHTML = response.min_temp;
    max_tempG.innerHTML = response.max_temp;
    wind_speedG.innerHTML = response.wind_speed;
    sunriseG.innerHTML = response.sunrise;
    sunsetG.innerHTML = response.sunset;
  })
  .then((err) => console.error(err));
}


getWeatherChennai("Chennai")
getWeatherChandigarh("Chandigarh")
getWeatherMumbai("Mumbai")
getWeatherGuwahati("Udaipur")


getWeather("Delhi")
