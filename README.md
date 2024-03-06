# Weather Dashboard

## Description
Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. This challenge involves building a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

The 5 Day Weather Forecast API will be used to retrieve weather data for cities. The base URL should look like the following: https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}. After registering for a new API key, it may take up to 2 hours for the key to activate. To retrieve geographical coordinates given a city name, the OpenWeatherMap APIs will be utilized.

The application will use localStorage to store any persistent data. For more information on working with the OpenWeather API, refer to the Full-Stack Blog on how to use API keys.

## User Story
As a traveler, I want to see the weather outlook for multiple cities so that I can plan a trip accordingly.

## Acceptance Criteria
1. The weather dashboard should have form inputs for searching for a city.
2. Upon searching for a city, the user should be presented with current and future conditions for that city, and the city should be added to the search history.
3. When viewing current weather conditions for a city, the user should be presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed.
4. When viewing future weather conditions for a city, the user should be presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity.
5. Clicking on a city in the search history should again present the user with current and future conditions for that city.

## API 
5 Day Weather Forecast: https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}.

## Usage
To use the application, simply open the index.html file in a web browser. Enter a city in the form input to retrieve the weather outlook for that city.

## Credits
For more information on how to work with the OpenWeather API and API keys, refer to the Full-Stack Blog.

## Links
Repo: https://github.com/BrianHCordova/weather-dashboard
Deployed site: https://brianhcordova.github.io/weather-dashboard/