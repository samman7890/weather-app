# 🌤️ Weather Forecast App

A live weather application built using **HTML**, **CSS**, **JavaScript**, and the **OpenWeatherMap API**.  
Users can search any city in the world and instantly view:

- Current weather  
- Temperature & feels-like  
- Humidity, wind speed  
- Weather icons  
- Automatic background changes  
- 5-day forecast with correct local dates  
- Error handling for empty or invalid input  

This project demonstrates AJAX API calls, clean UI rendering, and dynamic DOM updates.

---

## 🚀 Live Demo
🔗 **GitHub Pages:** _Add your link here_  
🎥 **Demo Video:** _Add your YouTube or Canvas link here_

---

## 📦 Features

### 🌍 Search Any City
Users can type a city name and get live weather instantly.

### 🌡️ Current Weather Includes
- Temperature (°C)
- Feels-like temperature
- Condition description
- Humidity %
- Wind speed (m/s)
- Weather icon
- Country + City name

### 📅 5-Day Forecast
- One reading per day (from 3-hour API data)
- Local time conversion using timezone offset
- Icons + temp + humidity for each day

### 🎨 Dynamic Background
Changes based on weather conditions:
- ☀️ `sunny-bg`
- ☁️ `cloudy-bg`
- 🌧️ `rain-bg`
- ❄️ `snow-bg`
- 🌫️ `default-bg`

---

## 🧠 How It Works

### 1️⃣ User searches a city  
Input is validated. Empty search shows an error message.

### 2️⃣ Two API calls are made

```js
// Current conditions
/weather    → https://api.openweathermap.org/data/2.5/weather?q={city}

// 5-day forecast (3-hour intervals)
/forecast   → https://api.openweathermap.org/data/2.5/forecast?q={city}
```

Both use:
- `units=metric`
- `appid=your_api_key`

### 3️⃣ JSON is parsed

The app extracts fields like:

#### From /weather
- `name`
- `sys.country`
- `main.temp`
- `main.feels_like`
- `main.humidity`
- `wind.speed`
- `weather[0].description`
- `weather[0].icon`

#### From /forecast
- `list[]` forecast items  
- `dt` timestamps  
- `main.temp`  
- `main.humidity`  
- `weather[0].description`  
- `weather[0].icon`  
- `city.timezone`

The app then picks **1 reading per day** (every 8th item → 5 days).

### 4️⃣ Local time conversion

OpenWeatherMap returns UTC timestamps + timezone offsets.  
We convert them using:

```js
new Date((utcSeconds + timezoneOffset) * 1000)
```

This ensures forecast dates match the searched city.

### 5️⃣ UI updates dynamically

JavaScript inserts:

- Weather card  
- Forecast cards  
- Background classes  
- Error messages  

Each section fades in using CSS transitions.

### 6️⃣ Background changes based on weather

```css
.sunny-bg
.cloudy-bg
.rain-bg
.snow-bg
.default-bg
```

App checks:

```js
weather[0].main.toLowerCase()
```

and updates the body class.

### 7️⃣ Error handling

The app safely handles:

- Blank input  
- Invalid city (404)  
- Forecast errors  
- Network failure  
- Missing fields  

The UI never crashes — users always see a helpful message.

---

## 🗂️ File Structure

```
weather-app/
│── index.html
│── styles.css
│── app.js
│── README.md
```

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript (ES6)  
- OpenWeatherMap API  
- Fetch API (AJAX)  

---

## 🔧 Setup Instructions

1. Clone the repo  
2. Add your **OpenWeatherMap API key** inside `app.js`:

```js
const apiKey = "YOUR_KEY_HERE";
```

3. Open `index.html` in the browser  
4. Or deploy via GitHub Pages

---

## 🎯 Learning Outcomes

During this project I learned:

- How to work with real live APIs  
- JSON parsing & async JS  
- DOM updates without reloading the page  
- Error handling in fetch()  
- Designing a clean and responsive UI  
- Working with GitHub & live deployment  
- Creating a polished demo video

---

## 📝 Known Limitations

- Icons come from OpenWeatherMap (not custom)  
- Forecast uses 3-hour data (API limitation)  
- Backgrounds cover general conditions only  

---

## 👤 Author
**Samman Upadhyay**  
Weather data provided by **OpenWeatherMap**.

