document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var city = document.getElementById("city-input").value;
    getWeather(city);
    addToSearchHistory(city);
    document.getElementById("city-input").value = "";
  });
  
  function getWeather(city) {
    // Make an API call to fetch weather data for the given city
    // Update the "current-weather-info" and "forecast-info" sections with the retrieved data
  }
  
  function addToSearchHistory(city) {
    // Add the searched city to the search history list
    // Attach an event listener to each history item to fetch weather data when clicked
  }
  
  function displayCurrentWeather(weatherData) {
    // Display the current weather data in the "current-weather-info" section
  }
  
  function displayForecast(weatherData) {
    // Display the 5-day forecast data in the "forecast-info" section
  }
  