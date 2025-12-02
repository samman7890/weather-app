const apiKey = "3d55daa9973ceaa8d415a3a3562b0c3c";

// Select elements
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weather-result");
const forecastContainer = document.getElementById("forecast-container");
const loading = document.getElementById("loading");

// Search with ENTER
cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") searchWeather();
});

// Search button click
searchBtn.addEventListener("click", searchWeather);

// Search handler
function searchWeather() {
    const city = cityInput.value.trim();
    const errorBox = document.getElementById("error-message");

    // Reset message + shake
    errorBox.innerHTML = "";
    cityInput.classList.remove("shake");

    // If empty input
    if (city === "") {
        errorBox.innerHTML = "⚠️ Please enter a city name.";
        cityInput.classList.add("shake");
        return;
    }

    loading.classList.remove("hidden");
    weatherResult.innerHTML = "";
    forecastContainer.innerHTML = "";

    getWeather(city);
    getForecast(city);
}


// Fetch current weather
function getWeather(city) {
    const errorBox = document.getElementById("error-message");

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {

            // Invalid city → show error box
            if (data.cod == "404") {
                loading.classList.add("hidden");
                errorBox.textContent = "❌ City not found. Try again.";
                weatherResult.innerHTML = "";
                forecastContainer.innerHTML = "";
                return;
            }

            // Clear old errors
            errorBox.textContent = "";

            displayWeather(data);
        })
        .catch(() => {
            loading.classList.add("hidden");
            errorBox.textContent = "⚠️ Error fetching weather data.";
        });
}


// Display weather + background
function displayWeather(data) {
    loading.classList.add("hidden");

    if (data.cod == "404") {
        weatherResult.innerHTML = "<p>City not found.</p>";
        return;
    }

    // Change background based on weather
    const weatherMain = data.weather[0].main.toLowerCase();
    document.body.className = "default-bg";

    if (weatherMain.includes("cloud")) {
        document.body.classList.add("cloudy-bg");
    } else if (weatherMain.includes("rain")) {
        document.body.classList.add("rain-bg");
    } else if (weatherMain.includes("snow")) {
        document.body.classList.add("snow-bg");
    } else if (weatherMain.includes("clear")) {
        document.body.classList.add("sunny-bg");
    }

    weatherResult.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
        <p><strong>${data.weather[0].description}</strong></p>

        <p>🌡️ Temp: <strong>${data.main.temp}°C</strong></p>
        <p>Feels like: ${data.main.feels_like}°C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬️ Wind: ${data.wind.speed} m/s</p>
    `;

    weatherResult.classList.add("show");
}

// Fetch forecast
function getForecast(city) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => displayForecast(data))
        .catch(() => (forecastContainer.innerHTML = "<p>Error loading forecast.</p>"));
}

// Convert UTC → city local time using OpenWeather timezone offset
function convertToLocalTime(utcSeconds, timezoneOffset) {
    return new Date((utcSeconds + timezoneOffset) * 1000);
}

// Display 5-day forecast
function displayForecast(data) {
    forecastContainer.innerHTML = "";

    const timezoneOffset = data.city.timezone; // seconds offset

    for (let i = 0; i < data.list.length; i += 8) {
        const item = data.list[i];

        // Convert forecast date to local time
        const localDateObj = convertToLocalTime(item.dt, timezoneOffset);

        const localDate = localDateObj.toLocaleDateString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        });

        const card = document.createElement("div");
        card.classList.add("forecast-card");

        card.innerHTML = `
            <h4>${localDate}</h4>
            <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png">
            <p><strong>${item.weather[0].description}</strong></p>
            <p>🌡️ ${item.main.temp}°C</p>
            <p>💧 Humidity: ${item.main.humidity}%</p>
        `;

        forecastContainer.appendChild(card);
    }

    forecastContainer.classList.add("show");
}
