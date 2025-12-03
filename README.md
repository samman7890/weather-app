# 🌤️ Weather Forecast App

A live weather application built using **HTML**, **CSS**, **JavaScript**, and the **OpenWeatherMap API**.  
Users can search any city in the world and instantly view:

- Current weather
- Temperature & feels-like
- Humidity and wind speed
- Weather icons
- Automatic background changes
- 5-day forecast with correct local dates
- Error handling for empty or invalid input

This project demonstrates **AJAX API calls**, clean UI rendering, and dynamic DOM updates.

---

## 🚀 Live Demo
🔗 **GitHub Pages:** https://github.com/samman7890/weather-app 
🎥 **Demo Video:** https://video.laurea.fi/media/weather%20app/0_92n56c2a
**Live Link:** https://samman7890.github.io/weather-app/

---

## 📦 Features

### 🌍 Search Any City  
Users can type a city name and get live weather instantly.

### 🧪 Current Weather Includes
- Temperature (°C)  
- Feels-like temperature  
- Condition description  
- Humidity (%)  
- Wind speed (m/s)  
- Weather icon  
- Country + city name  

### 📅 5-Day Forecast
- One reading per day (from 3-hour API data)  
- Local time conversion using timezone offset  
- Icons + temperature + humidity for each day  

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
/weather   → https://api.openweathermap.org/data/2.5/weather?q={city}

// 5-day forecast (3-hour intervals)
/forecast  → https://api.openweathermap.org/data/2.5/forecast?q={city}
```

Both use:
- `units=metric`
- `appid=your_api_key`

### 3️⃣ JSON is parsed  

**From `/weather`:**
- `name`
- `sys.country`
- `main.temp`
- `main.feels_like`
- `main.humidity`
- `wind.speed`
- `weather[0].description`
- `weather[0].icon`

**From `/forecast`:**
- `list[]` forecast items  
- `dt` (timestamp)  
- `main.temp`  
- `main.humidity`  
- `weather[0].description`  
- `weather[0].icon`  
- `city.timezone`  

The app selects **1 forecast per day** (every 8th item = 5 days).

### 4️⃣ Local time conversion
OpenWeatherMap provides UTC timestamps + timezone offset.  
Converted using:

```js
new Date((utcSeconds + timezoneOffset) * 1000)
```

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

The app checks:
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
- Missing API fields  

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

## 🧰 Setup Instructions

1. Clone the repository
   git clone https://github.com/samman7890/weather-app.git
   cd weather-app
2. Add your OpenWeatherMap API key inside app.js
   const apiKey = "YOUR_KEY_HERE";
3. Open `index.html` in your browser 
4. live link:  https://samman7890.github.io/weather-app/

---

## 📸 Screenshots

Below are some example screenshots of the Weather Forecast App.

### 🏠 Home Screen (Before Search)
<img width="1439" height="812" alt="Screenshot 2025-12-03 at 23 07 41" src="https://github.com/user-attachments/assets/b70ccfc8-6d66-4faa-96c5-c5da1075aa4b" />


### 🔍 Search Results — Current Weather
<img width="1439" height="816" alt="Screenshot 2025-12-03 at 23 08 18" src="https://github.com/user-attachments/assets/0d0fe998-f340-43b9-b430-1153b2bbf227" />


### 📅 5-Day Forecast
<img width="1439" height="813" alt="Screenshot 2025-12-03 at 23 08 38" src="https://github.com/user-attachments/assets/c4b025e5-d271-4519-92c4-53f9bdeeeeec" />


---

## 🎓 Learning Outcomes  
During this project, I learned:

- How to work with real live APIs  
- JSON parsing & async JS  
- DOM updates without reloading the page  
- Error handling in `fetch()`  
- Designing a clean and responsive UI  
- Working with GitHub & live deployment  
- Creating a polished demo video  

---

## ⚠️ Known Limitations
- Icons come from OpenWeatherMap (not custom)  
- Forecast uses 3-hour data (API limitation)  
- Backgrounds cover general weather conditions only  

---

## 🧩 Self-Assessment

In this project, I successfully implemented a fully functional Weather Forecast Application using HTML, CSS, JavaScript, and the OpenWeatherMap API. I was able to meet all core requirements of the assignment, including making live API requests, handling JSON responses, updating the DOM dynamically, and providing both current weather data and a 5-day forecast.

I paid special attention to user experience by adding:
- Input validation and clear error messages
- Loading indicators
- Dynamic background changes based on weather conditions
- Responsive layout and clean visual presentation

One of the main challenges was converting the forecast timestamps into the correct local dates, but I solved this by applying the timezone offset provided by the API. This improved the accuracy and reliability of the forecast section.

I also learned how to structure a small front-end project cleanly, use fetch() with proper error handling, and deploy the application using GitHub Pages. The demo video allowed me to clearly communicate the architecture, logic, and user flow of the app.

Overall, I am satisfied with the final result. The project works smoothly from the live URL, handles edge cases, has a clean UI, and demonstrates my understanding of AJAX, asynchronous JavaScript, and API integration. If I had more time, I would add features like temperature unit toggling (°C/°F) and user geolocation for automatic weather detection.

---

## 👤 Author  
**Samman Upadhyay**  
Weather data provided by **OpenWeatherMap**.

