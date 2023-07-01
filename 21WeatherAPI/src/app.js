const inputEl = document.querySelector("#input");
const searchBtn = document.querySelector("#search");
const cityName = document.querySelector("#cityName");
const weatherType = document.querySelector("#weather");
const temperature = document.querySelector("#temperature");
const minTemperature = document.querySelector(".min-temp");
const maxTemperature = document.querySelector(".max-temp");
const wind = document.querySelector("#wind");
const humidity = document.querySelector("#humidity");
const pressure = document.querySelector("#pressure");
const weatherImage = document.querySelector("#weather-image");
const weatherBody = document.querySelector("#weatherDetails");
const wrongLocation = document.querySelector("#wrong-location");

// to make sure cursor automatically focuses on input box
inputEl.focus();

// to clear whole weather details body
if (inputEl.value === "") {
  weatherBody.style.display = "none";
  wrongLocation.style.display = "none";
}

async function checkWeather(city) {
  const apiKey = "ab49d3a77221d710feb260cf2531ab3c";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );

  console.log(weather_data);

  // to check if entered location is correct and if it's not empty
  if (weather_data.cod === `404` || weather_data.cod === `400`) {
    wrongLocation.style.display = "block";
    weatherBody.style.display = "none";
    inputEl.value = "";
    inputEl.focus();
  } else {
    wrongLocation.style.display = "none";
    weatherBody.style.display = "flex";
    inputEl.value = "";
    inputEl.focus();

    // for image
    switch (weather_data.weather[0].main) {
      case "Clouds":
        weatherImage.src = "/assets/cloud.png";
        break;
      case "Mist":
        weatherImage.src = "/assets/mist.png";
        break;
      case "Clear":
        weatherImage.src = "/assets/clear.png";
        break;
      case "Rain":
        weatherImage.src = "/assets/rain.png";
        break;
      case "Snow":
        weatherImage.src = "/assets/snow.png";
        break;
    }

    cityName.innerHTML = `Place : ${weather_data.name}`;

    temperature.innerHTML = `Temperature : <b>${Math.round(
      weather_data.main.temp - 273.15
    )}℃</b>`;

    minTemperature.innerHTML = `Min : <b>${Math.round(
      weather_data.main.temp_min - 273.15
    )}℃</b> | `;

    maxTemperature.innerHTML = `Max : <b>${Math.round(
      weather_data.main.temp_max - 273.15
    )}℃</b>`;

    weatherType.innerHTML = `Weather : <b>${weather_data.weather[0].main}</b>`;

    wind.innerHTML = `Wind Speed : <b>${weather_data.wind.speed} m/s</b>`;

    humidity.innerHTML = `Humidity : <b>${weather_data.main.humidity} %</b>`;

    pressure.innerHTML = `Pressure : <b>${weather_data.main.pressure} hPa</b>`;
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputEl.value);
});
