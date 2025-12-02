# 🌤️ Weather Forecast App  
A live weather application built using **HTML, CSS, JavaScript**, and the **OpenWeatherMap REST API**.  
Users can search any city in the world and instantly view:

- Current weather  
- Temperature & feels-like  
- Humidity, wind speed  
- Weather icons  
- Automatic background changes  
- 5-day forecast with date conversion  
- Error handling for empty or invalid input  

This project demonstrates AJAX API calls, clean UI rendering, and dynamic DOM updates.

---

## 🚀 Live Demo  
🔗 **GitHub Pages:** *Add your link here*  
🔗 **Video Demo:** *Add your YouTube or Canvas link here*

---

## 📦 Features

### 🌍 Search Any City  
Users enter a city name and instantly fetch:

- Temperature  
- Description (clear sky, clouds, rain…)  
- Humidity  
- Wind speed  
- City & country info  

### 🌤️ Automatic Weather Backgrounds  
The page background changes depending on weather type:

- ☀️ Sunny → warm gradient  
- ☁️ Cloudy → grey-blue  
- 🌧️ Rain → deep blue  
- ❄️ Snow → white-blue  
- Default → light blue sky  

### 📅 5-Day Forecast  
The forecast uses:

✔ City timezone  
✔ Correct date conversion  
✔ Icons  
✔ Temperature  
✔ Humidity

### ⚠️ Error Handling  
The app gracefully handles:

- Empty search  
- Non-existent city  
- API errors  
- Network problems  

### 📱 Responsive UI  
The layout works on:

- Laptop  
- Tablet  
- Mobile  

---

## 🛠️ Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Fetch API (AJAX)**
- **OpenWeatherMap API**

---

## 🔧 How It Works

### 1) User types a city name  
The app waits for "Search" or Enter key.

### 2) Input is validated  
If empty → shake animation + warning  
If invalid → “City not found” message  

### 3) API Request  
Two API calls are made:

```js
/weather       → current conditions  
/forecast      → 3-hour interval forecast (5 days)
